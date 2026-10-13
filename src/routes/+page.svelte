<script lang="ts">
	import { CONTACT_EMAIL } from '$lib/utils/constants.ts';

	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo />

<section class="hero container">
	<h1>Unity Developer.<br>Gameplay Systems.<br><span class="red-text">Interactive 3D.</span></h1>
	<p class="subtitle">
		I build the systems behind the gameplay: enemy behaviour, player mechanics, UI, progression and simulations. My main focus is Unity and C#, with additional experience in Minecraft Java modding, technical design and interactive systems.
	</p>
	<div class="actions">
		<a href="#projects" class="btn-primary">Explore my projects</a>
		<a href="mailto:{CONTACT_EMAIL}" class="btn-secondary">Contact me</a>
	</div>
</section>

<section id="projects" class="container">
	<div class="section-header">
		<h2>Selected Work</h2>
		<div class="line"></div>
	</div>

	<div class="project-grid">
		<ProjectCard
			title="Symbiosis"
			description="ECS-based flow-field pathfinding and distance-based simulation LOD tested with 2,000 concurrent entities."
			tags={['Unity 6', 'DOTS/ECS', 'Compute Shaders']}
			slug="symbiosis"
			videoSrc="/videos/symbiosis-loop.mp4"
			posterSrc="/images/symbiosis-poster.jpg"
		/>

		<ProjectCard
			title="Mouse Game"
			description="Fast-paced 3D arcade gameplay featuring state machine AI, NavMesh traversal, and object collection loops."
			tags={['Unity', 'C#', 'AI State Machines']}
			slug="mouse-game"
			videoSrc="/videos/mouse-game-loop.mp4"
			posterSrc="/images/mouse-game-poster.jpg"
		/>

		<ProjectCard
			title="Crop Guardian"
			description="End-to-end solo programming implementation covering object pooling, wave systems, and progression."
			tags={['Unity', 'Solo Programmer', 'Optimization']}
			slug="crop-guardian"
			videoSrc="/videos/crop-guardian-loop.mp4"
			posterSrc="/images/crop-guardian-poster.jpg"
		/>

		<ProjectCard
			title="Via Equina"
			description="Minecraft Java mod integrating automated horseback navigation and UI into an existing road network."
			tags={['Java', 'NeoForge 1.21.1', 'Modding']}
			slug="via-equina"
			videoSrc="/videos/via-equina-loop.mp4"
			posterSrc="/images/via-equina-poster.jpg"
		/>
	</div>
</section>

<section id="skills" class="container">
	<div class="section-header">
		<h2>Technical Focus</h2>
		<div class="line"></div>
	</div>

	<div class="skills-grid">
		<div class="skill-block">
			<h3>Gameplay Systems</h3>
			<p>Implementing mechanics, game loops, progression, upgrades, enemy behaviours, interactive objects and the logic connecting them.</p>
		</div>
		<div class="skill-block">
			<h3>AI & Navigation</h3>
			<p>State machines, Unity NavMesh navigation, navigation links and systems for coordinating groups of entities.</p>
		</div>
		<div class="skill-block">
			<h3>Technical Unity Dev</h3>
			<p>DOTS/ECS-based systems, simulation logic, performance-conscious implementation and integrating engine features into practical gameplay.</p>
		</div>
		<div class="skill-block">
			<h3>UI & Player Feedback</h3>
			<p>In-game interfaces, gameplay HUDs, shop systems, animated UI and feedback that helps mechanics feel responsive.</p>
		</div>
	</div>
</section>

<style>
    .hero {
        padding: 8rem 0 6rem 0;
    }

    .hero h1 {
        font-size: clamp(3rem, 5vw, 5rem);
        line-height: 1.1;
        margin-bottom: 1.5rem;
    }

    .red-text {
        color: var(--accent-red);
    }

    .subtitle {
        font-size: 1.25rem;
        color: var(--text-slate);
        max-width: 800px;
        margin-bottom: 2.5rem;
    }

    .actions {
        display: flex;
        gap: 1rem;
        align-items: center;
    }

    .btn-secondary {
        color: var(--text-ink);
        font-weight: 600;
    }

    .btn-secondary:hover {
        color: var(--accent-red);
    }

    .section-header {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 3rem;
        margin-top: 6rem;
    }

    .section-header h2 {
        margin: 0;
        font-size: 2rem;
    }

    .line {
        flex-grow: 1;
        height: 1px;
        background-color: rgba(25, 26, 29, 0.1);
    }

    .project-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        gap: 2rem;
    }

    .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 3rem;
    }

    .skill-block h3 {
        font-size: 1.25rem;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .skill-block h3::before {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color: var(--accent-red);
    }

    .skill-block p {
        color: var(--text-slate);
        margin: 0;
    }

    @media (max-width: 768px) {
        .project-grid {
            grid-template-columns: 1fr;
        }
    }
</style>