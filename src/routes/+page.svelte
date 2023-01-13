<script lang="ts">
	import GamePicker from '$lib/components/GamePicker.svelte';
	import { data, type Game, type Map } from '$lib/data';
	import MapPicker from '$lib/components/MapPicker.svelte';
	import ModePicker from '$lib/components/ModePicker.svelte';

	let selectedGame: Game;
	function setSelectedGames(event: CustomEvent<Game[]>) {
		selectedGame = event.detail[0];
	}

	let maps: Map[];
</script>

<GamePicker games={data.games} multi={false} on:selectionChange={setSelectedGames} />

<ModePicker modes={selectedGame?.modes} />

<MapPicker maps={selectedGame?.maps} multi={false} />
