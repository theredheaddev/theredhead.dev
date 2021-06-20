<script context="module" lang="ts">
	import BlogPreview from '../../components/BlogPreview.svelte';

	let blogs = [];
	let searchBox = '';

	export async function load() {
		blogs = await fetch('https://theredhead.dev/api/blogs').then((x) => x.json());

		return {
			status: 200
		};
	}

	const submit = (e) => {
		e.preventDefault();
		console.log(searchBox);
	};
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	let rendered = false;
	let sb = [];

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

	{#each rendered ? sb : blogs as blog}
		<div class="mt-3 shadow">
			<BlogPreview {blog} />
		</div>
	{/each}
</div>

<style>
</style>
