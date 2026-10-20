<!-- src/matomo.php/projects/hextrek/+page.svelte -->
<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="HexTrek | Nacho Colorado"
	description="A privacy-first, local-only mobile application leveraging modern React Native tools for high-performance mapping and database operations."
	path="/projects/hextrek"
	image="/images/social/hextrek-social.jpg"
	imageAlt="HexTrek — App preview"
/>

<div class="project-header container">
	<div class="tags">
		<span class="tag">React Native</span>
		<span class="tag">MapLibre</span>
		<span class="tag">SQLCipher</span>
		<span class="tag">H3 Grid</span>
		<span class="tag">Privacy-First</span>
	</div>
	<h1>HexTrek</h1>
	<p class="lead">A privacy-first, local-only mobile exploration application.</p>
</div>

<div class="hero-media container">
	<!-- Replace with actual HexTrek media -->
	<video src="/videos/hextrek-loop.mp4" autoplay loop muted playsinline></video>
</div>

<article class="container project-content">
	<div class="sidebar">
		<div class="meta-block">
			<h4>Role</h4>
			<p>Technical Architect / Mobile Developer</p>
		</div>
		<div class="meta-block">
			<h4>Focus</h4>
			<p>Local-first architecture, hardware-level encryption, JSI database operations, offline vector mapping.</p>
		</div>
	</div>

	<div class="main-content">
		<h2>The "Fog of War" Concept</h2>
		<p>
			HexTrek is a mobile application built on the "fog of war" mechanic found in many exploration games. It encourages users to walk and explore their physical surroundings by tracking their real-world movements and converting those tracks into a "revealed" percentage of a map.
		</p>
		<p>
			The crucial differentiator of HexTrek is its <strong>strict adherence to local-first privacy</strong>. Unlike commercial tracking or fitness apps, HexTrek does not transmit continuous GPS telemetry to a remote server. All data is securely processed, encrypted, and stored entirely on the user's device. The application can function completely offline once the initial map tiles for a city are downloaded.
		</p>

		<h2>Core Functionality</h2>
		<ul class="feature-list">
			<li><strong>Background Location Tracking:</strong> The app continuously monitors the user's location via the device's GPS while they are walking.</li>
			<li><strong>Hexagonal Grid Indexing:</strong> Instead of saving raw latitude/longitude points (which are heavy and difficult to calculate area with), the app converts GPS coordinates into Hexagon IDs using Uber's H3 grid system.</li>
			<li><strong>Encrypted Local Storage:</strong> The generated Hexagon IDs are saved to a local, heavily encrypted database (SQLCipher). The database only stores unique IDs, keeping the file size incredibly small even after years of use.</li>
			<li><strong>Offline Map Rendering:</strong> When the user opens the app, it queries the local database for all visited Hexagon IDs, converts them back into geographical polygons, and renders them as a colored "revealed" overlay on an offline vector map.</li>
			<li><strong>Neighborhood Completion:</strong> The app calculates what percentage of a specific neighborhood or suburb has been explored by comparing the user's visited hexagons against the total number of hexagons that fit within the neighborhood's geometric boundaries (sourced from OpenStreetMap).</li>
		</ul>

		<h2>Technical Architecture & Stack</h2>
		<p>
			The application is built using a cross-platform approach with a strong emphasis on high-performance native bridges (JSI) for database operations.
		</p>

		<h3>1. The Frontend Framework: React Native</h3>
		<p>
			React Native is used for the UI and business logic. It provides the necessary ecosystem for cross-platform development while offering robust plugins for background tasks and hardware-level encryption APIs.
		</p>

		<h3>2. The Map Engine: MapLibre GL Native</h3>
		<p>
			MapLibre (<code>@maplibre/maplibre-react-native</code>) is chosen because it is fully open-source and free of the hidden telemetry or background tracking often found in commercial mapping SDKs.
			<strong>Offline Capability:</strong> MapLibre’s offlineManager is utilized to download vector tile packs locally. The map is configured with a custom <code>styleURL</code> pointing to these local assets, ensuring zero network calls are made to render the map during an exploration session.
		</p>

		<h3>3. The Grid Engine: Uber H3</h3>
		<p>
			Uber’s H3 system (via the <code>h3-reactnative</code> community fork) divides the world into a continuous grid of hexagons. The app uses a high resolution (Resolution 10 or 11), equating to hexagons a few meters across—ideal for street-level walking. The native fork ensures heavy mathematical operations required for grid indexing run smoothly within the React Native environment.
		</p>

		<div class="technical-callout">
			<h4>The Encrypted Database: OP-SQLite + SQLCipher</h4>
			<p>
				This is the core of the privacy architecture (<code>@op-engineering/op-sqlite</code>):
			</p>
			<ul>
				<li><strong>JSI Performance:</strong> OP-SQLite uses the JavaScript Interface (JSI), bypassing the slower JSON bridge used by older React Native SQLite libraries. This allows for incredibly fast, synchronous database inserts during rapid GPS updates without draining the battery or lagging the UI.</li>
				<li><strong>SQLCipher Encryption:</strong> OP-SQLite provides native support for SQLCipher, enabling transparent 256-bit AES encryption of the database file.</li>
			</ul>
		</div>

		<h3>4. Native Security: Keychain/Keystore</h3>
		<p>
			To ensure the database encryption key is never exposed, HexTrek utilizes <code>react-native-keychain</code>. On the first launch, a cryptographically secure, random 256-bit key is generated. This key is immediately stored in the device's native hardware-backed security module (the Secure Enclave on iOS or the Keystore on Android). Every time the app launches, it securely retrieves this key from the enclave and passes it to OP-SQLite to unlock the local database.
		</p>
	</div>
