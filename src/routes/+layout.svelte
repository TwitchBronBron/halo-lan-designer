<script lang="ts">
	import { authService } from '$lib/services/authService';
	export const prerender = true;
	import '../style.css';
	import '$lib/firebase';
	import Navbar from '$lib/components/layout/Navbar.svelte';
</script>

<Navbar />

<slot />
