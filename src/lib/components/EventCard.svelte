<script lang="ts">
	import type { GamingEvent } from "$lib/db";


	export let event: GamingEvent;
</script>

<a href="/events/{event.id}">
	<h1>
		{event.name}
	</h1>
</a>
