<script lang="ts">
	import ProjectCard from '$lib/components/generic/ProjectCard.svelte';

	// Default cards matching your portfolio project list
	export let cards = [
		{
			id: 'modding',
			logoSrc: '/images/projects/modding/Logo.png',
			logoHeight: '110px',
			characterSrc: '/images/projects/modding/Horse.png',
			characterHeight: '45%',
			tags: ['JAVA', 'NEOFORGE', 'MODDING'],
			description: 'Minecraft Java mod integrating automated horseback navigation and UI into an existing road network.',
			bgGradient: 'linear-gradient(180deg, #7c3be8 0%, #3e1891 100%)',
			tagBgColor: '#d5b8ff',
			tagTextColor: '#2b0060',
			buttonBgColor: '#4e21ab'
		},
		{
			id: 'mouse-game',
			logoSrc: '/images/projects/mouse-game/Logo.png',
			logoHeight: '110px',
			characterSrc: '/images/projects/mouse-game/Mouse.png',
			characterHeight: '45%',
			tags: ['STATE MACHINES', 'AI', 'ARCADE'],
			description: 'Fast-paced 3D arcade gameplay featuring state machine AI, NavMesh traversal, and object collection loops.',
			bgGradient: 'linear-gradient(180deg, #ff2d75 0%, #991040 100%)',
			tagBgColor: '#ffb8d2',
			tagTextColor: '#50001c',
			buttonBgColor: '#a81143'
		},
		{
			id: 'crop-guardian',
			logoSrc: '/images/projects/crop-guardian/Logo.png',
			logoHeight: '110px',
			characterSrc: '/images/projects/crop-guardian/BoneMarauder.png',
			characterHeight: '45%',
			tags: ['OPTIMIZATION', 'SOLO', 'NINTENDO 3DS'],
			description: 'End-to-end solo programming implementation covering object pooling, wave systems, and progression.',
			bgGradient: 'linear-gradient(180deg, #edbb00 0%, #874900 100%)',
			tagBgColor: '#fce476',
			tagTextColor: '#5e3700',
			buttonBgColor: '#a75d00'
		},
		{
			id: 'symbiosis',
			logoSrc: '/images/projects/symbiosis/Logo.png',
			logoHeight: '110px',
			characterSrc: '/images/projects/symbiosis/Amoeba.png',
			characterHeight: '45%',
			tags: ['OPTIMIZATION', 'DOTS', 'ECS'],
			description: 'ECS-based flow-field pathfinding and distance-based simulation LOD tested with 2,000 concurrent entities.',
			bgGradient: 'linear-gradient(180deg, #1ad8a2 0%, #087556 100%)',
			tagBgColor: '#a2f3dc',
			tagTextColor: '#01402e',
			buttonBgColor: '#0a8260'
		},
		{
			id: 'networking',
			logoSrc: '/test/Logo.png',
			logoHeight: '110px',
			characterSrc: '/test/BoneMarauder.png',
			characterHeight: '45%',
			tags: ['NETWORKING', 'UI/UX', 'MOBILE'],
			description: 'Local-first cross-platform application architectures.',
			bgGradient: 'linear-gradient(180deg, #3855ff 0%, #1527a0 100%)',
			tagBgColor: '#b8c8ff',
			tagTextColor: '#091452',
			buttonBgColor: '#1d31b8'
		}
	];

	// Active index for mobile swipe deck (Starts on Card 3 / Crop Guardian)
	let activeIndex = 2;
	let touchStartX = 0;
	let dragOffset = 0;
	let isDragging = false;

	function handleTouchStart(e: TouchEvent) {
		touchStartX = e.touches[0].clientX;
		isDragging = true;
		dragOffset = 0;
	}

	function handleTouchMove(e: TouchEvent) {
		if (!isDragging) return;
		dragOffset = e.touches[0].clientX - touchStartX;
	}

	function handleTouchEnd() {
		if (!isDragging) return;
		const threshold = 40; // minimum pixels for a swipe
		if (dragOffset < -threshold && activeIndex < cards.length - 1) {
			activeIndex++;
		} else if (dragOffset > threshold && activeIndex > 0) {
			activeIndex--;
		}
		isDragging = false;
		dragOffset = 0;
	}

	function selectCard(index: number) {
		if (index >= 0 && index < cards.length) {
			activeIndex = index;
		}
	}
</script>

<section
	class="deck-container"
	on:touchstart={handleTouchStart}
	on:touchmove={handleTouchMove}
	on:touchend={handleTouchEnd}
