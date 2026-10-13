<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
</script>


<Seo
	title="Masked Approval | Nacho Colorado"
	description="Explore Masked Approval, an interactive game developed by Nacho Colorado. Discover its gameplay, design, and development process."
	path="/projects/masked-approval"
	image="/images/projects/masked-approval-social.jpg"
	imageAlt="Masked Approval — game artwork and project preview"
/>

<div class="project-header container">
	<div class="tags">
		<span class="tag">Java</span>
		<span class="tag">NeoForge 1.21.1</span>
		<span class="tag">Minecraft Mod</span>
	</div>
	<h1>Via Equina</h1>
	<p class="lead">Assisted Horseback Navigation and Mod Ecosystem Integration.</p>
</div>

<div class="hero-media container">
	<video src="/videos/via-equina-loop.mp4" autoplay loop muted playsinline></video>
</div>

<article class="container project-content">
	<div class="sidebar">
		<div class="meta-block">
			<h4>Role</h4>
			<p>Individual Mod Developer</p>
		</div>
		<div class="meta-block">
			<h4>Focus</h4>
			<p>Ecosystem integration, pathfinding logic, UI overlay.</p>
		</div>
		<div class="meta-block mt-4">
			<a href="https://modrinth.com" target="_blank" rel="noopener noreferrer" class="btn-primary">View on Modrinth</a>
		</div>
	</div>

	<div class="main-content">
		<h2>Modding & Ecosystem Integration</h2>
		<p>Via Equina is a Minecraft Java mod built on NeoForge 1.21.1. It acts as an add-on to the existing Via Romana mod infrastructure, extending its static road network with intelligent, assisted horseback travel systems.</p>

		<h2>Navigation & HUD Implementation</h2>
		<p>This project demonstrates my ability to read, adapt, and build upon an existing codebase. I programmed horses to automatically follow established route graphs, dynamically read intersections based on rider input, and halt smoothly at the end of a road block sequence.</p>

		<div class="technical-callout">
			<img src="/images/via-equina-hud.jpg" alt="Custom riding HUD showing stamina and gaits" />
			<span class="caption">Custom UI integration for the gait and stamina management system.</span>
		</div>

		<h2>Gameplay Mechanics</h2>
		<p>In addition to the road logic, I designed and implemented a custom horse gait and stamina management system. This system is fully integrated into the game loop with a bespoke on-screen HUD, adding a layer of resource management to traversal without breaking the game's core feel.</p>
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