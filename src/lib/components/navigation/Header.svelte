<!-- src/lib/landing5/Header.svelte -->
<script lang="ts">
	import { COMPANY_NAME } from '$lib/utils/constants.ts';
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import Socials from '$lib/components/Socials.svelte';
</script>

<header>
	<div class="container nav-wrapper">
		<a href={resolve('/')} class="brand">
			<!-- Desktop Rectangular Logotype -->
			<!-- Replace src with your actual rectangular image path -->
			<img src="/logotype.png" alt={COMPANY_NAME} class="logotype" />

			<!-- Mobile Square Favicon -->
			<!-- Replace src with your actual square image path -->
			<img src="/favicon.svg" alt={COMPANY_NAME} class="favicon" />
		</a>

		<!-- Added a class to target this block on mobile -->
		<nav class="desktop-nav">
			<a href={resolve('/#experience' as Pathname & {})}>
				Experience
			</a>

			<a href={resolve('/#contact' as Pathname & {})}>
				Contact
			</a>
		</nav>

		<div class="socials-wrapper">
			<Socials
				align="right"
				showLabel={false}
			/>
		</div>
	</div>
</header>

<style>
    header {
        height: var(--header-height);
        box-sizing: border-box;
        display: flex;
        align-items: center;
        position: sticky;
        top: 0;
        background-color: rgba(245, 241, 233, 0.9);
        backdrop-filter: blur(8px);
        z-index: 100;
    }

    .nav-wrapper {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .brand {
        display: flex;
        align-items: center;
        text-decoration: none;
    }

    /* Base Image Styles */
    .logotype {
        display: block;
        height: 36px; /* Adjust height to fit your rectangular logo perfectly */
        width: auto;
    }

    .favicon {
        display: none;
        height: 40px; /* Square dimensions */
        width: 40px;
        border-radius: 8px; /* Smooth rounded corners matching your theme */
        object-fit: contain;
    }

    nav {
        display: flex;
        gap: 2rem;
        font-weight: 600;
    }

    nav a {
        text-decoration: none;
        color: inherit;
        transition: color 0.2s ease;
    }

    nav a:hover {
        color: #d84b45;
    }

    /* Mobile Adjustments (Hide Nav & Logotype, Show Favicon) */
    @media (max-width: 768px) {
        .logotype {
            display: none;
        }

        .favicon {
            display: block;
        }

        .desktop-nav {
            display: none;
        }
    }
</style>