<script lang="ts">
	import { format } from 'date-fns';
	import Tag from './Tag.svelte';
	import type { Blog } from '../models/blog.type';

	export let blog: Blog;
</script>

<a href="blogs/{blog.key}" sveltekit:prefetch>
	<div class="w-100 border rounded">
		<div class="p-3 border-bottom">
			<h3 class="title">{blog.title}</h3>
			<p>
				{blog.description}
			</p>
		</div>
		<div class="p-2 d-md-flex align-items-center justify-content-between">
			<p class="mb-0">Posted: {format(new Date(blog.created), 'dd/MM/yyyy HH:mmaa')}</p>
			<div class=" d-flex">
				{#each blog.tags || [] as tag, index}
					<div class:ms-2={index > 0} class="mt-2 mt-md-0">
						<Tag {tag} />
					</div>
				{/each}
			</div>
		</div>
	</div>
</a>

<style lang="scss">
	a {
		color: inherit;
		text-decoration: none;

		&:hover {
			div {
				color: white;
				background-color: #ff6738;
			}
		}
	}
</style>
