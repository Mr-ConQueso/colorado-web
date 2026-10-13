<script lang="ts">
	import { COMPANY_TAGLINE, GITHUB_URL, ITCHIO_URL, LINKEDIN_URL, FIVERR_URL } from '$lib/utils/constants.ts';
</script>

<footer>
	<div class="container footer-content">
		<div class="brand-footer">
			<div class="monogram">NC</div>
			<p>{COMPANY_TAGLINE}</p>
		</div>
		<div class="links">
			<a href={GITHUB_URL} target="_blank" rel="external noopener">GitHub</a>
			<a href={LINKEDIN_URL} target="_blank" rel="external noopener">LinkedIn</a>
			<a href={ITCHIO_URL} target="_blank" rel="external noopener">Itch.io</a>
			<a href={FIVERR_URL} target="_blank" rel="external noopener">Fiverr</a>
		</div>
	</div>
</footer>

<style>
    footer {
        border-top: 1px solid rgba(25, 26, 29, 0.1);
        padding: 4rem 0;
        margin-top: 6rem;
    }

    .footer-content {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    .brand-footer .monogram {
        background-color: var(--text-ink);
        color: var(--bg-ivory);
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        font-weight: 800;
        margin-bottom: 1rem;
    }

    .brand-footer p {
        margin: 0;
        color: var(--text-slate);
    }

    .links {
        display: flex;
        gap: 1.5rem;
    }

    .links a {
        color: var(--text-slate);
        font-weight: 500;
    }

    .links a:hover {
        color: var(--accent-red);
    }
</style>