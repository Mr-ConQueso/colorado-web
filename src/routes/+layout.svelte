<script lang="ts">
	import { COMPANY_NAME } from '$lib/utils/constants.ts';

	import '../app.css';
	import Header from '$lib/components/navigation/Header.svelte';
	import Footer from '$lib/components/navigation/Footer.svelte';
	import Matomo from '$lib/components/Matomo.svelte';
	import { PUBLIC_MATOMO_SITE_ID, PUBLIC_MATOMO_URL } from '$env/static/public';
</script>

<svelte:head>
	<meta name="theme-color" content="#191A1D" />
	<meta name="application-name" content={COMPANY_NAME} />
	<link rel="icon" href="/favicon.ico" sizes="any" />
	<link
		rel="icon"
		type="image/svg+xml"
		href="/favicon.svg"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="32x32"
		href="/favicon-32x32.png"
	/>
	<link
		rel="apple-touch-icon"
		sizes="180x180"
		href="/apple-touch-icon.png"
	/>
	<link rel="manifest" href="/site.webmanifest" />
</svelte:head>

<Matomo matomoUrl={PUBLIC_MATOMO_URL} siteId={PUBLIC_MATOMO_SITE_ID} />

<Header />

<main>
	<slot />
</main>

<Footer />