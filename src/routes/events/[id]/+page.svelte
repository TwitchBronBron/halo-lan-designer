<script lang="ts">
	import { db, type GamingEvent } from '$lib/db';

	/** @type {import('./$types').PageData} */
	export let data;
	export let event: GamingEvent;

	db.observeEvent(data.params.id, (data) => {
		event = data;
	});
</script>

{#if event}
	<h1>{event.name}</h1>
{/if}
