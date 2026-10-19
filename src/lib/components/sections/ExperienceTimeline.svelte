<!-- src/lib/components/ExperienceTimeline.svelte -->
<script lang="ts">
	import { FIVERR_URL, RESUME } from '$lib/utils/constants.ts';
	import TextButton from '$lib/components/generic/TextButton.svelte';
	import Button from '$lib/components/generic/Button.svelte';

	const experiences = [
		{
			role: 'GAME DEVELOPER',
			company: 'PRO-HISTORIC GAMES',
			linkUrl: 'https://pro-historic.games',
			date: '2026 - PRESENT',
			desc: 'Co-founded studio and lead the technical architecture for immersive titles using C# and heavy DOTS simulation.'
		},
		{
			role: 'FREELANCE DEVELOPER',
			company: 'FIVERR',
			linkUrl: FIVERR_URL,
			date: '2021 - PRESENT',
			desc: 'Built custom game solutions, Minecraft mods and experiences for many clients.'
		},
		{
			role: 'STUDENT',
			company: 'INTERACTIVE DESIGN',
			linkUrl: 'https://u-tad.com',
			date: '2024 - 2026',
			desc: 'Bachelors in Interactive Product Design – U-Tad, Madrid.'
		}
	];
</script>

<section class="experience-section" id="experience">
	<div class="timeline">
		{#each experiences as exp, i}
			<!-- Alternating indent to create the winding path effect -->
			<div class="timeline-item" class:indented={i % 2 !== 0}>

				<div class="dot-wrapper">
					<div class="dot"></div>
					<!-- Dynamically stretching SVG S-curve connector -->
					{#if i < experiences.length - 1}
						<svg class="connector" preserveAspectRatio="none" viewBox="0 0 100 100">
							{#if i % 2 === 0}
								<!-- Curve from Left to Right -->
								<path d="M 0 0 C 0 50, 100 50, 100 100" vector-effect="non-scaling-stroke" />
							{:else}
								<!-- Curve from Right to Left -->
								<path d="M 100 0 C 100 50, 0 50, 0 100" vector-effect="non-scaling-stroke" />
							{/if}
						</svg>
					{/if}
				</div>

				<div class="content">
					<div class="header">
						<h3 class="role-title">
							<span class="role">{exp.role}</span>
							<span class="separator">&bull;</span>
							<TextButton
								href={exp.linkUrl}
								text={exp.company}
								style="font-size: 1.2rem;"
							/>
						</h3>
						<span class="date">{exp.date}</span>
					</div>
					<p class="desc">{exp.desc}</p>
				</div>

			</div>
		{/each}
	</div>

	<!-- Rounded CTA Button -->
	<div class="cta-wrapper">
		<Button href={RESUME} text="VIEW FULL RESUME" />
	</div>
</section>

<style>
    .experience-section {
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        padding: 4rem 2rem;
        font-family: 'Inter', system-ui, -apple-system, sans-serif;
        --curve-width: 5rem;
        --dot-size: 18px;
        --accent-color: #1a1a1a;
    }

    .timeline {
        display: flex;
        flex-direction: column;
        gap: 4rem;
    }

    .timeline-item {
        display: flex;
        gap: 2rem;
        position: relative;
        transition: transform 0.3s ease;
    }

    .timeline-item.indented {
        padding-left: var(--curve-width);
    }

    .dot-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: var(--dot-size);
        flex-shrink: 0;
    }

    .dot {
        width: var(--dot-size);
        height: var(--dot-size);
        border-radius: 50%;
        background-color: var(--accent-color);
        margin-top: 5px;
        z-index: 2;
        box-shadow: 0 0 0 4px rgba(26, 26, 26, 0.1);
    }

    .connector {
        position: absolute;
        top: calc(5px + (var(--dot-size) / 2));
        height: calc(100% + 4rem);
        width: var(--curve-width);
        z-index: 1;
        overflow: visible;
    }

    .timeline-item:not(.indented) .connector {
        left: calc(var(--dot-size) / 2);
    }

    .timeline-item.indented .connector {
        right: calc(var(--dot-size) / 2);
    }

    path {
        fill: none;
        stroke: var(--accent-color);
        stroke-width: 3px;
        stroke-linecap: round;
        stroke-dasharray: 8 6;
        animation: dash 30s linear infinite;
    }

    @keyframes dash {
        to { stroke-dashoffset: -1000; }
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        padding-top: 2px;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .role-title {
        margin: 0;
        font-size: 1.15rem;
        font-weight: 900;
        letter-spacing: -0.3px;
        color: #1a1a1a;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 0.2rem;
    }

    .separator {
        color: #d84b45;
        margin: 0 0.3rem;
    }

    .date {
        font-size: 0.85rem;
        font-weight: 800;
        color: #71757e;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        white-space: nowrap;
    }

    .desc {
        margin: 0;
        font-size: 1.05rem;
        line-height: 1.6;
        font-weight: 500;
        color: #4a4d55;
        max-width: 95%;
    }

    .cta-wrapper {
        margin-top: 5rem;
        display: flex;
        justify-content: flex-start;
        padding-left: calc(var(--dot-size) + 2rem);
    }

    .resume-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 1rem 2rem;
        background-color: #ffffff;
        color: #1a1a1a;
        font-weight: 900;
        font-size: 0.9rem;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 0.5px;
        border-radius: 14px;
        border: 2px solid #1a1a1a;
        box-shadow: 0 6px 0 #1a1a1a;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
    }

    .resume-btn:hover {
        transform: translateY(2px);
        box-shadow: 0 4px 0 #1a1a1a;
    }

    .resume-btn:active {
        transform: translateY(6px);
        box-shadow: 0 0 0 #1a1a1a;
    }

    @media (max-width: 768px) {
        .experience-section {
            --curve-width: 2.5rem;
            padding: 3rem 1rem;
        }

        .header {
            flex-direction: column;
        }

        .timeline-item.indented {
            padding-left: var(--curve-width);
        }

        .cta-wrapper {
            padding-left: 0;
            justify-content: center;
        }
    }
</style>