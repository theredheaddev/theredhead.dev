<script lang="ts">
	import NavItem from './NavItem.svelte';
	import type { NavItemType } from '../models/NavItem.type';
	import { createEventDispatcher } from 'svelte';
	import Icon from 'svelte-awesome';
	import { instagram, github } from 'svelte-awesome/icons';

	const dispatch = createEventDispatcher();

	const handleItemClicked = () => {
		dispatch('itemClicked');
	};

	const navItems: NavItemType[] = [
		{
			name: 'home',
			link: '/'
		},
		{
			name: 'blogs',
			link: '/blogs'
		},
		{
			name: 'job stuff',
			link: '/job-stuff'
		},
		{
			name: 'teaching',
			link: '/teaching'
		},
		{
			name: 'projects',
			link: '/projects'
		},
		{
			name: 'random',
			link: '/random'
		}
	];
</script>

<div class="wrapper w-100 d-flex justify-content-between flex-column">
	<div class="d-flex flex-column align-items-center p-3">
		<a href="/"
			><img
				alt="me"
				class="me mx-auto border border-3"
				src="/me.jpg"
				width="150px"
				height="150px"
			/></a
		>

		<h4 class="sub mt-3">Agency by day</h4>
		<h4 class="sub">Whatever at night</h4>

		<div class="mt-3 w-100">
			{#each navItems as item, index}
				<div class:mt-2={index > 0}>
					<NavItem {item} on:itemClicked={handleItemClicked} />
				</div>
			{/each}
		</div>
	</div>

	<div class="d-flex align-items-center flex-column pb-3 w-100">
		<div>
			<a href="https://instagram.com/itz_ranga" target="_blank">
				<Icon data={instagram} class="white me-2" scale={2} />
			</a>
			<a href="https://github.com/theredheaddev" target="_blank">
				<Icon data={github} class="white ms-2" scale={2} />
			</a>
		</div>
	</div>
</div>

<style>
	.wrapper {
		background-color: #ff6738;
		border: 1px solid #ff6738;
		height: 100%;
	}

	.me {
		border-radius: 50%;
	}

	.sub {
		color: white;
		font-style: italic;
	}
</style>
