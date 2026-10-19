<script lang="ts">
	import { COMPANY_NAME, COMPANY_TAGLINE } from '$lib/utils/constants.ts';
	import Socials from '$lib/components/Socials.svelte';
	import { resolve } from '$app/paths';
	import Dot from '$lib/components/generic/Dot.svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer>
	<div class="container">
		<div class="footer-top">
			<div class="brand-footer">
				<img src="/logotype.png" alt={COMPANY_NAME} class="logotype" />
				<p class="tagline">{COMPANY_TAGLINE}</p>
			</div>

			<div class="socials-wrapper">
				<Socials align="right" showLabel={true} />
			</div>
		</div>

		<div class="footer-bottom">
			<p class="copyright">&copy; {currentYear} {COMPANY_NAME}. All rights reserved.</p>

			<div class="legal-links">
				<a href={resolve('/privacy')}>Privacy Policy</a>
				<Dot/>
				<a href={resolve('/cookies')}>Cookie Settings</a>
				<Dot/>
				<a href={resolve('/credits')}>Credits</a>
			</div>
		</div>
	</div>
</footer>

<style>
    footer {
        border-top: 1px solid rgba(25, 26, 29, 0.1);
        padding: 4rem 0 2rem 0;
        margin-top: 6rem;
        background-color: var(--bg-primary);
    }

    .footer-top {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding-bottom: 2.5rem;
        border-bottom: 1px solid rgba(25, 26, 29, 0.08);
        gap: 2rem;
    }

    .brand-footer {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: flex-start;
    }

    .brand-footer .logotype {
        height: 3rem;
        width: auto;
        object-fit: contain;
    }

    .brand-footer .tagline {
        margin: 0;
        font-size: 0.95rem;
        line-height: 1.25rem;
        color: var(--text-secondary, #71757e);
        font-weight: 500;
    }

    .footer-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 2rem;
        font-size: 0.85rem;
        color: var(--text-secondary, #71757e);
        flex-wrap: wrap;
        gap: 1rem;
    }

    .copyright {
        margin: 0;
        font-weight: 500;
    }

    .legal-links {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .legal-links a {
        color: var(--text-secondary, #71757e);
        text-decoration: none;
        font-weight: 600;
        transition: color 0.2s ease;
    }

    .legal-links a:hover {
        color: var(--accent-red, #d84b45);
    }

    @media (max-width: 768px) {
        .footer-top {
            flex-direction: column;
            align-items: flex-start;
            gap: 2rem;
        }

        .socials-wrapper {
            width: 100%;
        }

        .footer-bottom {
            flex-direction: column-reverse;
            align-items: flex-start;
            gap: 1rem;
        }
    }
</style>