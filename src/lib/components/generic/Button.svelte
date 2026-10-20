<script lang="ts">
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import type { ResolvedPathname } from '$app/types';
	import { trackMatomoEvent } from '$lib/analytics/matomo';

	type ButtonHref =
		| ResolvedPathname
		| `https://${string}`
		| `http://${string}`
		| `mailto:${string}`
		| `tel:${string}`
		| `#${string}`;

	export type ButtonVariant = 'drop' | 'primary' | 'secondary';
	export type IconType = 'arrow-up-right' | 'arrow-down' | 'arrow-right' | 'none';

	type OwnProps = {
		text?: string;
		variant?: ButtonVariant;

		bgColor?: string;
		textColor?: string;
		borderColor?: string;
		hoverBgColor?: string;
		hoverTextColor?: string;
		hoverBorderColor?: string;
		shadowColor?: string;

		iconType?: IconType;
		iconSrc?: string;

		children?: Snippet;
	};

	type Props = OwnProps & (
		| (Omit<HTMLAnchorAttributes, 'href'> & {
		href: ButtonHref;
	})
		| (HTMLButtonAttributes & {
		href?: never;
	})
		);

	let {
		href,
		text = '',
		variant = 'drop',
		bgColor,
		textColor,
		borderColor,
		hoverBgColor,
		hoverTextColor,
		hoverBorderColor,
		shadowColor,
		iconType = 'arrow-right',
		iconSrc,
		class: className = '',
		children,
		...restProps
	}: Props = $props();

	const defaultIconMap: Record<Exclude<IconType, 'none'>, string> = {
		'arrow-up-right': '/icons/arrow.webp',
		'arrow-down': '/icons/arrow-down.webp',
		'arrow-right': '/icons/arrow.webp'
	};

	let resolvedIconSrc = $derived(
		iconSrc || (iconType !== 'none' ? defaultIconMap[iconType] : '')
	);
</script>

