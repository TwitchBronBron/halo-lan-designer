<script lang="ts">
	import type { GameMap } from '$lib/library';

	export let map: GameMap;
	export let showInfo = true;
</script>

<div class="map">
	<div class="border">
		<div class="title-bar">
			<div class="title">
				{map.name}
				{#if showInfo}
					<a class="halopedia-link" href={map.url} target="_blank" rel="noreferrer">&#8505;</a>
				{/if}
			</div>
		</div>
		<div class="image-container">
			<img src={map.imageUrl} alt="{map.name} thumbnail" />
		</div>
		<div class="map-info">
			<i>{map.minPlayers}-{map.maxPlayers} players</i>
			<i>{map.game.shortName}</i>
		</div>
	</div>
</div>

<style>
	.map {
		display: inline-block;
		vertical-align: middle;
		width: 180px;
		overflow: hidden;
		position: relative;
	}

	.border {
		border: 2px solid var(--mcc-blue);
		background-color: var(--dark-color);
	}

	.title-bar {
		color: white;
		text-align: center;
		font-weight: bold;
		display: block;
		/* height: 20px; */
		padding-bottom: 2px;
		padding-top: 2px;
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
		padding-left: 5px;
		padding-right: 5px;
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

	.halopedia-link {
		position: absolute;
		right: 3px;
		top: 0;
		border-radius: 50px;
		background-color: white;
		color: black;
		font-size: 0.8em;
		width: 16px;
		height: 16px;
		overflow: hidden;
		margin-top: 3px;
		text-decoration: none;
	}
</style>
