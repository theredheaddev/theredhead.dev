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

<div class="container">
	<h2 class="title">{blog.title}</h2>

	<div class="content-block">
		{#each blog.content as content}
			{#if content.type === BlogContentType.Paragraph}
				<p>{@html content.data}</p>
			{:else if content.type === BlogContentType.Image}
				<div class="d-flex justify-content-center">
					<img class="blog-image" alt="content" src={content.data} />
				</div>
			{/if}
		{/each}
	</div>
</div>

<style lang="scss">
	img {
		@media (max-width: 768px) {
			width: 90%;
		}
	}
</style>
