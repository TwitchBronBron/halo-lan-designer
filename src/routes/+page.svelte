<script lang="ts">
	import '../style.css';
	import GamePicker from '$lib/components/GamePicker.svelte';
	import GameTile from '$lib/components/GameTile.svelte';
	import { data } from '$lib/data';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<GamePicker games={data.games} />
