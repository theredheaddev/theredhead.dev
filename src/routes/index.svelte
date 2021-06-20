<script context="module">
	import { Request } from '../helpers/ApiHelper.svelte';

	import BlogPreview from '../components/BlogPreview.svelte';

	let blogs = [];

	export async function load() {
		blogs = await Request('blogs');

		return {
			status: 200
		};
	}
</script>

<svelte:head>
	<title>RHD | Home</title>
</svelte:head>

{#each blogs as blog}
	<div class="shadow">
		<BlogPreview {blog} />
	</div>
{/each}
