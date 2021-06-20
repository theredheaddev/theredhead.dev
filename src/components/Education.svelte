<script lang="ts">
	import type { Education } from '../models/Job.type';

	export let ed: Education;
</script>

<div>
	<h4 class="mb-1">
		<span class="focus">{ed.title} </span> -
		<i>{ed.cert}</i>
	</h4>
	<i>{ed.start}</i>
	{#if ed.end}
		- <i>{ed.end}</i>
	{/if}
</div>

<style></style>
