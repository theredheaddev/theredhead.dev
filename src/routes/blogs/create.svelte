<script lang="ts">
	import { getToken } from '../../helpers/Auth.svelte';
	import { onMount } from 'svelte';
	import { BlogContentType } from '../../models/blog.type';
	import type { Blog, Tag } from '../../models/blog.type';
	import { postRequestAuth } from '../../helpers/ApiHelper.svelte';

	let canLoad = false;
	let focusedInput = '';
	let focusedAlt = '';
	let tagsString = '';
	let focusedType = BlogContentType.Paragraph;
	let newBlog: Blog = {
		title: '',
		content: [],
		key: '',
		tags: []
	};

	onMount(() => {
		if (getToken()) {
			canLoad = true;
		} else {
			window.location.href = '/';
		}
	});

	const handleAddClick = (e) => {
		e.preventDefault();
		newBlog.content.push({
			type: focusedType,
			data: focusedInput
		});

		newBlog = { ...newBlog };
		focusedInput = '';
	};

	const handleSave = (e) => {
		e.preventDefault();
		newBlog.tags = tagsString.split(',').map((x) => x.trim());
		postRequestAuth('blogs', newBlog).then((x: Blog) => {
			window.location.href = `/blogs/${x.key}`;
		});
	};
</script>

{#if canLoad}
	<form>
		<h2>{newBlog.title}</h2>
		<br />
		<input class="form-control mb-3" placeholder="Amazing Title !!!" bind:value={newBlog.title} />

		{#each newBlog.content as c}
			{#if c.type === BlogContentType.Paragraph}
				<p>{@html c.data}</p>
			{:else if c.type === BlogContentType.Image}
				<div class="d-flex justify-content-center">
					<img class="blog-image" src={c.data} alt={focusedAlt} />
				</div>
			{/if}
		{/each}
		<p />

		{#if focusedType === BlogContentType.Paragraph}
			<p>{@html focusedInput}</p>
			<textarea
				class="form-control"
				bind:value={focusedInput}
				cols="30"
				rows="10"
				placeholder="Enter some content. Lets get it rolling"
			/>
		{:else if focusedType === BlogContentType.Image}
			{#if focusedInput}
				<div class="d-flex justify-content-center">
					<img class="blog-image" src={focusedInput} alt={focusedAlt} />
				</div>
			{:else}
				<p>Image waiting</p>
			{/if}
			<input
				class="form-control"
				bind:value={focusedInput}
				placeholder="https://awesome-image.com/image.jpg"
			/>
		{/if}

		<div class="mt-3">
			<label>
				<input
					id="para-radio"
					type="radio"
					bind:group={focusedType}
					value={BlogContentType.Paragraph}
				/>
				Paragraph
			</label>

			<label>
				<input
					id="image-radio"
					type="radio"
					bind:group={focusedType}
					value={BlogContentType.Image}
				/>
				Image
			</label>
		</div>
		<button class="btn btn-primary mt-2 mb-3" on:click={handleAddClick}>Add Line</button>

		<div>
			<label for="tags">Tags</label>
			<input
				id="tags"
				class="form-control w-25 mb-2"
				bind:value={tagsString}
				placeholder="Software,Testing,Life,Random"
			/>
		</div>

		<br />
		<br />
		<button class="btn btn-success" on:click={handleSave}>Save blog</button>
	</form>
{/if}

<style>
</style>
