<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
</script>


<Seo
	title="Symbiosis | Nacho Colorado"
	description="A resource-management strategy game where you manage, expand, and evolve colonies of microorganisms."
	path="/projects/symbiosis"
	image="/images/projects/symbiosis-social.jpg"
	imageAlt="Symbiosis — project preview"
/>

<div class="project-header container">
	<div class="tags">
		<span class="tag">Unity 6</span>
		<span class="tag">C#</span>
		<span class="tag">DOTS/ECS</span>
		<span class="tag">Optimization</span>
	</div>
	<h1>Symbiosis</h1>
	<p class="lead">ECS Simulation, AI Navigation, and Distance-based LOD.</p>
</div>

<div class="hero-media container">
	<video src="/videos/symbiosis-full.mp4" autoplay loop muted playsinline></video>
</div>

<article class="container project-content">
	<div class="sidebar">
		<div class="meta-block">
			<h4>Role</h4>
			<p>Systems Programmer (Team Project)</p>
		</div>
		<div class="meta-block">
			<h4>Focus</h4>
			<p>Flow-field pathfinding, simulation architecture, rendering pipelines.</p>
		</div>
	</div>

	<div class="main-content">
		<h2>The Challenge</h2>
		<p>Supporting large numbers of moving entities in a shared simulation while keeping navigation and rendering costs manageable. The game required a colony of microorganisms to navigate environments intelligently without bottlenecking the main thread.</p>

		<h2>ECS-Based Flow-Field Navigation</h2>
		<p>My primary technical contribution was an ECS-based flow-field pathfinding system. Rather than calculating individual paths for 2,000 entities, the environment generates a vector field towards a destination, which entities sample efficiently in parallel using Unity's Job System.</p>

		<!-- Insert technical screenshot/GIF here -->
		<div class="technical-callout">
			<img src="/images/symbiosis-flow-debug.jpg" alt="Flow field debug view in Unity" />
			<span class="caption">Debug view of the directional flow-field generation.</span>
		</div>

		<h2>Distance-Based Simulation LOD</h2>
		<p>To further optimize performance, I implemented a system that seamlessly transitions detailed simulation mechanics (like conveyor belts and crafting interactions) into purely mathematical calculations when the player moves out of range. When the player returns, the visual state synchronizes perfectly with the background calculations.</p>

		<div class="performance-metrics">
			<h3>Measured Performance (Example Data)</h3>
			<table>
				<thead>
				<tr>
					<th>System</th>
					<th>Entity Count</th>
					<th>Worker Thread Cost</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<td>Flow-Field Sampling</td>
					<td>2,000</td>
					<td>~X.XX ms</td>
				</tr>
				<tr>
					<td>Distance LOD Active</td>
					<td>1,500 (Distant)</td>
					<td>CPU load reduced by XX%</td>
				</tr>
				</tbody>
			</table>
			<p class="caption">Tested on Unity 6. Profiler metrics captured under controlled stress conditions.</p>
		</div>
	</div>
</article>

<style>
    .project-header {
        padding: 6rem 0 2rem 0;
    }

    .tags {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
    }

    .tag {
        font-family: var(--font-mono);
        font-size: 0.85rem;
        color: var(--accent-red);
        background: rgba(200, 66, 66, 0.1);
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-weight: 600;
    }

    .project-header h1 {
        font-size: 4rem;
        margin-bottom: 0.5rem;
    }

    .lead {
        font-size: 1.5rem;
        color: var(--text-slate);
        margin: 0;
    }

    .hero-media {
        margin-bottom: 4rem;
    }

    .hero-media video {
        width: 100%;
        border-radius: 12px;
        background-color: var(--text-ink);
    }

    .project-content {
        display: grid;
        grid-template-columns: 250px 1fr;
        gap: 4rem;
        align-items: start;
    }

    .meta-block {
        margin-bottom: 2rem;
    }

    .meta-block h4 {
        font-size: 0.85rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--text-slate);
        margin-bottom: 0.5rem;
    }

    .meta-block p {
        font-size: 1rem;
        font-weight: 500;
        margin: 0;
    }

    .main-content h2 {
        font-size: 2rem;
        margin-top: 3rem;
        margin-bottom: 1rem;
    }

    .main-content h2:first-child {
        margin-top: 0;
    }

    .main-content p {
        font-size: 1.125rem;
        color: var(--text-slate);
        margin-bottom: 1.5rem;
    }

    .technical-callout {
        margin: 3rem 0;
        background: #fff;
        padding: 1rem;
        border: 1px solid rgba(25, 26, 29, 0.1);
        border-radius: 8px;
    }

    .technical-callout img {
        width: 100%;
        border-radius: 4px;
        margin-bottom: 1rem;
    }

    .caption {
        font-size: 0.9rem;
        color: var(--text-slate);
        font-family: var(--font-mono);
    }

    .performance-metrics {
        margin-top: 3rem;
        padding: 2rem;
        background-color: var(--text-ink);
        color: var(--bg-ivory);
        border-radius: 8px;
    }

    .performance-metrics h3 {
        color: var(--bg-ivory);
        margin-bottom: 1.5rem;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 1rem;
    }

    th, td {
        padding: 1rem;
        text-align: left;
        border-bottom: 1px solid rgba(245, 241, 233, 0.2);
    }

    th {
        font-weight: 600;
        color: var(--text-slate);
    }

    @media (max-width: 900px) {
        .project-content {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
    }
</style>