<script lang="ts">
	import EventCard from './EventCard.svelte';
	export let events: any[] = [];

</script>

<div>
	{#each events as event}
		<EventCard {event} />
	{/each}
</div>
