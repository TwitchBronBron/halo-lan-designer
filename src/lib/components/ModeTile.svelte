<script lang="ts">
	import type { Game, GameMode, GameMap } from '$lib/library';

	export let mode: GameMode;
</script>

<div class="mode">
	<div class="image-container">
		<span class="name">{mode.name}</span>
		<img src={mode.imageUrl} alt="{mode.name} thumbnail" />
	</div>
</div>

<style>
	.mode {
		display: inline-block;
		vertical-align: middle;
		width: 180px;
		padding-bottom: 0px;
		overflow: hidden;
		position: relative;
	}
	.name {
		position: absolute;
		font-family: Arial, Helvetica, sans-serif;
		color: var(--mcc-blue);
		font-size: 0.8em;
		bottom: 4px;
		left: 5px;
	}

	.image-container {
		max-width: 100%;
		position: relative;
	}
	.image-container img {
		width: 100%;
	}

</style>