</article>

<style>
    .project-header { padding: 6rem 0 2rem 0; }
    .tags { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem; }
    .tag { font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-red); background: rgba(216, 75, 69, 0.1); padding: 0.25rem 0.5rem; border-radius: 4px; text-transform: uppercase; font-weight: 600; }

    .project-header h1 { font-size: 4rem; margin-bottom: 0.5rem; font-family: var(--font-rounded); letter-spacing: -1px; }
    .lead { font-size: 1.5rem; color: var(--text-slate); margin: 0; font-weight: 500; }

    .hero-media { margin-bottom: 4rem; }
    .hero-media video { width: 100%; border-radius: 20px; background-color: #1a1a1a; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }

    .project-content { display: grid; grid-template-columns: 250px 1fr; gap: 4rem; align-items: start; padding-bottom: 4rem; }

    .meta-block { margin-bottom: 2rem; }
    .meta-block h4 { font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary); margin-bottom: 0.5rem; }
    .meta-block p { font-size: 1.05rem; font-weight: 600; margin: 0; color: var(--text-primary); }

    .main-content h2 { font-size: 2rem; margin-top: 3rem; margin-bottom: 1.5rem; font-family: var(--font-rounded); font-weight: 900; letter-spacing: -0.5px; }
    .main-content h2:first-child { margin-top: 0; }
    .main-content h3 { font-size: 1.35rem; margin-top: 2.5rem; margin-bottom: 1rem; font-family: var(--font-rounded); font-weight: 800; }

    .main-content p { font-size: 1.1rem; color: #4a4d55; margin-bottom: 1.5rem; line-height: 1.7; }

    .feature-list { padding-left: 1.5rem; margin-bottom: 2.5rem; }
    .feature-list li { font-size: 1.1rem; color: #4a4d55; line-height: 1.7; margin-bottom: 0.75rem; }
    .feature-list strong { color: var(--text-primary); }

    .technical-callout { margin: 3rem 0; background: #ffffff; padding: 2rem; border: 2px solid var(--text-primary); border-radius: 16px; box-shadow: 0 6px 0 var(--text-primary); }
    .technical-callout h4 { margin: 0 0 1rem 0; font-size: 1.25rem; font-weight: 800; font-family: var(--font-rounded); color: var(--text-primary); }
    .technical-callout p { margin-bottom: 1rem; }
    .technical-callout ul { padding-left: 1.5rem; margin: 0; }
    .technical-callout li { margin-bottom: 0.5rem; line-height: 1.6; color: #4a4d55; }
    .technical-callout strong { color: var(--text-primary); }

    @media (max-width: 900px) {
        .project-content { grid-template-columns: 1fr; gap: 2rem; }
        .project-header h1 { font-size: 3rem; }
    }
</style>