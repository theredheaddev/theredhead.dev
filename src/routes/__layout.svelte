<script>
	import MobileNav from '../components/MobileNav.svelte';
	import LeftNav from '../components/LeftNav.svelte';
</script>

<div class="wrapper d-flex">
	<div class="content-wrapper d-lg-flex ">
		<div class="side-nav d-none d-lg-block">
			<LeftNav />
		</div>
		<div class="sideNav d-block d-lg-none">
			<MobileNav />
		</div>
		<div class="px-4 py-2 content">
			<slot />
		</div>
	</div>
</div>

<style>
	.wrapper {
		min-height: 100vh;
		max-height: 100vh;
	}

	.content-wrapper {
		flex: 1;
	}

	.side-nav {
		min-width: 350px;
		overflow-y: auto;
		background-color: #ff6738;
	}

	.content {
		overflow-y: auto;
		width: 100%;
	}
</style>
