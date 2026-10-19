<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	type Props = SvelteHTMLElements['span'];

	let {
		class: className = '',
		...restProps
	}: Props = $props();
</script>

<span {...restProps} class="dot {className}">&bull;</span>

<style>
    .dot {
        color: rgba(25, 26, 29, 0.2);
    }
</style>