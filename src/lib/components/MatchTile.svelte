<script lang="ts">
	import type { GameMatch } from '$lib/db';
	import { library, type GameMap, type GameMode } from '$lib/library';
	import MapTile from './MapTile.svelte';
	import ModeTile from './ModeTile.svelte';

	export let match: GameMatch;
</script>

<div class="container">
	<div class="mode">
		<ModeTile mode={match.mode} />
	</div>
	<div class="map">
		<MapTile map={match.map} showInfo={false} />
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
