<script lang="ts">
	import Button from '$lib/components/generic/Button.svelte';
	import { RESUME } from '$lib/utils/constants.ts';
	import { asset } from '$app/paths';
	import type { Pathname } from '$app/types';

	export let align: 'left' | 'center' | 'right' = 'center';
</script>

<div class="cta-container align-{align}">
	<Button
		href="#contact"
		variant="primary"
		text="CONTACT"
		iconType="arrow-up-right"
	/>

	<Button
		href={asset(RESUME) as Pathname & {}}
		variant="secondary"
		iconType="arrow-down"
		download
	>
		<span class="full-text">DOWNLOAD RESUME</span>
		<span class="compact-text">RESUME</span>
	</Button>
</div>

<style>
    .cta-container {
        display: flex;
        flex-direction: column;
        gap: 0.85rem;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
    }

    .align-left { justify-content: flex-start; align-items: flex-start; }
    .align-center { justify-content: center; align-items: center; }
    .align-right { justify-content: flex-end; align-items: flex-end; }

    .compact-text {
        display: none;
    }

    .full-text {
        display: inline;
    }

    @media (max-height: 800px) {
        .cta-container {
            flex-direction: row;
            flex-wrap: nowrap;
            gap: 0.5rem;
        }

        :global(.cta-container a),
        :global(.cta-container button) {
            flex: 1;
            padding-left: 0.75rem;
            padding-right: 0.75rem;
            white-space: nowrap;
        }

        .full-text {
            display: none;
        }

        .compact-text {
            display: inline;
        }
    }
</style>