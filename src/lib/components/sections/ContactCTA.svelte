<script lang="ts">
	import Button from '$lib/components/generic/Button.svelte';
	import { CONTACT_EMAIL } from '$lib/utils/constants.ts';
</script>

<section class="contact-section" id="contact">
	<div class="contact-card">
		<span class="badge">Available for Work</span>

		<h2>Ready to build your next system?</h2>

		<p class="description">
			Whether you need robust C# gameplay architecture, heavy DOTS simulations, or a reliable local-first mobile stack, I'm always open to discussing new and exciting projects.
		</p>

		<div class="actions">
			<Button
				href="mailto:{CONTACT_EMAIL}"
				text="GET IN TOUCH"
				variant="drop"
				bgColor="#d84b45"
				textColor="#ffffff"
				borderColor="#1a1a1a"
				shadowColor="#1a1a1a"
				hoverBgColor="#1a1a1a"
				hoverTextColor="#ffffff"
				hoverBorderColor="#1a1a1a"
				iconType="arrow-up-right"
			/>
		</div>
	</div>
</section>

<style>
    .contact-section {
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        padding: 4rem 2rem 8rem 2rem;
        font-family: var(--font-sans);
    }

    .contact-card {
        background: #ffffff;
        border: 2px solid var(--text-primary, #1a1a1a);
        border-radius: 32px;
        padding: 5rem 3rem;
        box-shadow: 0 12px 0 var(--text-primary, #1a1a1a);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .contact-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 16px 0 var(--text-primary, #1a1a1a);
    }

    .badge {
        background-color: #f5b800;
        color: #1a1a1a;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 0.85rem;
        font-weight: 900;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        margin-bottom: 1.5rem;
        border: 2px solid #1a1a1a;
    }

    h2 {
        font-family: var(--font-rounded);
        font-size: clamp(2.2rem, 5vw, 3.5rem);
        font-weight: 900;
        color: var(--text-primary, #1a1a1a);
        margin: 0 0 1rem 0;
        line-height: 1.1;
        letter-spacing: -1px;
    }

    .description {
        font-size: 1.15rem;
        line-height: 1.6;
        color: var(--text-secondary, #71757e);
        font-weight: 500;
        max-width: 600px;
        margin: 0 0 2.5rem 0;
    }

    .actions {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    @media (max-width: 768px) {
        .contact-section {
            padding: 3rem 1.5rem 6rem 1.5rem;
        }

        .contact-card {
            padding: 3rem 1.5rem;
            border-radius: 24px;
        }
    }
</style>