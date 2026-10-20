
<script lang="ts">
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';

	export let siteId: string;

	const trackerUrl = '/matomo.php';

	function getTrackedUrl(): string {
		const current = new URL(window.location.href);
		const tracked = new URL(current.pathname, current.origin);

		// Preserve campaign attribution without automatically recording
		// every query parameter that may contain private information.
		for (const key of [
			'utm_source',
			'utm_medium',
			'utm_campaign',
			'utm_content',
			'utm_term'
		]) {
			const value = current.searchParams.get(key);
			if (value) tracked.searchParams.set(key, value);
		}

		// The fragment is deliberately omitted.
		return tracked.href;
	}

	function trackPageView(): void {
		const queue = window._paq;

		if (!queue || !window.__matomoConfigured) return;

		const currentUrl = getTrackedUrl();
		const previousUrl = window.__matomoLastPageUrl;

		// Avoid recording the same page twice during initial hydration.
		if (currentUrl === previousUrl) return;

		if (previousUrl) {
			queue.push(['setReferrerUrl', previousUrl]);
		}

		queue.push(['setCustomUrl', currentUrl]);
		queue.push(['setDocumentTitle', document.title]);
		queue.push(['trackPageView']);

		window.__matomoLastPageUrl = currentUrl;
	}

	onMount(() => {
		window._paq = window._paq ?? [];
		const queue = window._paq;

		if (!window.__matomoConfigured) {
			queue.push(['disableCookies']);
			queue.push(['setTrackerUrl', trackerUrl]);
			queue.push(['setSiteId', siteId]);
			queue.push(['enableLinkTracking']);

			window.__matomoConfigured = true;
		}

		// Load the tracker through our same-origin endpoint.
		if (!document.getElementById('matomo-script')) {
			const script = document.createElement('script');

			script.id = 'matomo-script';
			script.async = true;
			script.src = trackerUrl;

			document.head.appendChild(script);
		}

		// Track the initial page.
		trackPageView();
	});

	// Track subsequent SvelteKit client-side navigations.
	afterNavigate(() => {
		if (typeof window !== 'undefined') {
			trackPageView();
		}
	});
</script>
