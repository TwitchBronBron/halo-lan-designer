<script lang="ts">
	import type { Game, GameMode, Map } from '$lib/data';

	export let mode: GameMode;
	export let selected = false;
</script>

<div class="mode" class:selected on:click on:keyup>
	<div class="image-container">
		<span class="name">{mode.name}</span>
		<img src={mode.imageUrl} alt="{mode.name} thumbnail" />
	</div>
</div>

<style>
	.mode {
		display: inline-block;
		border-radius: 5px;
		vertical-align: middle;
		padding: 3px;
		margin: 5px;
		width: 200px;
		padding-bottom: 0px;
		overflow: hidden;
		cursor: pointer;
		position: relative;
	}
	.name {
		position: absolute;
		font-family: Arial, Helvetica, sans-serif;
		color: var(--mcc-blue);
		font-size: 0.8em;
		bottom: 6px;
		left: 5px;
	}

	.image-container {
		max-width: 100%;
		position: relative;
	}
	.image-container img {
		width: 100%;
	}

	.selected {
		background-color: var(--primary);
	}
</style>
