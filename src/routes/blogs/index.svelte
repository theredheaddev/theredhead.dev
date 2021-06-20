<script context="module" lang="ts">
	import RHDTitle from '../../components/RHDTitle.svelte';
	import BlogPreview from '../../components/BlogPreview.svelte';
	import { getRequest } from '../../helpers/ApiHelper.svelte';

	let blogs = [];

	export async function load() {
		blogs = await getRequest('blogs');

		return {
			status: 200
		};
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from 'svelte-awesome';
	import { spinner } from 'svelte-awesome/icons';

	let rendered = false;
	let sb = [];

	let loading = false;

	let searchBox = '';

	const submit = async (e) => {
		e.preventDefault();

		loading = false;

		sb = await getRequest(`blogs?text=${searchBox || ''}&page=0`).then((_) => {
			loading = false;
			return _;
		});
	};

	onMount(() => {
		rendered = true;
		sb = blogs;
	});
</script>

<RHDTitle pageName="Blogs" />

<div>
	<!-- svelte-ignore component-name-lowercase -->
	<form class="d-flex align-items-end">
		<div class="form-group">
			<label for="search"><b>Search</b></label>
			<input id="search" class="form-control" bind:value={searchBox} />
		</div>

		<div>
			<button class="btn btn-secondary ms-3" on:click={submit}>Search</button>
		</div>
	</form>

	{#if loading}
		<Icon data={spinner} pulse scale={4} />
	{/if}

	{#if !loading}
		{#each rendered ? sb : blogs as blog}
			<div class="mt-3 shadow">
				<BlogPreview {blog} />
			</div>
		{/each}
	{/if}
</div>

<style>
</style>
