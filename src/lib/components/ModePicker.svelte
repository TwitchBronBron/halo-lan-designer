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

	function selectAll() {
		selection = new Set(modes);
		dispatch('selectionChange', [...selection]);
	}

	function selectNone() {
		selection = new Set();
		dispatch('selectionChange', [...selection]);
	}
</script>

<div>
	Pick game modes ({selection.size} selected)
	{#if multi}
		<button on:click={selectAll} disabled={selection.size === modes.length}>All</button>
		<button on:click={selectNone} disabled={selection.size === 0}>None</button>
	{/if}
</div>
{#if modes}
	{#each modes as mode}
		<ModeTile {mode} on:click={() => toggleSelection(mode)} selected={selection.has(mode)} />
	{/each}
{/if}

<style>
</style>
