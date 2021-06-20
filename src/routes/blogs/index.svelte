<script context="module" lang="ts">
	import BlogPreview from '../../components/BlogPreview.svelte';
	import { Request } from '../../helpers/ApiHelper.svelte';

	let blogs = [];

	export async function load() {
		blogs = await Request('blogs');

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

		sb = await Request(`blogs?text=${searchBox || ''}&page=0`).then((_) => {
			loading = false;
			return _;
		});
	};

	onMount(() => {
		rendered = true;
		sb = blogs;
	});
</script>

<svelte:head>
	<title>RHD | Blogs</title>
</svelte:head>

<div>
	<!-- svelte-ignore component-name-lowercase -->
	<form class="d-flex align-items-end">
		<div class="form-group">
			<label for="search"><b>Search</b></label>
			<input id="search" class="form-control" bind:value={searchBox} />
		</div>

		<div>
			<button class="btn btn-secondary ms-3" on:click={(e) => submit(e)}>Search</button>
		</div>
	</form>

	{#if loading}
		<Icon data={spinner} spin scale={4} />
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
