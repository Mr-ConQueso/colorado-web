<script lang="ts">
	import Button from '$lib/components/generic/Button.svelte';
	import { RESUME } from '$lib/utils/constants.ts';


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
		href={RESUME}
		variant="secondary"
		text="DOWNLOAD RESUME"
		iconType="arrow-down"
		download
	/>
</div>

<style>
    .cta-container {
        display: flex;
        flex-wrap: wrap;
        gap: 0.85rem;
        align-items: center;
        width: 100%;
        box-sizing: border-box;
    }

    .align-left { justify-content: flex-start; }
    .align-center { justify-content: center; }
    .align-right { justify-content: flex-end; }

    @media (max-width: 900px) {
        .cta-container {
            flex-direction: column;
        }
    }
</style>