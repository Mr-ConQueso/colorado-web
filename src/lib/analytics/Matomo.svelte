<script lang="ts">
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';

	export let matomoUrl: string;
	export let siteId: string;

	const baseUrl = matomoUrl.endsWith('/')
		? matomoUrl
		: `${matomoUrl}/`;

	let trackerConfigured = false;
	let lastTrackedUrl = '';

	function trackPageView(): void {
		if (!trackerConfigured || !window._paq) return;

		const currentUrl = window.location.href;

		if (currentUrl === lastTrackedUrl) return;

		if (lastTrackedUrl) {
			window._paq.push(['setReferrerUrl', lastTrackedUrl]);
		}

		window._paq.push(['setCustomUrl', currentUrl]);
		window._paq.push(['setDocumentTitle', document.title]);
		window._paq.push(['trackPageView']);

		lastTrackedUrl = currentUrl;
	}

	function respectsDoNotTrack(): boolean {
		const nav = window.navigator as Navigator & {
			doNotTrack?: string | null;
		};

		const value = nav.doNotTrack;

		return value === '1' || value === 'yes';
	}

	function hasAnalyticsOptedOut(): boolean {
		return document.cookie
			.split(';')
			.some(cookie =>
				cookie.trim() === 'site_analytics_optout=1'
			);
	}

	onMount(() => {
		if (respectsDoNotTrack() || hasAnalyticsOptedOut()) {
			return;
		}

		const queue = (window._paq = window._paq ?? []);

		queue.push(['setDoNotTrack', true]);
		queue.push(['disableCookies']);
		queue.push(['setTrackerUrl', `${baseUrl}matomo.php`]);
		queue.push(['setSiteId', siteId]);
		queue.push(['enableLinkTracking']);

		trackerConfigured = true;

		if (!document.getElementById('matomo-script')) {
			const script = document.createElement('script');

			script.id = 'matomo-script';
			script.type = 'text/javascript';
			script.async = true;
			script.src = `${baseUrl}matomo.js`;

			document.head.appendChild(script);
		}

		trackPageView();
	});

	afterNavigate(() => {
		if (typeof window !== 'undefined') {
			trackPageView();
		}
	});
</script>
