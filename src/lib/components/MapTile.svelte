<script lang="ts">
	import type { Game, Map } from '$lib/data';
	import GameTile from './GameTile.svelte';

	export let map: Map;
	export let selected = true;
</script>

<div class="map" class:selected on:click on:keyup>
	<div class="title-bar">
		<div class="title">
			{map.name}
			<!-- <a class="halopedia-link" href={map.url} target="_blank" rel="noreferrer">&#8505;</a> -->
		</div>
		<div class="map-info">
			<i>{map.minPlayers}-{map.maxPlayers} players</i>
			<i>{map.game.shortName}</i>
		</div>
	</div>
	<div class="image-container">
		<img src={map.imageUrl} alt="{map.name} thumbnail" />
	</div>
</div>

<style>
	.map {
		display: inline-block;
		border: 1px solid grey;
		background-color: #353535;
		border-radius: 5px;
		vertical-align: middle;
		margin: 5px;
		width: 170px;
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

	.map-info {
		/* position: absolute;
		left: 0px;
		top: 0px; */
		color: white;
		width: 100%;
		text-align: left;
		font-weight: normal;
		display: flex;
		justify-content: space-between;
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

	.halopedia-link {
		float: right;
		border-radius: 50px;
		background-color: white;
		color: black;
		font-size: 0.9em;
		width: 18px;
		height: 18px;
		overflow: hidden;
		margin-top: 3px;
		text-decoration: none;
	}
</style>
