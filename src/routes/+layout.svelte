<script lang="ts">
	import { COMPANY_NAME } from '$lib/utils/constants.ts';

	import '../app.css';
	import Header from '$lib/components/navigation/Header.svelte';
	import Footer from '$lib/components/navigation/Footer.svelte';
</script>

<svelte:head>
	<!-- Browser theme -->
	<meta name="theme-color" content="#191A1D" />
	<meta name="application-name" content={COMPANY_NAME} />

	<!-- Icons: create these files in /static first -->
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

<Header />

<main>
	<slot />
</main>

<Footer />