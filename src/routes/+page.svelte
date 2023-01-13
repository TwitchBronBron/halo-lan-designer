<script lang="ts">
	import { authService } from '$lib/services/authService';

	function signIn() {
		authService.signIn();
	}
</script>

<a href="/create">Create</a>
<button on:click={signIn}>Sign in</button>

<style>
</style>
