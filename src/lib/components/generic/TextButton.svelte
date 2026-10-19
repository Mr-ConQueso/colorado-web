<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	interface Props extends HTMLAnchorAttributes {
		href?: string;
		text?: string;
		iconSrc?: string;
		showIcon?: boolean;
		children?: Snippet;
	}

	let {
		href = '#',
		text = '',
		iconSrc = '/icons/arrow-b.webp',
		showIcon = true,
		target = '_blank',
		rel = 'noopener noreferrer',
		class: className = '',
		children,
		...restProps
	}: Props = $props();
</script>

<a
	{href}
	{target}
	{rel}
	class="text-button {className}"
	{...restProps}
>
	{#if children}
		{@render children()}
	{:else}
		<span>{text}</span>
	{/if}

	{#if showIcon}
		<img src={iconSrc} alt="Arrow" class="link-arrow" />
	{/if}
</a>

<style>
    .text-button {
        color: var(--accent-red, #d84b45);
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 0.2rem;
        font-weight: 900;
        transition: opacity 0.2s ease, transform 0.2s ease;
    }

    .text-button:hover {
        opacity: 0.85;
    }

    .text-button:hover .link-arrow {
        transform: translate(2px, -2px);
    }

    .link-arrow {
        width: 15px;
        height: 15px;
        transition: transform 0.2s ease;
    }
</style>