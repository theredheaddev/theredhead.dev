<script lang="ts">
	import type { JobDescription } from '../models/Job.type';

	export let e: JobDescription;
</script>

<div>
	<h4 class="mb-1"><span class="focus">{e.title}</span> - <i>{e.role}</i></h4>
	<p class="mb-2"><i>{e.start}</i> - <i>{e.end ?? 'Present'}</i></p>
	{#if e.roles}
		<ul>
			{#each e.roles as r}
				<li>{r}</li>
			{/each}
		</ul>
	{/if}
	{#if e.rolesWithSubRoles}
		{#each e.rolesWithSubRoles as r}
			<b>{r.title}</b>
			<ul>
				{#each r.roles as role}
					<li>{role}</li>
				{/each}
			</ul>
		{/each}
	{/if}
</div>
