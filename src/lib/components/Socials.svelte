<script lang="ts">
	import { GITHUB_URL, LINKEDIN_URL, FIVERR_URL, CONTACT_EMAIL } from '$lib/utils/constants.ts';

	export let label: string = 'CONNECT WITH ME';
	export let showLabel: boolean = true;
	export let align: 'left' | 'center' | 'right' = 'left';
</script>

<div class="socials-container align-{align}">
	{#if showLabel}
		<span class="socials-label">{label}</span>
	{/if}

	<div class="socials-grid">
		<!-- GitHub -->
		<a
			href={GITHUB_URL}
			target="_blank"
			rel="noopener noreferrer"
			class="social-button"
			aria-label="GitHub Profile"
		>
			<img src="/icons/github.webp" alt="GH"  />
		</a>

		<!-- LinkedIn -->
		<a
			href={LINKEDIN_URL}
			target="_blank"
			rel="noopener noreferrer"
			class="social-button"
			aria-label="LinkedIn Profile"
		>
			<img src="/icons/linkedin.webp" alt="IN" />
		</a>

		<!-- FIVERR -->
		<a
			href={FIVERR_URL}
			target="_blank"
			rel="noopener noreferrer"
			class="social-button"
			aria-label="Fiverr Profile"
		>
			<img src="/icons/fiverr.webp" alt="FVR" />
		</a>

		<!-- Email -->
		<a
			href=mailto:{CONTACT_EMAIL}
			target="_blank"
			rel="noopener noreferrer"
			class="social-button"
			aria-label="Send Email"
		>
			<img src="/icons/mail.webp" alt="EM" />
		</a>
	</div>
</div>

<style>
    .socials-container {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        width: fit-content;
    }

    .align-left { align-items: flex-start; }
    .align-center { align-items: center; }
    .align-right { align-items: flex-end; }

    .socials-label {
        font-family: 'Inter', system-ui, -apple-system, sans-serif;
        font-size: 0.75rem;
        font-weight: 800;
        letter-spacing: 0.8px;
        color: #55575d;
        text-transform: uppercase;
    }

    .socials-grid {
        display: flex;
        align-items: center;
        gap: 0.6rem;
    }

    .social-button {
        width: 44px;
        height: 44px;
        border-radius: 14px;
        background-color: #ffffff;
        color: #1a1a1a;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        border: 1px solid rgba(0, 0, 0, 0.08);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1),
        box-shadow 0.2s ease,
        background-color 0.2s ease,
        color 0.2s ease;
    }

    .social-button img {
        width: 20px;
        height: 20px;
    }

    .social-button:hover {
        transform: translateY(-3px) scale(1.05);
        background-color: #1a1a1a;
        color: #ffffff;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    }

    .social-button:active {
        transform: translateY(-1px) scale(0.98);
    }
</style>