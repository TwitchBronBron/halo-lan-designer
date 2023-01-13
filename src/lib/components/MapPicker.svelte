<script lang="ts">
	import type { Game, Map } from '$lib/data';
	import MapTile from './MapTile.svelte';
	import { createEventDispatcher } from 'svelte';

	export let maps: Map[];
	/**
	 * Should more than one map be selectable?
	 */
	export let multi = false;

	const dispatch = createEventDispatcher();

	let selection = new Set<Map>();

	function toggleSelection(game: Map) {
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
		selection = new Set(maps);
		dispatch('selectionChange', [...selection]);
	}

	function selectNone() {
		selection = new Set();
		dispatch('selectionChange', [...selection]);
	}
</script>

<div>
	<div>
		Pick maps ({selection.size} selected)
		{#if multi}
			<button on:click={selectAll} disabled={selection.size === maps.length}>All</button>
			<button on:click={selectNone} disabled={selection.size === 0}>None</button>
		{/if}
	</div>

	{#if maps}
		{#each maps as map}
			<MapTile {map} on:click={() => toggleSelection(map)} selected={selection.has(map)} />
		{/each}
	{/if}
</div>
