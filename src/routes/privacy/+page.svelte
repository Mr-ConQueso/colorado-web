<script lang="ts">
	import Button from '$lib/components/generic/Button.svelte';
	import { CONTACT_EMAIL } from '$lib/utils/constants.ts';
	import Seo from '$lib/components/Seo.svelte';
	import AnalyticsPreference from '$lib/analytics/AnalyticsPreference.svelte';
</script>

<Seo
	title="Privacy Policy | Nacho Colorado"
	description="Learn about my commitment to privacy-first, cookieless analytics and minimal data processing."
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
				<h2>1. Introduction and Data Controller</h2>
				<p>
					Welcome to my portfolio, I deeply respect your privacy and am committed to protecting it. This privacy policy explains my approach to data processing when you visit my website.
				</p>
				<p>
					<strong>Data Controller:</strong> Nacho Colorado<br>
					<strong>Contact:</strong> <a href="mailto:{CONTACT_EMAIL}" class="text-link">{CONTACT_EMAIL}</a>
				</p>
			</section>

			<section>
				<h2>2. Purpose and Legal Basis for Analytics</h2>
				<p>
					To understand website traffic and improve my portfolio's usability, I use <strong>Matomo Analytics</strong>. The purpose of this processing is strictly limited to measuring page popularity, understanding navigation patterns, and identifying broad technical trends.
				</p>
				<p>
					This processing is based on <strong>legitimate interest</strong> under the GDPR. I do not use analytics for personalized advertising, behavioral profiling, cross-site tracking, marketing automation, or the sale of personal data.
				</p>
			</section>

			<section>
				<h2>3. Information Collected</h2>
				<p>
					My analytics setup relies on cookieless request transmission. When you browse the site, the tracker sends limited technical information to my server. Based on my configuration, this includes:
				</p>
				<ul>
					<li><strong>Page Information:</strong> The URL of the page viewed and its document title.</li>
					<li><strong>Request Metadata:</strong> The date and time of the tracking request.</li>
					<li><strong>Device and Browser Information:</strong> Your operating system (e.g., Linux), form factor (e.g., Desktop), browser brand, and version.</li>
					<li><strong>Display Information:</strong> Your screen resolution (e.g., 1920x1080).</li>
					<li><strong>Geographic Information:</strong> Your IP address is briefly processed to infer your approximate location (country/region). <strong>IP anonymization is enabled: your IP address is immediately discarded after geolocation conversion and is never stored.</strong></li>
				</ul>
				<p>I do not collect names, emails, passwords, session replays, or any other identifying personal data through this system.</p>
			</section>

			<section>
				<h2>4. Cookieless Tracking and Do Not Track (DNT)</h2>
				<p>
					This website operates with <strong>zero cookies</strong>. Ensuring no tracking or visitor-identification cookies are ever placed on your device.
				</p>
				<p>
					<strong>Do Not Track:</strong> Analytics are configured to respect the "Do Not Track" (DNT) setting in your browser. If you have DNT enabled, Matomo will entirely ignore your visit and no analytics requests will be processed.
				</p>
			</section>

			<section>
				<h2>5. Data Recipients and Hosting</h2>
				<p>
					<strong>Website Hosting:</strong> This website is delivered securely via Cloudflare's CDN (Cloudflare Pages), which processes necessary web requests to serve the site's files to your browser.
				</p>
				<p>
					<strong>Analytics Hosting:</strong> Analytics operate completely independently of the website. All analytics data is securely hosted in the EU (Spain) and no third-party advertising networks have access to this data.
				</p>
			</section>

			<section>
				<h2>6. Data Retention and Your Rights</h2>
				<p>
					Aggregate analytics reports and raw, anonymized technical data logs are retained only as long as necessary to evaluate website performance <strong>[6 months]</strong>, after which they are permanently deleted.
				</p>
				<p>
					Because this website is operated in Spain, your data is protected under the General Data Protection Regulation (GDPR) and Spanish data-protection laws. You have the right to access, restrict, or object to the processing of your data. To exercise these rights, or if you have any questions, contact me at the email provided above. You also have the right to lodge a complaint with the Spanish Data Protection Agency (AEPD).
				</p>
			</section>

			<AnalyticsPreference />
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