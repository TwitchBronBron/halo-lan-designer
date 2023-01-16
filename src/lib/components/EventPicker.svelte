<script lang="ts">
	import Event from './Event.svelte';
	export let events: any[] = [];

</script>

<div>
	{#each events as event}
		<Event {event} />
	{/each}
</div>
