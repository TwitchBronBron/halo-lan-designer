<script lang="ts">
	import EventPicker from '$lib/components/EventPicker.svelte';
	import Grouping from '$lib/components/layout/Grouping.svelte';
	import { db } from '$lib/db';
	import { authService } from '$lib/services/authService';

	function signIn() {
		authService.signIn();
	}
	let isLoggedIn = false;
	let events: any[];
	authService.store.isLoggedIn.subscribe(async (value) => {
		if (value) {
			isLoggedIn = value;
			events = await db.getEvents();
		}
	});

	async function createEvent() {
		let name = prompt('Enter the name of the event');
		if (!name) {
			return;
		}
		await db.createEvent(name);
	}
</script>

{#if isLoggedIn}
	<Grouping>
		<span slot="title">Events</span>
		<button on:click={createEvent}>&plus; Create Event</button>
		<EventPicker {events} />
	</Grouping>
{:else}
	Please sign in:<br />
	<button on:click={signIn}>Sign in</button>
{/if}

<style>
</style>
