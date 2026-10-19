<script lang="ts">

	import CtaButtons from '$lib/components/CtaButtons.svelte';
</script>

<section class="hero">
	<h1 class="title">Unity Developer.<br />Gameplay Systems</h1>
	<p class="subtitle">
		I build the systems behind the gameplay,<br />
		My main focus is Unity and C#, with additional<br />
		experience in Minecraft Java modding
	</p>
	<h1 class="mobile-title">Nacho Colorado.</h1>
	<p class="mobile-subtitle">
		I build the systems behind the gameplay, focussing on Unity and C#.
	</p>
	<CtaButtons/>
</section>

<style>
    /* Hero Text Section */
    .hero {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 3rem;
        gap: 1.2rem;
        z-index: 2;
    }

    .hero .title {
        font-size: clamp(2.8rem, 5vw, 4.5rem);
        font-weight: 900;
        line-height: 1.05;
        letter-spacing: -1.5px;
        color: #181818;
        margin: 0;
    }

    .hero .subtitle {
        font-size: 1.25rem;
        font-weight: 700;
        color: #71757e;
        line-height: 1.45;
        margin: 0;
    }

    .hero .mobile-title,
    .hero .mobile-subtitle {
        display: none; /* Hides text on mobile so buttons & cards are immediately visible */
    }

    @media (max-width: 900px) {
        .hero {
            padding-top: 0rem;
            gap: 0;
        }

        .hero .mobile-title {
            display: block;
            font-size: clamp(2.8rem, 5vw, 4.5rem);
            padding-bottom: 0.5rem;
            font-weight: 900;
            line-height: 1.05;
            letter-spacing: -1.5px;
            color: #181818;
            margin: 0;
        }

        .hero .mobile-subtitle {
            display: block;
            font-size: 1.25rem;
            padding-bottom: 0.8rem;
            font-weight: 700;
            color: #71757e;
            line-height: 1.45;
            margin: 0;
        }

        .hero .title,
        .hero .subtitle {
            display: none; /* Hides text on mobile so buttons & cards are immediately visible */
        }
		}
</style>