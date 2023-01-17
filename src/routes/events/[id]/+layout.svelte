<script lang="ts">
	import { db, type GamingEvent } from '$lib/db';

	/** @type {import('./$types').PageData} */
	export let data;
	export let event: GamingEvent;
	import { onDestroy } from 'svelte';
	const subscriptions: Array<() => void> = [];

	onDestroy(() => {
		subscriptions.forEach((x) => x());
	});

	if (data?.params?.id) {
		subscriptions.push(
			db.observeEvent(data.params.id, (data) => {
				event = data;
			})
		);
	}
</script>

{#if event}
	<h1>{event.name}</h1>
{/if}
<slot />
