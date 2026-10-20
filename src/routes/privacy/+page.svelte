<script lang="ts">
	import Button from '$lib/components/generic/Button.svelte';
	import { COMPANY_NAME, CONTACT_EMAIL } from '$lib/utils/constants.ts';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Privacy Policy | Nacho Colorado"
	description="Learn about my commitment to zero personal data collection and privacy-first analytics."
	path="/privacy"
/>

<main class="document-page">
	<div class="container">
		<header class="doc-header">
			<h1>Privacy Policy</h1>
			<p class="last-updated">Last Updated: October 2026</p>
		</header>

		<article class="doc-content">
			<section>
				<h2>1. Introduction</h2>
				<p>
					Welcome to my portfolio, <strong>{COMPANY_NAME}</strong>. I deeply respect your privacy and am committed to protecting it. This privacy policy explains my approach to data collection when you visit my website or interact with my portfolio.
				</p>
			</section>

			<section>
				<h2>2. Zero Personal Data Collection</h2>
				<p>
					<strong>I do not collect, store, or process ANY personal data.</strong> You can browse this entire website completely anonymously. I do not ask for your name, email, or any other identifying information unless you choose to contact me directly via email.
				</p>
				<p><em>Note: Any local-first applications showcased on this site are designed to keep data strictly on your device. I do not transmit or store user data externally.</em></p>
			</section>

			<section>
				<h2>3. Privacy-First Analytics (Aptabase)</h2>
				<p>
					To understand general website traffic and improve my portfolio, I use <strong>Aptabase</strong>, an open-source, privacy-first analytics tool.
				</p>
				<p>
					When you visit my site, your IP address is instantly converted into its country of origin to give me basic geographical insights. <strong>Immediately after this conversion, your IP address is permanently discarded.</strong> No tracking cookies are placed on your device, and no personal identifiers or session replays are ever stored.
				</p>
			</section>

			<section>
				<h2>4. Contact Me</h2>
				<p>If you have any questions about this privacy policy or my privacy practices, please feel free to reach out directly at:</p>
				<p><a href="mailto:{CONTACT_EMAIL}" class="text-link">{CONTACT_EMAIL}</a></p>
			</section>
		</article>

		<div class="doc-footer">
			<Button href="/" variant="secondary" text="RETURN TO HOME" iconType="none" />
		</div>
	</div>
</main>

<style>
    .document-page {
        min-height: calc(100dvh - var(--header-height));
        background-color: var(--bg-primary);
        background-image: radial-gradient(var(--bg-dot) 1.5px, transparent 1.5px);
        background-size: 24px 24px;
        padding: 4rem 0;
    }

    .doc-header {
        text-align: center;
        margin-bottom: 4rem;
    }

    .doc-header h1 {
        font-family: var(--font-rounded);
        font-size: clamp(2.5rem, 5vw, 3.5rem);
        font-weight: 900;
        color: var(--text-primary);
        margin: 0 0 0.5rem 0;
        letter-spacing: -1px;
    }

    .last-updated {
        color: var(--text-secondary);
        font-weight: 600;
        font-size: 1rem;
        margin: 0;
    }

    .doc-content {
        max-width: 800px;
        margin: 0 auto;
        background: #ffffff;
        padding: 3rem 4rem;
        border-radius: 24px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        border: 1px solid rgba(0, 0, 0, 0.05);
    }

    .doc-content section {
        margin-bottom: 2.5rem;
    }

    .doc-content section:last-child {
        margin-bottom: 0;
    }

    .doc-content h2 {
        font-family: var(--font-rounded);
        font-size: 1.5rem;
        font-weight: 800;
        margin: 0 0 1rem 0;
        color: var(--text-primary);
    }

    .doc-content p, .doc-content li {
        font-size: 1.05rem;
        line-height: 1.7;
        color: #4a4d55;
        margin: 0 0 1rem 0;
    }

    .text-link {
        color: var(--accent-red);
        text-decoration: none;
        font-weight: 700;
        transition: opacity 0.2s;
    }

    .text-link:hover {
        opacity: 0.8;
    }

    .doc-footer {
        max-width: 800px;
        margin: 3rem auto 0 auto;
        display: flex;
        justify-content: center;
    }

    @media (max-width: 768px) {
        .doc-content {
            padding: 2rem;
        }
    }
</style>