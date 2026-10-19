<script lang="ts">
	import {
		GITHUB_URL,
		LINKEDIN_URL,
		ITCHIO_URL,
		FIVERR_URL,
		WEBSITE_URL,
		COMPANY_NAME
	} from '$lib/utils/constants.ts';

	export let title: string =
		'Nacho Colorado | Interactive Software Developer';

	export let description: string =
		'Nacho Colorado is an interactive software developer creating games, applications, and web experiences with Unity, C#, gameplay systems, UI, and Svelte.';

	// Actual static URL path, not a SvelteKit route ID.
	export let path: string = '/';

	// Must be a publicly accessible JPEG if using the metadata below.
	export let image: string = '/images/social-card.jpg';

	export let imageAlt: string =
		'Nacho Colorado — Interactive Software Developer';

	export let noIndex: boolean = false;

	$: canonicalUrl = new URL(path, `${WEBSITE_URL}/`).href;
	$: imageUrl = new URL(image, `${WEBSITE_URL}/`).href;

	$: robotsContent = noIndex
		? 'noindex, nofollow'
		: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

	// Structured data describes you, rather than the individual project.
	const personJsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: COMPANY_NAME,
		url: WEBSITE_URL,
		jobTitle: 'Interactive Software Developer',
		description:
			'Interactive software developer creating games, applications, and web experiences.',
		sameAs: [
			GITHUB_URL,
			LINKEDIN_URL,
			ITCHIO_URL,
			FIVERR_URL
		],
		knowsAbout: [
			'Unity',
			'C#',
			'Game Development',
			'Gameplay Systems',
			'User Interface Design',
			'Svelte',
			'Web Development'
		]
	}).replace(/</g, '\\u003c');
</script>

<svelte:head>
	<!-- General SEO -->
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="author" content={COMPANY_NAME} />
	<meta name="robots" content={robotsContent} />

	<!-- Canonical URL: the preferred URL for this page -->
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph: WhatsApp, Facebook, LinkedIn, Discord,
	     Telegram and many other link preview consumers -->
	<meta property="og:locale" content="en_GB" />
	<meta property="og:site_name" content={COMPANY_NAME} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonicalUrl} />

	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:secure_url" content={imageUrl} />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={imageAlt} />

	<!-- X / Twitter Cards -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
	<meta name="twitter:image:alt" content={imageAlt} />

	<!-- Personal identity structured data: homepage only -->
	{#if path === '/'}
		{@html `<script type="application/ld+json">${personJsonLd}</script>`}
	{/if}
</svelte:head>