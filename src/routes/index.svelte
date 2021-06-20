<script context="module">
	import BlogPreview from '../components/BlogPreview.svelte';

	let blogs = [];

	export async function load() {
		blogs = await fetch('https://theredhead.dev/api/blogs').then((x) => x.json());

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
