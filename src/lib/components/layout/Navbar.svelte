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
			<div class="icon" class:logged-in={user?.email}>
				<FaUserCircle />
			</div>
		</div>
	</div>
</div>
{#if isProfileMenuVisible}
	<div class="profile-menu">
		{#if !!user}
			<div class="navbar-item">
				<span class="email">{user.email}</span>
			</div>
			<div class="navbar-item">
				<button on:click={signOut} on:keyup>Sign Out</button>
			</div>
		{:else}
			<div class="navbar-item">
				<button on:click={signIn} on:keyup>Sign In</button>
			</div>
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
		background-color: var(--mcc-blue);
		color: white;
		font-weight: bold;
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
		background-color: black;
		color: black;
		min-width: 150px;
		padding: 10px;
		border-radius: 3px;
		z-index: 1000;
		display: flex;
		flex-direction: column;
	}

	.navbar-item {
		padding: 10px;
	}

	.profile-button {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: white;
		cursor: pointer;
	}
	.email {
		color: white;
	}
	.icon {
		display: inline-block;
		color: grey;
		width: 32px;
		height: 32px;
	}

	.icon.logged-in {
		color: var(--primary);
	}
	button {
		cursor: pointer;
		width: 100%;
	}
</style>
