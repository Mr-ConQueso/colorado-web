import type { RequestHandler } from './$types';
import { env as privateEnv } from '$env/dynamic/private';

type MatomoConfig = {
	origin: URL;
	siteId: string;
	token: string;
	removeVisitorIp: boolean;
};

type RuntimeBindings = Record<string, string | undefined>;

function getBindings(platform: unknown): RuntimeBindings {
	const runtime = platform as { env?: RuntimeBindings } | undefined;

	return runtime?.env ?? {};
}

function getConfig(platform: unknown): MatomoConfig | null {
	const bindings = getBindings(platform);

	const originValue = bindings.MATOMO_ORIGIN ?? privateEnv.MATOMO_ORIGIN;
	const siteId = bindings.MATOMO_SITE_ID ?? privateEnv.MATOMO_SITE_ID;
	const token = bindings.MATOMO_TOKEN_AUTH ?? privateEnv.MATOMO_TOKEN_AUTH;
	const removeVisitorIp =
		(bindings.MATOMO_REMOVE_VISITOR_IP ?? privateEnv.MATOMO_REMOVE_VISITOR_IP) === 'true';

	if (!originValue || !siteId || !token) return null;
	if (!/^[1-9]\d*$/.test(siteId)) return null;

	try {
		const origin = new URL(originValue);

		// Only allow a fixed HTTPS upstream. Never derive it from a request.
		if (
			origin.protocol !== 'https:' ||
			origin.username ||
			origin.password ||
			origin.search ||
			origin.hash
		) {
			return null;
		}

		if (!origin.pathname.endsWith('/')) {
			origin.pathname += '/';
		}

		return { origin, siteId, token, removeVisitorIp };
	} catch {
		return null;
	}
}

function responseHeaders(cacheControl = 'no-store'): Headers {
	return new Headers({
		'Cache-Control': cacheControl,
		'X-Content-Type-Options': 'nosniff'
	});
}

async function serveTracker(config: MatomoConfig): Promise<Response> {
	try {
		const upstream = await fetch(new URL('matomo.js', config.origin), {
			headers: {
				Accept: 'application/javascript, */*'
			}
		});

		if (!upstream.ok) {
			return new Response('/* Matomo tracker unavailable */', {
				status: 502,
				headers: responseHeaders()
			});
		}

		const headers = responseHeaders('public, max-age=3600');
		headers.set(
			'Content-Type',
			upstream.headers.get('Content-Type') ?? 'application/javascript; charset=UTF-8'
		);

		const lastModified = upstream.headers.get('Last-Modified');
		if (lastModified) {
			headers.set('Last-Modified', lastModified);
		}

		return new Response(upstream.body, {
			status: 200,
			headers
		});
	} catch {
		return new Response('/* Matomo tracker unavailable */', {
			status: 502,
			headers: responseHeaders()
		});
	}
}


const protectedParams = [
	'token_auth',
	'cip',
	'cdt',
	'cdo',
	'country',
	'region',
	'city',
	'lat',
	'long'
];

function getVisitorIp(request: Request, config: MatomoConfig): string {
	if (config.removeVisitorIp) return '0.0.0.0';

	// Never trust a client-supplied X-Forwarded-For value.
	return request.headers.get('CF-Connecting-IP') || '0.0.0.0';
}

function cleanHitParams(
	params: URLSearchParams,
	config: MatomoConfig,
	ip: string,
	includeToken: boolean
): URLSearchParams | null {
	// Do not turn this into a general-purpose Matomo API proxy.
	if (params.has('module') || params.has('method')) return null;

	for (const key of protectedParams) {
		params.delete(key);
	}

	// Force the configured website ID, irrespective of client input.
	params.set('idsite', config.siteId);
	params.set('cip', ip);

	if (includeToken) {
		params.set('token_auth', config.token);
	} else {
		params.delete('token_auth');
	}

	return params;
}

function rewriteBulkBody(rawBody: string, config: MatomoConfig, ip: string): string | null {
	try {
		const payload: unknown = JSON.parse(rawBody);

		if (
			!payload ||
			typeof payload !== 'object' ||
			Array.isArray(payload) ||
			!Array.isArray((payload as { requests?: unknown }).requests)
		) {
			return null;
		}

		const bulk = payload as {
			requests: unknown[];
			token_auth?: string;
			[key: string]: unknown;
		};

		const cleanedRequests: unknown[] = [];

		for (const entry of bulk.requests) {
			if (typeof entry === 'string') {
				// Matomo bulk entries are commonly query strings.
				const parsed = new URL(entry, 'https://matomo-bulk.invalid/');

				// Never allow bulk entries to introduce another origin.
				if (parsed.origin !== 'https://matomo-bulk.invalid') {
					return null;
				}

				if (!parsed.search) {
					cleanedRequests.push(entry);
					continue;
				}

				const params = cleanHitParams(new URLSearchParams(parsed.search), config, ip, false);

				if (!params) return null;

				cleanedRequests.push(`?${params.toString()}`);
				continue;
			}

			// Also support simple object-form bulk entries.
			if (entry && typeof entry === 'object' && !Array.isArray(entry)) {
				const params = new URLSearchParams();

				for (const [key, value] of Object.entries(entry)) {
					if (
						typeof value !== 'string' &&
						typeof value !== 'number' &&
						typeof value !== 'boolean'
					) {
						return null;
					}

					params.append(key, String(value));
				}

				const cleaned = cleanHitParams(params, config, ip, false);

				if (!cleaned) return null;

				const objectEntry: Record<string, string> = {};

				for (const [key, value] of cleaned) {
					objectEntry[key] = value;
				}

				cleanedRequests.push(objectEntry);
				continue;
			}

			return null;
		}

		bulk.requests = cleanedRequests;

		// For bulk requests, Matomo checks the batch-level token.
		// Every entry has had client-supplied IP/auth overrides removed.
		bulk.token_auth = config.token;

		return JSON.stringify(bulk);
	} catch {
		return null;
	}
}

