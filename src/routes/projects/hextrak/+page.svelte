<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
</script>


<Seo
	title="Crop Guardian | Nacho Colorado"
	description="An arcade-like game where you fend off hordes of aliens trying to claim your crops."
	path="/projects/crop-guardian"
	image="/images/social/hextrak-social.jpg"
	imageAlt="Crop Guardian — game artwork and project preview"
/>

<div class="project-header container">
	<div class="tags">
		<span class="tag">Unity</span>
		<span class="tag">C#</span>
		<span class="tag">Solo Programmer</span>
		<span class="tag">Optimization</span>
		<span class="tag">Nintendo 3DS</span>
	</div>
	<h1>Crop Guardian</h1>
	<p class="lead">End-to-End Unity Systems and Gameplay Implementation.</p>
</div>

<div class="hero-media container">
	<video src="/videos/crop-guardian-loop.mp4" autoplay loop muted playsinline></video>
</div>

<article class="container project-content">
	<div class="sidebar">
		<div class="meta-block">
			<h4>Role</h4>
			<p>Sole Programmer (Team Project)</p>
		</div>
		<div class="meta-block">
			<h4>Focus</h4>
			<p>Progression systems, object pooling, wave defense loops.</p>
		</div>
		<div class="meta-block mt-4">
			<a href="https://pro-historic.itch.io/crop-guardian" target="_blank" rel="noopener noreferrer" class="btn-primary">Play on Itch.io</a>
		</div>
	</div>

	<div class="main-content">
		<h2>Complete Engineering Ownership</h2>
		<p>Crop Guardian is an arcade-style game in which players defend their crops against waves of invading aliens. As the project's sole programmer and Unity developer, I was responsible for taking the concept from design to a fully playable experience, integrating all gameplay logic and art assets.</p>

		<h2>Progression & Game Loop</h2>
		<p>I architected the structured wave-based levels and an endless mode. To give the game a satisfying progression loop, I developed a weapon shop and upgrade system where players spend rewards earned from defeating enemies and bosses.</p>

		<div class="technical-callout">
			<img src="/images/crop-guardian-pooling.jpg" alt="Diagram showing object pooling architecture" />
			<span class="caption">Memory optimization using an Object Pooling system.</span>
		</div>

		<h2>Optimization via Object Pooling</h2>
		<p>Because arcade defense games generate high volumes of projectiles, enemies, and visual effects, standard instantiation would have caused significant memory allocation spikes and garbage collection stutter. I implemented a robust object pooling system for enemies, audio sources, particle effects, and decals to reuse assets efficiently and maintain frame stability.</p>
	</div>
</article>

<style>
    /* Use the same CSS block provided in the Mouse Game file above */
    .project-header { padding: 6rem 0 2rem 0; }
    .tags { display: flex; gap: 0.5rem; margin-bottom: 1.5rem; }
    .tag { font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-red); background: rgba(200, 66, 66, 0.1); padding: 0.25rem 0.5rem; border-radius: 4px; text-transform: uppercase; font-weight: 600; }
    .project-header h1 { font-size: 4rem; margin-bottom: 0.5rem; }
    .lead { font-size: 1.5rem; color: var(--text-slate); margin: 0; }
    .hero-media { margin-bottom: 4rem; }
    .hero-media video { width: 100%; border-radius: 12px; background-color: var(--text-ink); }
    .project-content { display: grid; grid-template-columns: 250px 1fr; gap: 4rem; align-items: start; }
    .meta-block { margin-bottom: 2rem; }
    .meta-block h4 { font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-slate); margin-bottom: 0.5rem; }
    .meta-block p { font-size: 1rem; font-weight: 500; margin: 0; }
    .mt-4 { margin-top: 2rem; }
    .main-content h2 { font-size: 2rem; margin-top: 3rem; margin-bottom: 1rem; }
    .main-content h2:first-child { margin-top: 0; }
    .main-content p { font-size: 1.125rem; color: var(--text-slate); margin-bottom: 1.5rem; }
    .technical-callout { margin: 3rem 0; background: #fff; padding: 1rem; border: 1px solid rgba(25, 26, 29, 0.1); border-radius: 8px; }
    .technical-callout img { width: 100%; border-radius: 4px; margin-bottom: 1rem; }
    .caption { font-size: 0.9rem; color: var(--text-slate); font-family: var(--font-mono); }
    @media (max-width: 900px) { .project-content { grid-template-columns: 1fr; gap: 2rem; } }
</style>