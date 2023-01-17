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

<div class="container">
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
<div class="button-region">
	<a class="pure-button" href="./">&times;&nbsp;Cancel</a>
	<button class="pure-button button-primary">&check;&nbsp;Confirm</button>
</div>

<style>
	.container {
		padding: 10px;
		padding-bottom: 50px;
	}
	.button-region {
		position: fixed;
		bottom: 5px;
		right: 5px;
	}
	/* .button-region button {
		font-size: 1.4em;
		background-color: var(--primary);
		border-radius: 5px;
		color: white;
		padding: 10px;
		box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%),
			0px 1px 18px 0px rgb(0 0 0 / 12%);
	} */
</style>
