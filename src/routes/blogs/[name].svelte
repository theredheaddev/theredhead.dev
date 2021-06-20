<script context="module" lang="ts">
	import { getRequest } from '../../helpers/ApiHelper.svelte';

	import type { Blog } from '../../models/blog.type';
	import { BlogContentType } from '../../models/blog.type';

	let blog: Blog;

	export async function load({ page }) {
		const key = page.params['name'];

		blog = await getRequest(`blogs/${key}`);

		return {
			status: 200
		};
	}
</script>

<svelte:head>
	<title>RHD | {blog.title}</title>
</svelte:head>

<div>
	<h2>{blog.title}</h2>

	<div class="content-block">
		{#each blog.content as content}
			{#if content.type === BlogContentType.Paragraph}
				<p>{content.data}</p>
			{:else if content.type === BlogContentType.Image}
				<img alt="content" src={content.data} />
			{/if}
		{/each}
	</div>
</div>

<style>
	.content-block {
	}
</style>
