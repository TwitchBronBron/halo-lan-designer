<script lang="ts">
	import MatchPicker from '$lib/components/MatchPicker.svelte';
	import MatchTile from '$lib/components/MatchTile.svelte';
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
	<a href="/events/{event?.id}"><h1>{event.name}</h1></a>
	{#if event.matches?.length > 0}
		<MatchPicker matches={event.matches} />
	{/if}
{/if}
<slot />
