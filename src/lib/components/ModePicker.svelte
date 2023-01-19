<script lang="ts">
	import type { GameMode, GameMap } from '$lib/library';
	import { createEventDispatcher } from 'svelte';
	import ModeTile from './ModeTile.svelte';

	export let modes: GameMode[];
	/**
	 * Should more than one map be selectable?
	 */
	export let multi = true;

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
			<div
				class="mode"
				class:selected={selection.has(mode)}
				on:click={() => toggleSelection(mode)}
				on:keyup
			>
				<ModeTile {mode} />
			</div>
		{/each}
	{/if}
</div>

<style>
	.mode {
		display: inline-block;
		padding: 3px;
		margin: 5px;
		cursor: pointer;
		border-radius: 5px;
	}

	.selected {
		background-color: var(--primary);
	}
</style>
