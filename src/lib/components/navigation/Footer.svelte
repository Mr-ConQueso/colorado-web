<script lang="ts">
	import { COMPANY_TAGLINE } from '$lib/utils/constants.ts';
	import Socials from '$lib/components/Socials.svelte';
</script>

<footer>
	<div class="container footer-content">
		<div class="brand-footer">
			<div class="monogram">NC</div>
			<p>{COMPANY_TAGLINE}</p>
		</div>
			<Socials
				align="right"
				showLabel={true}
			/>
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
</style>