>
	<div class="deck-wrapper">
		{#each cards as card, i}
			<div
				class="card-slot card-{i + 1}"
				class:is-active={i === activeIndex}
				class:is-prev={i === activeIndex - 1}
				class:is-next={i === activeIndex + 1}
				class:is-hidden={Math.abs(i - activeIndex) > 1}
				style:--drag-offset="{i === activeIndex ? dragOffset : 0}px"
				on:click={() => selectCard(i)}
				role="button"
				tabindex="0"
				on:keydown={(e) => e.key === 'Enter' && selectCard(i)}
			>
				<ProjectCard
					logoSrc={card.logoSrc}
					logoHeight={card.logoHeight}
					characterSrc={card.characterSrc}
					characterHeight={card.characterHeight}
					tags={card.tags}
					description={card.description}
					bgGradient={card.bgGradient}
					tagBgColor={card.tagBgColor}
					tagTextColor={card.tagTextColor}
					buttonBgColor={card.buttonBgColor}
				/>
			</div>
		{/each}
	</div>
</section>

<style>
    /* Card Fan Deck Container */
    .deck-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        position: relative;
        height: 500px;
        overflow: hidden;
        user-select: none;
    }

    /* DESKTOP DEFAULT WRAPPER */
    .deck-wrapper {
        position: relative;
        width: 360px;
        height: 500px;
        display: flex;
        justify-content: center;
        transform: translateY(50px);
    }

    .card-slot {
        position: absolute;
        bottom: 0;
        /* Since ProjectCard is now 100%, we strictly enforce desktop dimensions here */
        width: 100%;
        height: 100%;
        transform-origin: bottom center;
        transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), z-index 0.3s, opacity 0.3s;
    }

    .card-1 { transform: translateX(-340px) translateY(80px) rotate(-16deg); z-index: 1; }
    .card-2 { transform: translateX(-170px) translateY(30px) rotate(-8deg); z-index: 2; }
    .card-3 { transform: translateX(0) translateY(0) rotate(0deg); z-index: 3; }
    .card-4 { transform: translateX(170px) translateY(30px) rotate(8deg); z-index: 2; }
    .card-5 { transform: translateX(340px) translateY(80px) rotate(16deg); z-index: 1; }

    /* Hover Effects for Desktop */
    @media (min-width: 901px) {
        .card-slot:hover { z-index: 10; }
        .card-1:hover { transform: translateX(-340px) translateY(40px) rotate(-12deg) scale(1.02); }
        .card-2:hover { transform: translateX(-170px) translateY(-10px) rotate(-4deg) scale(1.02); }
        .card-3:hover { transform: translateX(0) translateY(-20px) rotate(0deg) scale(1.02); }
        .card-4:hover { transform: translateX(170px) translateY(-10px) rotate(4deg) scale(1.02); }
        .card-5:hover { transform: translateX(340px) translateY(40px) rotate(12deg) scale(1.02); }
		}

    /* MOBILE TINDER-STYLE SWIPE CAROUSEL (<= 900px) */
    @media (max-width: 900px) {
        .deck-container {
            /* Makes the container perfectly span edges skipping body padding */
            width: 100vw;
            margin-left: calc(50% - 50vw);

            /* Taller card area */
            height: 560px;
            padding-bottom: 0;
        }

        .deck-wrapper {
            /* Resets the translateY drop applied to Desktop */
            transform: translateY(0);
            /* Expand relative to the full screen for edge-to-edge span */
            width: 82vw;
            max-width: 420px;
            /* Taller cards */
            height: 540px;
        }

        .card-1, .card-2, .card-3, .card-4, .card-5 {
            transform: none;
        }

        /* Active Center Card */
        .card-slot.is-active {
            transform: translateX(var(--drag-offset)) scale(1);
            z-index: 5;
            opacity: 1;
        }

        /* Tilted Card pushed to the far Left */
        .card-slot.is-prev {
            transform: translateX(-70%) translateY(20px) rotate(-8deg) scale(0.9);
            z-index: 3;
            opacity: 0.85;
        }

        /* Tilted Card pushed to the far Right */
        .card-slot.is-next {
            transform: translateX(70%) translateY(20px) rotate(8deg) scale(0.9);
            z-index: 3;
            opacity: 0.85;
        }

        .card-slot.is-hidden {
            opacity: 0;
            pointer-events: none;
            transform: translateY(100px) scale(0.6);
            z-index: 1;
        }
    }
</style>