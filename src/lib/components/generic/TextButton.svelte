<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import type { ResolvedPathname } from '$app/types';

	type ButtonHref =
		| ResolvedPathname
		| `https://${string}`
		| `http://${string}`
		| `mailto:${string}`
		| `tel:${string}`
		| `#${string}`;

	type OwnProps = {
		href?: ButtonHref;
		text?: string;
		iconSrc?: string;
		showIcon?: boolean;
		children?: Snippet;
	};

	type Props = Omit<HTMLAnchorAttributes, 'href' | 'children'> & OwnProps;

	let {
		href = '#',
		text = '',
		iconSrc = '/icons/arrow-b.webp',
		showIcon = true,
		class: className = '',
		children,
		...restProps
	}: Props = $props();
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -- Internal URLs must be resolved by callers; this component also supports external URLs and fragments. -->
<a
	{href}
	target="_blank"
	rel="noopener noreferrer"
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
<!-- eslint-enable svelte/no-navigation-without-resolve -->

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