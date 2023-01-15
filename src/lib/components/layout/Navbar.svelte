<script lang="ts">
	import { authService } from '$lib/services/authService';
	import type { User } from 'firebase/auth';
	import FaUserCircle from 'svelte-icons/fa/FaUserCircle.svelte';
	let isProfileMenuVisible = false;

	function toggleProfileMenu() {
		isProfileMenuVisible = !isProfileMenuVisible;
	}
	function signIn() {
		authService.signIn();
	}
	function signOut() {
		authService.signOut();
	}
	let user: User | null;
	authService.store.user.subscribe((value) => {
		user = value;
	});
</script>

<div class="container">
	<div class="navbar">
		<a class="logo" href="/">Halo Lan Designer</a>
		<div class="profile-button" on:click={toggleProfileMenu} on:keyup>
			{#if user}
				<span>{user.email}</span>
			{/if}
			<div class="icon" class:logged-in={user?.email}>
				<FaUserCircle />
			</div>
		</div>
	</div>
</div>
{#if isProfileMenuVisible}
	<div class="profile-menu">
		{#if !!user}
			<button on:click={signOut} on:keyup>Sign Out</button>
		{:else}
			<button on:click={signIn} on:keyup>Sign In</button>
		{/if}
	</div>
{/if}

<style>
	.container {
		position: relative;
	}
	.logo {
		font-family: Arial, Helvetica, sans-serif;
		font-size: 1.3em;
		text-decoration: none;
		color: inherit;
		font-weight: bold;
	}
	.navbar {
		position: relative;
		width: 100%;
		background-color: var(--dark-color);
		color: var(--mcc-blue);
		padding-top: 15px;
		padding: 10px;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.profile-menu {
		position: absolute;
		top: 40px;
		right: 10px;
		border: 1px solid var(--mcc-blue);
		background-color: white;
		color: black;
		min-width: 150px;
		padding: 10px;
		border-radius: 3px;
		z-index: 1000;
	}

	.profile-button {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: white;
		cursor: pointer;
	}
	.profile-button span {
		margin-right: 5px;
	}
	.icon {
		display: inline-block;
		color: grey;
		width: 32px;
		height: 32px;
	}

	.icon.logged-in {
		color: green;
	}
	button {
		cursor: pointer;
		width: 100%;
	}
</style>
