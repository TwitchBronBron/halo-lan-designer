<script lang="ts">
	import type { Game } from '$lib/data';

	export let game: Game;
	export let selected = true;
</script>

<div class="game" class:selected on:click>
	<span class="name">{game.name}</span>
	<img src={game.imageUrl} alt="{game.name} poster" />
</div>

<style>
	.game {
		display: inline-block;
		width: 100px;
		background-color: #2c2c2c;
		color: white;
		margin: 2px;
		padding: 5px;
		padding-bottom: 0px;
		border-radius: 5px;
		cursor: pointer;
	}
	img {
		width: 100%;
	}

	.name {
		display: block;
		text-align: center;
	}
	.selected {
		background-color: var(--success-color);
	}
</style>
