<script context="module">
	import { getRequest } from '../helpers/ApiHelper.svelte';

	import BlogPreview from '../components/BlogPreview.svelte';

	let blogs = [];

	export async function load() {
		blogs = await getRequest('blogs');

		return {
			status: 200
		};
	}
</script>

<svelte:head>
	<title>RHD | Home</title>
</svelte:head>

{#each blogs as blog}
	<div class="shadow mb-3">
		<BlogPreview {blog} />
	</div>
{/each}
