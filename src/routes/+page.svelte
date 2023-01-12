<script lang="ts">
	import GamePicker from '$lib/components/GamePicker.svelte';
	import { data, type Game, type Map } from '$lib/data';
	import MapPicker from '$lib/components/MapPicker.svelte';

	let selectedGames: Game[];
	function setSelectedGames(event: CustomEvent<Game[]>) {
		selectedGames = event.detail;
	}

    let maps: Map[];
	$: {
		maps = (selectedGames ?? []).map((x) => x.maps).flat();
        console.log(maps);
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<GamePicker games={data.games} on:selectionChange={setSelectedGames} />
<!-- <MapPicker games={ -->

<MapPicker {maps} />
