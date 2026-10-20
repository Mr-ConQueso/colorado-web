<!-- src/routes/cookies/+page.svelte -->
<script lang="ts">
	import Button from '$lib/components/generic/Button.svelte';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Cookie Policy | Nacho Colorado"
	description="Cookie Policy for my portfolio. I believe in privacy by default, using zero tracking or marketing cookies—only strictly necessary ones."
	path="/cookies"
/>

<main class="document-page">
	<div class="container">
		<header class="doc-header">
			<h1>Cookie Policy</h1>
			<p class="last-updated">Privacy by default. Minimal essential cookies.</p>
		</header>

		<div class="doc-content settings-panel">
			<!-- Essential Cookies -->
			<div class="cookie-group">
				<div class="cookie-info">
					<h3>Essential & Functional Cookies</h3>
					<p>This website uses only two strictly necessary cookies. One remembers your language preferences so you don't have to configure them on every visit. The other remembers your privacy preference if you choose to opt out of analytics. Neither cookie contains personal tracking data.</p>
				</div>
				<div class="toggle-wrapper">
					<span class="status-badge required">Always Active</span>
				</div>
			</div>

			<!-- Analytics Cookies -->
			<div class="cookie-group disabled-group">
				<div class="cookie-info">
					<h3>Performance & Analytics</h3>
					<p>I use Matomo Analytics to understand aggregate traffic. The tracker is explicitly configured to disable all cookies. It transmits technical data (like browser type and screen resolution) securely, but your browsing activity is never tracked across sessions via cookies.</p>
				</div>
				<div class="toggle-wrapper">
					<span class="status-badge none">Not Used</span>
				</div>
			</div>

			<!-- Marketing Cookies -->
			<div class="cookie-group disabled-group">
				<div class="cookie-info">
					<h3>Marketing & Third-Party Cookies</h3>
					<p>I do not use any marketing, advertising, or third-party tracking cookies on this portfolio. No external networks have access to your data.</p>
				</div>
				<div class="toggle-wrapper">
					<span class="status-badge none">Not Used</span>
				</div>
			</div>

			<div class="actions">
				<Button href="/" variant="primary" text="RETURN TO HOME" iconType="none" />
			</div>
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
        margin-bottom: 3rem;
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
        font-size: 1.1rem;
        margin: 0;
    }

    .settings-panel {
        max-width: 700px;
        margin: 0 auto;
        background: #ffffff;
        padding: 3rem;
        border-radius: 24px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        border: 1px solid rgba(0, 0, 0, 0.05);
    }

    .cookie-group {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 2rem;
        margin-bottom: 2rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        gap: 2rem;
    }

    .cookie-group.disabled-group {
        opacity: 0.8;
    }

    .cookie-group:last-of-type {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    .cookie-info h3 {
        font-family: var(--font-rounded);
        margin: 0 0 0.5rem 0;
        font-size: 1.25rem;
        font-weight: 800;
    }

    .cookie-info p {
        margin: 0;
        font-size: 0.95rem;
        line-height: 1.5;
        color: #4a4d55;
    }

    .toggle-wrapper {
        flex-shrink: 0;
    }

    .status-badge {
        padding: 8px 14px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 800;
        text-transform: uppercase;
        white-space: nowrap;
    }

    .status-badge.required {
        background: #e8f7f0;
        color: #0a8260;
        border: 1px solid #a2f3dc;
    }

    .status-badge.none {
        background: #f5f3ee;
        color: var(--text-secondary);
        border: 1px solid rgba(0,0,0,0.1);
    }

    .actions {
        display: flex;
        justify-content: flex-end;
        margin-top: 3rem;
        padding-top: 2rem;
        border-top: 1px solid rgba(0, 0, 0, 0.08);
    }

    @media (max-width: 600px) {
        .settings-panel { padding: 2rem; }
        .cookie-group {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
        }
        .toggle-wrapper { align-self: flex-start; }
    }
</style>