async function sendToMatomo(
	request: Request,
	config: MatomoConfig,
	body: string,
	contentType: string
): Promise<Response> {
	const headers = new Headers({
		'Content-Type': contentType,
		Accept: '*/*'
	});

	const userAgent = request.headers.get('User-Agent');
	if (userAgent) headers.set('User-Agent', userAgent);

	const language = request.headers.get('Accept-Language');
	if (language) headers.set('Accept-Language', language);

	const upstream = await fetch(new URL('matomo.php', config.origin), {
		method: 'POST',
		headers,
		body
	});

	const resultHeaders = responseHeaders();
	const upstreamType = upstream.headers.get('Content-Type');

	if (upstreamType) {
		resultHeaders.set('Content-Type', upstreamType);
	}

	const emptyStatus = [204, 205, 304].includes(upstream.status);

	return new Response(emptyStatus ? null : upstream.body, {
		status: upstream.status,
		headers: resultHeaders
	});
}

async function forwardHit(request: Request, url: URL, config: MatomoConfig): Promise<Response> {
	// Respect explicit browser privacy signals.
	if (request.headers.get('DNT') === '1' || request.headers.get('Sec-GPC') === '1') {
		return new Response(null, {
			status: 204,
			headers: responseHeaders()
		});
	}

	const rawBody = request.method === 'POST' ? await request.text() : '';

	const ip = getVisitorIp(request, config);

	// Support Matomo's JSON bulk format.
	if (rawBody.trimStart().startsWith('{')) {
		const query = new URLSearchParams(url.search);

		if (query.has('module') || query.has('method')) {
			return new Response('Unsupported proxy operation', {
				status: 400,
				headers: responseHeaders()
			});
		}

		const rewritten = rewriteBulkBody(rawBody, config, ip);

		if (!rewritten) {
			return new Response('Invalid Matomo bulk request', {
				status: 400,
				headers: responseHeaders()
			});
		}

		return sendToMatomo(request, config, rewritten, 'application/json; charset=UTF-8');
	}

	const contentType = (request.headers.get('Content-Type') ?? '')
		.split(';')[0]
		.trim()
		.toLowerCase();

	if (rawBody && contentType !== 'application/x-www-form-urlencoded') {
		return new Response('Unsupported Matomo payload', {
			status: 415,
			headers: responseHeaders()
		});
	}

	const queryParams = new URLSearchParams(url.search);
	const bodyParams = new URLSearchParams(rawBody);
	const params = new URLSearchParams();

	// Preserve query parameters, using them ahead of duplicate body fields.
	for (const [key, value] of queryParams) {
		params.append(key, value);
	}

	for (const [key, value] of bodyParams) {
		if (!queryParams.has(key)) {
			params.append(key, value);
		}
	}

	const cleaned = cleanHitParams(params, config, ip, true);

	if (!cleaned) {
		return new Response('Unsupported proxy operation', {
			status: 400,
			headers: responseHeaders()
		});
	}

	return sendToMatomo(
		request,
		config,
		cleaned.toString(),
		'application/x-www-form-urlencoded; charset=UTF-8'
	);
}

const handle: RequestHandler = async ({ request, url, platform }) => {
	const config = getConfig(platform);

	if (!config) {
		return new Response('Matomo proxy is not configured', {
			status: 500,
			headers: responseHeaders()
		});
	}

	// The tracker script is requested without query parameters.
	if (request.method === 'GET' && url.searchParams.size === 0) {
		return serveTracker(config);
	}

	if (request.method !== 'GET' && request.method !== 'POST') {
		return new Response('Method not allowed', {
			status: 405,
			headers: {
				...Object.fromEntries(responseHeaders()),
				Allow: 'GET, POST'
			}
		});
	}

	try {
		return await forwardHit(request, url, config);
	} catch {
		return new Response('Invalid Matomo request', {
			status: 400,
			headers: responseHeaders()
		});
	}
};

export const GET = handle;
export const POST = handle;