{#if href}
	<!-- eslint-disable svelte/no-navigation-without-resolve -- Internal URLs are resolved by callers; external URLs and fragments are also supported. -->
	<a
		{href}
		class="btn variant-{variant} {className}"
		style:--custom-bg={bgColor}
		style:--custom-text={textColor}
		style:--custom-border={borderColor}
		style:--custom-hover-bg={hoverBgColor}
		style:--custom-hover-text={hoverTextColor}
		style:--custom-hover-border={hoverBorderColor}
		style:--custom-shadow-color={shadowColor}
		onclick={() =>
		trackMatomoEvent(
			'Portfolio',
			'Button clicked'
		)}
		{...restProps as HTMLAnchorAttributes}
	>
		<span class="btn-content">
			{#if children}
				{@render children()}
			{:else}
				{text}
			{/if}
		</span>

		{#if iconType !== 'none' || iconSrc}
			{#if resolvedIconSrc}
				<img src={resolvedIconSrc} alt="" class="btn-icon icon-{iconType}" />
			{:else if iconType === 'arrow-right'}
				<span class="btn-arrow">&rarr;</span>
			{/if}
		{/if}
	</a>
	<!-- eslint-enable svelte/no-navigation-without-resolve -->
{:else}
	<button
		class="btn variant-{variant} {className}"
		style:--custom-bg={bgColor}
		style:--custom-text={textColor}
		style:--custom-border={borderColor}
		style:--custom-hover-bg={hoverBgColor}
		style:--custom-hover-text={hoverTextColor}
		style:--custom-hover-border={hoverBorderColor}
		style:--custom-shadow-color={shadowColor}
		{...restProps as HTMLButtonAttributes}
	>
		<span class="btn-content">
			{#if children}
				{@render children()}
			{:else}
				{text}
			{/if}
		</span>

		{#if iconType !== 'none' || iconSrc}
			{#if resolvedIconSrc}
				<img src={resolvedIconSrc} alt="" class="btn-icon icon-{iconType}" />
			{:else if iconType === 'arrow-right'}
				<span class="btn-arrow">&rarr;</span>
			{/if}
		{/if}
	</button>
{/if}

<style>
    .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.9rem 1.8rem;
        border-radius: 14px;
        font-family: var(--font-sans, 'Inter', system-ui, -apple-system, sans-serif);
        font-size: 0.88rem;
        font-weight: 900;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        text-decoration: none;
        cursor: pointer;
        box-sizing: border-box;
        outline: none;
        transition: transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1),
        box-shadow 0.15s ease,
        background-color 0.2s ease,
        border-color 0.2s ease,
        color 0.2s ease;
    }

    .btn-content {
        display: inline-block;
    }

    .btn-icon {
        width: 16px;
        height: 16px;
        object-fit: contain;
        transition: transform 0.2s ease;
    }

    .btn-arrow {
        font-size: 1.1rem;
        line-height: 1;
        transition: transform 0.2s ease;
    }

    /* ----------------------------------------------------
			 VARIANT 1: DROPPED SHADOW (DEFAULT - Former .resume-btn)
			 ---------------------------------------------------- */
    .btn.variant-drop {
        background-color: var(--custom-bg, #ffffff);
        color: var(--custom-text, #1a1a1a);
        border: 2px solid var(--custom-border, #1a1a1a);
        box-shadow: 0 6px 0 var(--custom-shadow-color, var(--custom-border, #1a1a1a));
    }

    .btn.variant-drop:hover {
        background-color: var(--custom-hover-bg, var(--custom-bg, #ffffff));
        color: var(--custom-hover-text, var(--custom-text, #1a1a1a));
        border-color: var(--custom-hover-border, var(--custom-border, #1a1a1a));
        transform: translateY(2px);
        box-shadow: 0 4px 0 var(--custom-shadow-color, var(--custom-hover-border, #1a1a1a));
    }

    .btn.variant-drop:hover .btn-icon,
    .btn.variant-drop:hover .btn-arrow {
        transform: translateX(3px);
    }

    .btn.variant-drop:active {
        transform: translateY(6px);
        box-shadow: 0 0 0 transparent;
    }

    /* ----------------------------------------------------
			 VARIANT 2: PRIMARY (Dark Soft Elevated)
			 ---------------------------------------------------- */
    .btn.variant-primary {
        background-color: var(--custom-bg, #1a1a1a);
        color: var(--custom-text, #ffffff);
        border: 1px solid var(--custom-border, #1a1a1a);
        box-shadow: 0 6px 18px var(--custom-shadow-color, rgba(0, 0, 0, 0.12));
    }

    .btn.variant-primary:hover {
        background-color: var(--custom-hover-bg, #d84b45);
        color: var(--custom-hover-text, #ffffff);
        border-color: var(--custom-hover-border, #d84b45);
        transform: translateY(-2px);
        box-shadow: 0 10px 24px rgba(216, 75, 69, 0.28);
    }

    .btn.variant-primary:hover .btn-icon,
    .btn.variant-primary:hover .btn-arrow {
        transform: translate(2px, -2px);
    }

    .btn.variant-primary:active {
        transform: translateY(0) scale(0.98);
    }

    /* ----------------------------------------------------
			 VARIANT 3: SECONDARY (Light Soft Elevated)
			 ---------------------------------------------------- */
    .btn.variant-secondary {
        background-color: var(--custom-bg, #ffffff);
        color: var(--custom-text, #1a1a1a);
        border: 1px solid var(--custom-border, rgba(0, 0, 0, 0.08));
        box-shadow: 0 4px 14px var(--custom-shadow-color, rgba(0, 0, 0, 0.04));
    }

    .btn.variant-secondary:hover {
        background-color: var(--custom-hover-bg, #ffffff);
        color: var(--custom-hover-text, #1a1a1a);
        border-color: var(--custom-hover-border, rgba(0, 0, 0, 0.18));
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    }

    .btn.variant-secondary:hover .btn-icon.icon-arrow-down,
    .btn.variant-secondary:hover .btn-arrow {
        transform: translateY(2px);
    }

    .btn.variant-secondary:active {
        transform: translateY(0) scale(0.98);
    }

    @media (max-width: 480px) {
        .btn {
            width: 100%;
        }
    }
</style>