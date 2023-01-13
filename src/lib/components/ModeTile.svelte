<script lang="ts">
	import type { Game, GameMode, Map } from '$lib/data';

	export let mode: GameMode;
	export let selected = false;
</script>

<div class="mode" class:selected on:click on:keyup>
	<div class="title-bar">
		<div class="title">
			{mode.name}
		</div>
	</div>
	<div class="image-container">
		<img src={mode.imageUrl} alt="{mode.name} thumbnail" />
	</div>
</div>

<style>
	.mode {
		display: inline-block;
		border: 1px solid grey;
		background-color: #061011;
		border-radius: 5px;
		vertical-align: middle;
		padding: 2px;
		margin: 5px;
		width: 200px;
		height: 134px;
		overflow: hidden;
		cursor: pointer;
		position: relative;
	}
	.title-bar {
		color: white;
		text-align: center;
		font-weight: bold;
		display: block;
		/* height: 20px; */
		padding-right: 5px;
		padding-left: 3px;
		position: relative;
	}

	.image-container {
		max-width: 100%;
		position: relative;
	}
	.image-container img {
		width: 100%;
	}

	.selected {
		background-color: var(--success-color);
	}
</style>
