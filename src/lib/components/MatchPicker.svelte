<script lang="ts">
	import type { GameMatch } from '$lib/db';
	import { createEventDispatcher } from 'svelte';
	import MatchTile from './MatchTile.svelte';

	export let matches: GameMatch[];

	/**
	 * Should more than one map be selectable?
	 */
	export let multi = false;

	const dispatch = createEventDispatcher();

	let selection = new Set<GameMatch>();

	function toggleSelection(mode: GameMatch) {
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

<div class="scroller">
	{#if matches?.length > 0}
		{#each matches as match}
			<div
				class="match"
				class:selected={selection.has(match)}
				on:click={() => toggleSelection(match)}
				on:keyup
			>
				<MatchTile {match} />
			</div>
		{/each}
	{/if}
</div>

<style>
	.scroller {
		white-space: nowrap;
		overflow: auto;
		overflow-y: hidden;
	}
	.match {
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
