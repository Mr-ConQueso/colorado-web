<script lang="ts">
	import { COMPANY_NAME, CONTACT_EMAIL } from '$lib/utils/constants.ts';

	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
</script>

<header>
	<div class="container nav-wrapper">
		<a href={resolve('/')} class="brand">
			<div class="monogram">NC</div>
			<span class="name">{COMPANY_NAME}</span>
		</a>
		<nav>
			<a
				href={resolve('/#projects' as Pathname & {})}
				class:active={page.url.hash === '#projects'}
				aria-current={page.url.hash === '#projects' ? 'location' : undefined}
			>
				Projects
			</a>

			<a href={resolve('/#skills' as Pathname & {})}>
				Skills
			</a>

			<a href="mailto:{CONTACT_EMAIL}" class="contact-link">
				Contact
			</a>
		</nav>
	</div>
</header>

<style>
    header {
        padding: 2rem 0;
        position: sticky;
        top: 0;
        background-color: rgba(245, 241, 233, 0.9);
        backdrop-filter: blur(8px);
        z-index: 100;
    }

    .nav-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .brand {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-weight: 700;
        font-size: 1.25rem;
    }

    .monogram {
        background-color: var(--accent-red);
        color: var(--bg-ivory);
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
        font-weight: 900;
        border-radius: 2px;
    }

    nav {
        display: flex;
        gap: 2rem;
        font-weight: 500;
    }

    .active, .contact-link {
        color: var(--accent-red);
    }
</style>