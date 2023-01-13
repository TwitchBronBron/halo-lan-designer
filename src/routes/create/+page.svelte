<script lang="ts">
	import GamePicker from '$lib/components/GamePicker.svelte';
	import { data, type Game, type Map } from '$lib/data';
	import MapPicker from '$lib/components/MapPicker.svelte';
	import ModePicker from '$lib/components/ModePicker.svelte';
	import Grouping from '$lib/components/layout/Grouping.svelte';
	let selectedGame: Game;
	function setSelectedGames(event: CustomEvent<Game[]>) {
		selectedGame = event.detail[0];
	}
</script>

<div>
	<Grouping>
		<span slot="title">Game</span>
		<GamePicker games={data.games} multi={false} on:selectionChange={setSelectedGames} />
	</Grouping>
	<Grouping>
		<span slot="title">Game Mode</span>
		<ModePicker modes={selectedGame?.modes} />
	</Grouping>
	<Grouping>
		<span slot="title">Map</span>
		<MapPicker maps={selectedGame?.maps} multi={false} />
	</Grouping>
</div>

<style>
	div {
		padding: 10px;
	}
</style>
