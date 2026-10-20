<script lang="ts">
	import Button from '$lib/components/generic/Button.svelte';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Credits & Tech Stack | Nacho Colorado"
	description="Discover the tech stack and assets used to build this portfolio."
	path="/credits"
/>

<main class="document-page">
	<div class="container">
		<header class="doc-header">
			<h1>Credits & Stack</h1>
			<p class="last-updated">Tools, assets, and technologies used to build this portfolio</p>
		</header>

		<article class="doc-content">
			<section>
				<h2>1. Tech Stack</h2>
				<p>This portfolio is built and maintained using the following core technologies:</p>
				<ul>
					<li><strong>SvelteKit & Svelte 5:</strong> Frontend framework and reactive state management.</li>
					<li><strong>TypeScript:</strong> Type-safe application logic.</li>
					<li><strong>Vite:</strong> Lightning-fast build tooling.</li>
				</ul>
			</section>

			<section>
				<h2>2. Fonts</h2>
				<ul>
					<li>
						<strong>Adwaita Sans:</strong> OFL-1.1 license by The GNOME Project (based on Inter by Rasmus Andersson).
					</li>
				</ul>
			</section>

			<section>
				<h2>3. Icons & Assets</h2>
				<p>Thank you to the talented creators who provide accessible design assets. The icons used across this site are sourced from Flaticon:</p>
				<ul>
					<li>
						<a href="https://www.flaticon.com/free-icons/github" title="github icons" target="_blank" rel="noopener noreferrer" class="text-link">
							Github icons created by Laisa Islam Ani - Flaticon
						</a>
					</li>
					<li>
						<a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons" target="_blank" rel="noopener noreferrer" class="text-link">
							Linkedin icons created by Smashicons - Flaticon
						</a>
					</li>
					<li>
						<a href="https://www.flaticon.com/free-icons/fiverr" title="fiverr icons" target="_blank" rel="noopener noreferrer" class="text-link">
							Fiverr icons created by Pixel perfect - Flaticon
						</a>
					</li>
					<li>
						<a href="https://www.flaticon.com/free-icons/email" title="email icons" target="_blank" rel="noopener noreferrer" class="text-link">
							Email icons created by Magnific - Flaticon
						</a>
					</li>
				</ul>
			</section>

			<section>
				<h2>4. The Team</h2>
				<p>While I have contributed in large parts to every project listed in this portfolio—from core technical architecture to gameplay programming—some of these ambitious interactive experiences are only possible thanks to the incredible talent and dedication of my co-founders at <strong>Pro-Historic Games</strong>. Thank you to the team:</p>
				<ul>
					<li>
						<strong>Pablo Fernández</strong> (Artist) -
						<a href="#pablo-portfolio" target="_blank" rel="noopener noreferrer" class="text-link">
							View Portfolio
						</a>
					</li>
					<li>
						<strong>Fernando Boza</strong> (Artist) -
						<a href="#fernando-portfolio" target="_blank" rel="noopener noreferrer" class="text-link">
							View Portfolio
						</a>
					</li>
					<li>
						<strong>Xabier Goñi</strong> (Programmer) -
						<a href="https://github.com/Zubialde" target="_blank" rel="noopener noreferrer" class="text-link">
							View Portfolio
						</a>
					</li>
				</ul>
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
        font-size: 1.1rem;
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

    .doc-content ul {
        padding-left: 1.5rem;
        margin-bottom: 1.5rem;
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