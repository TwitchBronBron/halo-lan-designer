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
</script>

<div>
	{#if maps}
		{#each maps as map}
			<MapTile {map} on:click={() => toggleSelection(map)} selected={selection.has(map)} />
		{/each}
	{/if}
</div>
