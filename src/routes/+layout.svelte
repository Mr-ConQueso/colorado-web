<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/navigation/Header.svelte';
	import Footer from '$lib/components/navigation/Footer.svelte';
</script>

<svelte:head>
	<title>Nacho Colorado | Interactive Software Developer</title>
	<meta name="description" content="I build interactive software, combining solid engineering with thoughtful interaction and design. Unity, C#, Gameplay Systems, and UI." />
</svelte:head>

<Header />
<main>
	<slot />
</main>
<Footer />