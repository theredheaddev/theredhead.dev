<script lang="ts">
	import type { NavItemType } from '../models/NavItem.type';
	import { createEventDispatcher } from 'svelte';

	export let item: NavItemType;

	const dispatch = createEventDispatcher();

	const isClicked = () => {
		dispatch('itemClicked');
	};
</script>

<a class="nav-item" on:click={isClicked} href={item.link}>
	<div class="p-2 border rounded d-flex align-items-center justify-content-center w-100">
		{item.name}
	</div>
</a>

<style lang="scss">
	.nav-item {
		font-size: 24px;
		color: white;
		text-decoration: none;

		&:hover {
			text-decoration: none;
			color: #ff6738;
		}
	}

	div:hover {
		cursor: pointer;
		background-color: white;
	}
</style>
