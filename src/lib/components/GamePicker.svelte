<script lang="ts">
	import type { Game } from '$lib/data';
	import GameTile from './GameTile.svelte';
	import { createEventDispatcher } from 'svelte';

	export let games: Game[];
	/**
	 * Should more than one game be selectable?
	 */
	export let multi = false;

	const dispatch = createEventDispatcher();

	let selection = new Set<Game>();
	setTimeout(() => {
		toggleSelection(games[0]);
	}, 100);

	function toggleSelection(game: Game) {
		if (!multi) {
			selection.clear();
		}
		if (selection.has(game)) {
			selection.delete(game);
		} else {
			selection.add(game);
		}
		//trigger a change
		selection = selection;
		dispatch('selectionChange', [...selection]);
	}

	function selectAll() {
		selection = new Set(games);
	}

	function selectNone() {
		selection = new Set();
	}
</script>

<div>
	{#each games as game}
		<GameTile {game} on:click={() => toggleSelection(game)} selected={selection.has(game)} />
	{/each}
</div>
