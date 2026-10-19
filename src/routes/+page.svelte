<script lang="ts">
	import ExperienceTimeline from '$lib/components/sections/ExperienceTimeline.svelte';
	import CardDeck from '$lib/components/sections/CardDeck.svelte';
	import Marquee from '$lib/components/Marquee.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo />

<main class="portfolio-page">
	<Hero />
	<CardDeck />
</main>

<Marquee />
<ExperienceTimeline />
<Contact />

<style>
    .portfolio-page {
        min-height: calc(100dvh - var(--header-height));
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: var(--bg-primary);
        background-image: radial-gradient(var(--bg-dot) 1.5px, transparent 1.5px);
        background-size: 24px 24px;
        padding: 2.5rem 2rem 0 2rem;
        position: relative;
    }

    @media (max-width: 900px) {
        .portfolio-page {
            padding: 1rem 1rem 0 1rem;
        }
    }
</style>