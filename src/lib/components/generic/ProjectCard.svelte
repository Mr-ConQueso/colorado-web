<!-- src/lib/landing5/ProjectCard.svelte -->
<script lang="ts">
	import { resolve } from '$app/paths';
	import type { ResolvedPathname } from '$app/types';

	interface Props {
		logoSrc?: string;
		logoHeight?: string;
		tags?: string[];
		description?: string;
		characterSrc?: string;
		characterHeight?: string;
		buttonText?: string;
		buttonLink?: ResolvedPathname;
		bgGradient?: string;
		tagBgColor?: string;
		tagTextColor?: string;
		buttonBgColor?: string;
	}

	let {
		logoSrc = '',
		logoHeight = '110px',
		tags = ['OPTIMIZATION', 'SOLO', 'NINTENDO 3DS'],
		description = 'First-person survival tower defense.\nFend off alien hordes to protect your\nharvest.',
		characterSrc = '',
		characterHeight = '55%',
		buttonText = 'LEARN MORE',
		buttonLink = resolve('/'),
		bgGradient = 'linear-gradient(180deg, #f5b800 0%, #8a4e00 100%)',
		tagBgColor = '#fce476',
		tagTextColor = '#5e3700',
		buttonBgColor = '#a75d00'
	}: Props = $props();

	// Supports both actual newlines and literal "\n" sequences.
	let descriptionLines = $derived(description.split(/\\n|\n/));
</script>

<div class="crop-card" style="background: {bgGradient};">
	<div class="character-anchor" style="height: {characterHeight};">
		{#if characterSrc}
			<img
				src={characterSrc}
				alt="Background Character"
				class="character-img"
			/>
		{:else}
			<div
				class="pixel-placeholder"
				style="background-color: {buttonBgColor};"
			></div>
		{/if}
	</div>

	<div class="content-layer">
		<div class="logo-wrapper" style="height: {logoHeight};">
			{#if logoSrc}
				<img src={logoSrc} alt="Game Logo" class="logo-img" />
			{:else}
				<div class="fallback-logo">
					<span class="crop">CROP</span>
					<span class="guardian">GUARDIAN</span>
				</div>
			{/if}
		</div>

		<div class="tag-list">
			{#each tags as tag, i (i)}
				<span
					class="tag"
					style="background-color: {tagBgColor}; color: {tagTextColor};"
				>
					{tag}
				</span>
			{/each}
		</div>

		<p class="description" style="color: {tagTextColor};">
			{#each descriptionLines as line, i (i)}
				{line}{#if i < descriptionLines.length - 1}<br />{/if}
			{/each}
		</p>
	</div>

	<!-- eslint-disable svelte/no-navigation-without-resolve -- Internal URLs are resolved by callers; -->
	<a
		href={buttonLink}
		class="learn-more-btn"
		style="background-color: {buttonBgColor};"
	>
		{buttonText}
		<img src="/icons/arrow.webp" alt="" class="arrow-icon" />
	</a>
	<!-- eslint-enable svelte/no-navigation-without-resolve -->
</div>

<style>
    /* Card Container */
    .crop-card {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 40px;
        overflow: hidden;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
        font-family: 'Arial Black', Impact, sans-serif;
        flex-shrink: 0;
    }

    .character-anchor {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        z-index: 1;
        pointer-events: none;
    }

    .character-img {
        height: 100%;
        width: auto;
        object-fit: contain;
        object-position: bottom center;
        opacity: 0.9;
    }

    .pixel-placeholder {
        width: 240px;
        height: 100%;
        mask-image: linear-gradient(
                to top,
                rgba(0, 0, 0, 1),
                rgba(0, 0, 0, 0.2)
        );
        -webkit-mask-image: linear-gradient(
                to top,
                rgba(0, 0, 0, 1),
                rgba(0, 0, 0, 0.2)
        );
        border-radius: 20px 20px 0 0;
    }

    .content-layer {
        position: relative;
        z-index: 2;
        padding: 40px 32px 0 32px;
        display: flex;
        flex-direction: column;
    }

    .logo-wrapper {
        width: 100%;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .logo-img {
        height: 100%;
        width: auto;
        object-fit: contain;
    }

    .fallback-logo {
        display: flex;
        flex-direction: column;
        color: white;
        line-height: 0.8;
    }

    .fallback-logo .crop {
        font-size: 4rem;
        font-weight: 900;
        letter-spacing: -2px;
    }

    .fallback-logo .guardian {
        font-size: 1.2rem;
        font-weight: 900;
        letter-spacing: 4px;
        padding-left: 4px;
    }

    .tag-list {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        margin-bottom: 20px;
    }

    .tag {
        padding: 4px 8px;
        border-radius: 20px;
        font-size: 0.65rem;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .description {
        margin: 0;
        font-size: 0.95rem;
        font-weight: 900;
        font-family: 'Nunito', 'Segoe UI', system-ui, sans-serif;
        line-height: 1.3;
        white-space: pre-line;
        max-width: 90%;
    }

    .learn-more-btn {
        position: absolute;
        bottom: 64px;
        left: 32px;
        right: 32px;
        height: 56px;
        color: white;
        border: none;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        font-size: 1.15rem;
        font-weight: 900;
        text-decoration: none;
        cursor: pointer;
        z-index: 10;
        transition: filter 0.2s ease, transform 0.1s ease;
    }

    .learn-more-btn:hover {
        filter: brightness(0.9);
    }

    .learn-more-btn:active {
        transform: scale(0.98);
    }

    .arrow-icon {
        width: 12px;
        height: 12px;
        margin-top: 2px;
    }
</style>