<script lang="ts">
	import type { Game, Map } from '$lib/data';

	export let map: Map;
	export let selected = true;
</script>

<div class="map" class:selected on:click on:keyup>
	<span class="title">
		{map.name}
		<a class="info" href={map.url} target="_blank" rel="noreferrer">&#8505;</a>
	</span>
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
		height: 117px;
		overflow: hidden;
	}
	.title {
		color: white;
		text-align: center;
		font-weight: bold;
		display: block;
		height: 20px;
		padding-right: 5px;
		padding-left: 3px;
	}
	.number {
		float: left;
	}
	.image-container {
		max-width: 100%;
	}
	.image-container img {
		width: 100%;
	}

	.selected {
		background-color: var(--success-color);
	}

	.info {
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
