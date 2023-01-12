<script lang="ts">
	import type { Game } from '$lib/data';
	import GameTile from './GameTile.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let games: Game[];

	let selection = new Set<Game>();
	selection.add(games[0]);

	function toggleSelection(game: Game) {
		console.log('clicked');
		if (selection.has(game)) {
			selection.delete(game);
		} else {
			selection.add(game);
		}
		//trigger a change
		selection = selection;
		dispatch('selectionChanged', {
			games: [...selection.entries()]
		});
	}

	function selectAll() {
		selection = new Set(games);
	}

	function selectNone() {
		selection = new Set();
	}
</script>

<div>
	<div>
		Pick games ({selection.size} selected)
		<button on:click={selectAll} disabled={selection.size === games.length}>All</button>
		<button on:click={selectNone}>None</button>
	</div>

	{#each games as game}
		<GameTile {game} on:click={() => toggleSelection(game)} selected={selection.has(game)} />
	{/each}
</div>
