<script lang="ts">
	import LeftNav from './LeftNav.svelte';

	let isOpen = false;

	const burger = (_) => {
		isOpen = !isOpen;
	};

	const closeMenu = () => {
		isOpen = false;
	};
</script>

<div class:banner={!isOpen} class="mob-header p-3 d-flex justify-content-between">
	<div class="d-flex align-items-center">
		<span class="rhd-title">RHD</span>
	</div>
	<div class="d-flex align-items-center">
		<button on:click={burger}>Burger</button>
	</div>
</div>

{#if isOpen}
	<div class="nav-holder">
		<LeftNav on:itemClicked={closeMenu} />
	</div>
{/if}

<style>
	.banner {
		background-color: #ff6738;
	}

	.mob-header {
		height: 65px;
		position: relative;
		z-index: 10;
	}

	.rhd-title {
		color: white;
		font-weight: 900;
		font-size: 32px;
		line-height: 0;
	}

	.nav-holder {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
	}
</style>
