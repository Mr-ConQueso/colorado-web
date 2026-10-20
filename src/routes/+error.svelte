<script lang="ts">
	import { page } from '$app/state';
	import Button from '$lib/components/generic/Button.svelte';
	import { resolve } from '$app/paths';

	let status = $derived(page.status || 500);

	let title = $derived(
		status === 404 ? 'Page Not Found' :
			status === 500 ? 'Server Error' :
				'Oops! Something went wrong'
	);

	let description = $derived(
		status === 404 ? "The page you are looking for doesn't exist, has been moved, or is temporarily out of bounds." :
			status === 500 ? "It's not you, it's me. An internal server error has occurred on my end." :
				(page.error?.message || "An unexpected error occurred while trying to load this page.")
	);
</script>

<svelte:head>
	<title>{status} {title}</title>
</svelte:head>

<main class="error-page">
	<div class="container error-container">
		<div class="error-content">
			<div class="status-wrapper">
				<h1 class="status-code">{status}</h1>
				<span class="status-shadow shadow-1">{status}</span>
				<span class="status-shadow shadow-2">{status}</span>
			</div>

			<h2 class="title">{title}</h2>
			<p class="description">{description}</p>

			<div class="actions">
				<Button href={resolve('/')} variant="drop" text="RETURN TO HOME" iconType="none" />
			</div>
		</div>
	</div>
</main>

<style>
    .error-page {
        min-height: calc(100dvh - var(--header-height, 80px));
        background-color: var(--bg-primary);
        background-image: radial-gradient(var(--bg-dot) 1.5px, transparent 1.5px);
        background-size: 24px 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        position: relative;
    }

    .error-container {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
    }

    .error-content {
        max-width: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        z-index: 10;
    }

    .status-wrapper {
        position: relative;
        margin-bottom: 2rem;
    }

    .status-code {
        font-family: var(--font-rounded, 'Nunito', sans-serif);
        font-size: clamp(8rem, 20vw, 15rem);
        font-weight: 900;
        line-height: 0.8;
        margin: 0;
        color: var(--text-primary, #1a1a1a);
        position: relative;
        z-index: 3;
    }

    .status-shadow {
        font-family: var(--font-rounded, 'Nunito', sans-serif);
        font-size: clamp(8rem, 20vw, 15rem);
        font-weight: 900;
        line-height: 0.8;
        position: absolute;
        top: 0;
        left: 0;
        -webkit-text-stroke: 2px var(--text-primary, #1a1a1a);
        color: transparent;
    }

    .shadow-1 {
        transform: translate(6px, 6px);
        z-index: 2;
        color: var(--accent-red, #d84b45);
        -webkit-text-stroke: 0;
    }

    .shadow-2 {
        transform: translate(12px, 12px);
        z-index: 1;
    }

    .title {
        font-family: var(--font-rounded, 'Nunito', sans-serif);
        font-size: clamp(2rem, 5vw, 2.5rem);
        font-weight: 900;
        color: var(--text-primary, #1a1a1a);
        margin: 0 0 1rem 0;
        letter-spacing: -1px;
    }

    .description {
        font-size: 1.1rem;
        line-height: 1.6;
        color: var(--text-secondary, #71757e);
        font-weight: 600;
        margin: 0 0 2.5rem 0;
        max-width: 80%;
    }

    .actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
    }

    @media (max-width: 600px) {
        .status-wrapper {
            margin-bottom: 1.5rem;
        }

        .shadow-1 { transform: translate(4px, 4px); }
        .shadow-2 { transform: translate(8px, 8px); }

        .description {
            max-width: 100%;
        }
    }
</style>