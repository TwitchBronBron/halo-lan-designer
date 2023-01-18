<script lang="ts">
	import type { GameMatch } from '$lib/db';
	import { library, type GameMap, type GameMode } from '$lib/library';
	import MapTile from './MapTile.svelte';
	import ModeTile from './ModeTile.svelte';

	export let match: GameMatch;
	$: map = library.getMap(match.mapId) as GameMap;
	$: mode = library.getMode(match.modeId) as GameMode;
</script>

<div class="container">
	<div class="mode">
		<ModeTile {mode} />
	</div>
	<div class="map">
		<MapTile {map} />
	</div>
</div>

<style>
	.container {
		display: inline-block;
	}
	.mode {
		margin-bottom: -4px;
	}
</style>
