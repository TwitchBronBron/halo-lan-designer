<script lang="ts">
	export const prerender = true;
	import 'purecss/build/pure-min.css'
	import '../style.css';
	import '$lib/firebase';
	import Navbar from '$lib/components/layout/Navbar.svelte';
</script>

<Navbar />

<slot />
