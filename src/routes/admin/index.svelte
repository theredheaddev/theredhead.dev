<script lang="ts">
	import RHDTitle from '../../components/RHDTitle.svelte';
	import { onMount } from 'svelte';
	import { getToken } from '../../helpers/Auth.svelte';

	onMount(() => {
		const token = getToken();

		if (!token) {
			window.location.href = 'admin/login';
		}
	});
</script>

<RHDTitle pageName="Admin Login" />

<div>I AM THE ADMIN DASHBOARD</div>
