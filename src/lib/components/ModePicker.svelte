<script lang="ts">
	import type { GameMode, Map } from '$lib/data';
	import { createEventDispatcher } from 'svelte';
	import ModeTile from './ModeTile.svelte';

	export let modes: GameMode[];
	/**
	 * Should more than one map be selectable?
	 */
	export let multi = false;

	const dispatch = createEventDispatcher();

	let selection = new Set<GameMode>();

	function toggleSelection(mode: GameMode) {
		if (!multi) {
			selection.clear();
		}
		if (selection.has(mode)) {
			selection.delete(mode);
		} else {
			selection.add(mode);
		}
		//trigger a change
		selection = selection;
		dispatch('selectionChange', [...selection]);
	}
</script>

<div>
	{#if modes}
		{#each modes as mode}
			<ModeTile {mode} on:click={() => toggleSelection(mode)} selected={selection.has(mode)} />
		{/each}
	{/if}
</div>

<style>
</style>
