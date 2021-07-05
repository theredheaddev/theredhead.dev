<script lang="ts">
	import RHDTitle from '../../components/RHDTitle.svelte';
	import type { Project } from '../../models/Project.type';

	const projects: Project[] = [
		{
			name: 'City',
			description: 'Just playing around with 2D Unity',
			url: 'https://theredhead.dev/rcity',
			image: '/rcity.jpg'
		}
	];
</script>

<RHDTitle pageName="Projects" />

<p class="focus title-para">A place to list all of my current projects or any past works.</p>

<div class="row py-3">
	{#each projects as p}
		<div class="col-lg-3 d-flex col-md-6">
			<a
				target="_blank"
				class="border rounded w-100 p-2 shadow d-flex flex-column align-items-center"
				href={p.url}
			>
				<img src={p.image} width="90%" />

				<h3 class="focus mt-2">{p.name}</h3>
				<p>{p.description}</p>
			</a>
		</div>
	{/each}
</div>

<style lang="scss">
	a {
		text-decoration: none;
		p {
			color: black;
		}
	}
</style>
