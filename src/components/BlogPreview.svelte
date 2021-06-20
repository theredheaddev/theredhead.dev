<script>
	import Tag from './Tag.svelte';

	export let blog;
</script>

<a href="blogs/{blog.key}" sveltekit:prefetch>
	<div class="w-100 border rounded">
		<div class="p-3 border-bottom">
			<h3 class="title">{blog.title}</h3>
			<p>
				{blog.description}
			</p>
		</div>
		<div class="p-2 d-flex justify-content-between">
			<p>{blog.created}</p>
			<Tag />
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
