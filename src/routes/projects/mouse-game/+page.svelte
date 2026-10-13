<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
</script>


<Seo
	title="Mouse Game | Nacho Colorado"
	description="An arcade game about a mouse racing to build a gaming setup."
	path="/projects/mouse-game"
	image="/images/projects/mouse-game-social.jpg"
	imageAlt="Mouse Game — game artwork and project preview"
/>

<div class="project-header container">
	<div class="tags">
		<span class="tag">Unity</span>
		<span class="tag">C#</span>
		<span class="tag">AI State Machines</span>
		<span class="tag">NavMesh</span>
	</div>
	<h1>Mouse Game</h1>
	<p class="lead">Enemy AI, Navigation, and Gameplay Programming.</p>
</div>

<div class="hero-media container">
	<video src="/videos/mouse-game-loop.mp4" autoplay loop muted playsinline></video>
</div>

<article class="container project-content">
	<div class="sidebar">
		<div class="meta-block">
			<h4>Role</h4>
			<p>Programmer (Team Project)</p>
		</div>
		<div class="meta-block">
			<h4>Focus</h4>
			<p>State machines, NavMesh, NavMesh Links, UI systems.</p>
		</div>
		<div class="meta-block mt-4">
			<a href="https://pro-historic.itch.io" target="_blank" rel="noopener noreferrer" class="btn-primary">Play on Itch.io</a>
		</div>
	</div>

	<div class="main-content">
		<h2>The Concept</h2>
		<p>Mouse Game is a short-session 3D arcade game about a computer mouse trying to build a gaming setup. Players race against a timer to collect objects and bring them back to their mouse hole, with later levels introducing new hazards and mechanics.</p>

		<h2>Roomba AI & Navigation</h2>
		<p>As one of two programmers on a four-person team, my main technical contribution was the Roomba enemy AI. I built this utilizing a state machine architecture coupled with Unity's NavMesh navigation tools.</p>

		<div class="technical-callout">
			<img src="/images/mouse-game-navmesh.jpg" alt="NavMesh Link traversal debugging" />
			<span class="caption">Debug view of NavMesh Links enabling vertical jumps.</span>
		</div>

		<h2>Verticality & Traversal</h2>
		<p>To ensure the AI felt threatening and capable, I implemented NavMesh Links to support navigation between different elevations. This allowed the Roomba to calculate paths across gaps and traverse jumps between height levels, keeping the pressure on the player across vertical level designs.</p>
	</div>
</article>

<style>
    /* Reuse the exact same CSS structure from the Symbiosis page here */
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