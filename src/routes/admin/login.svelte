<script context="module">
	export const ssr = false;
	export const prerender = false;
</script>

<script lang="ts">
	import Icon from 'svelte-awesome';
	import { spinner } from 'svelte-awesome/icons';
	import { postRequest } from '../../helpers/ApiHelper.svelte';
	import { setToken } from '../../helpers/Auth.svelte';
	import RHDTitle from '../../components/RHDTitle.svelte';
	let username = '';
	let password = '';

	let isLoading = false;

	const login = (e) => {
		e.preventDefault();

		isLoading = true;

		postRequest('auth/login', {
			username,
			password
		})
			.then(({ token }) => {
				setToken(token);
				window.location.href = '/admin';
			})
			.catch((_) => {
				alert('error');
				isLoading = false;
			});
	};
</script>

<RHDTitle pageName="Admin Login" />

<div class="w-100 d-flex align-items-center justify-content-center">
	<div class="border rounded shadow p-3">
		<h3>Login</h3>

		<form>
			<div class="form-group">
				<label for="username">Username</label>
				<input id="username" disabled={isLoading} class="form-control" bind:value={username} />
			</div>
			<div class="form-group">
				<label for="password">Password</label>
				<input
					id="password"
					disabled={isLoading}
					class="form-control"
					type="password"
					bind:value={password}
				/>
			</div>

			{#if isLoading}
				<Icon data={spinner} pulse scale={2} class="mt-2" />
			{/if}
			{#if !isLoading}
				<button on:click={login} disabled={isLoading} class="btn btn-primary mt-2 w-100">
					Login</button
				>
			{/if}
		</form>
	</div>
</div>
