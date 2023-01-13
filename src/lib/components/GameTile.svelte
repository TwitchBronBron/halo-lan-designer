<script lang="ts">
	import type { Game } from '$lib/data';

	export let game: Game;
	export let selected = true;
</script>

<div class="wrapper" class:selected >
	<div class="game"on:click>
		<span class="name">{game.name}</span>
		<img src={game.imageUrl} alt="{game.name} poster" />
	</div>
</div>

<style>
	.game {
		display: inline-block;
		width: 100px;
		background-color: var(--dark-color);
		border: 2px solid var(--mcc-blue);
		color: white;
		padding: 5px;
		padding-bottom: 0px;
		cursor: pointer;
	}
	img {
		width: 100%;
	}

	.wrapper {
		display: inline-block;
		padding: 5px;
		margin: 5px;
	}

	.name {
		display: block;
		text-align: center;
	}
	.selected {
		background-color: var(--primary);
		border-radius: 5px;
	}
</style>
