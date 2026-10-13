<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';

	export let title: string = '';
	export let description: string = '';
	export let tags: string[] = [];
	export let slug: string = '';
	export let videoSrc: string = '';
	export let posterSrc: string = '';

	let videoElement: HTMLVideoElement;

	function handleMouseEnter(): void {
		if (videoElement) {
			videoElement.play().catch(() => {}); // Catch autoplay restrictions quietly
		}
	}

	function handleMouseLeave(): void {
		if (videoElement) {
			videoElement.pause();
			videoElement.currentTime = 0;
		}
	}
</script>

<a
	href={resolve(`/projects/${slug}` as Pathname)}
	class="project-card"
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
>
	<div class="media-container">
		<video
			bind:this={videoElement}
			src={videoSrc}
			poster={posterSrc}
			muted
			loop
			playsinline
			preload="none"
		></video>
		<div class="overlay">
			<span>View Project →</span>
		</div>
	</div>

	<div class="content">
		<div class="tags">
			{#each tags as tag (tag)}
				<span class="tag">{tag}</span>
			{/each}
		</div>
		<h3>{title}</h3>
		<p>{description}</p>
	</div>
</a>

<style>
    .project-card {
        display: flex;
        flex-direction: column;
        background: transparent;
        border: 1px solid rgba(25, 26, 29, 0.1);
        border-radius: 8px;
        overflow: hidden;
        transition: transform 0.2s ease, border-color 0.2s ease;
    }

    .project-card:hover {
        transform: translateY(-4px);
        border-color: var(--accent-red);
    }

    .media-container {
        position: relative;
        width: 100%;
        aspect-ratio: 16/9;
        background-color: var(--text-ink);
        overflow: hidden;
    }

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: opacity 0.3s ease;
    }

    .overlay {
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(200, 66, 66, 0.8); /* Accent red with opacity */
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .overlay span {
        color: var(--bg-ivory);
        font-weight: 600;
        font-size: 1.125rem;
        transform: translateY(10px);
        transition: transform 0.3s ease;
    }

    .project-card:hover .overlay {
        opacity: 1;
    }

    .project-card:hover .overlay span {
        transform: translateY(0);
    }

    .content {
        padding: 1.5rem;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 0.75rem;
    }

    .tag {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--text-slate);
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.5rem;
    }

    p {
        margin: 0;
        color: var(--text-slate);
        font-size: 0.95rem;
    }
</style>