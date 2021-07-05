<script lang="ts" context="module">
	import RHDTitle from '../../components/RHDTitle.svelte';
	import Education from '../../components/Education.svelte';
	import Job from '../../components/Job.svelte';
	import { getRequest } from '../../helpers/ApiHelper.svelte';
	import type { JobStuff } from '../../models/Job.type';

	let jobStuff: JobStuff = null;

	export async function load() {
		jobStuff = await getRequest('jobstuff');

		return {
			status: 200
		};
	}
</script>

<RHDTitle pageName="Job Stuff" />

<h3>Technology Skill set</h3>
<ul>
	{#each jobStuff.skillSet as t}
		<li class="w-100">
			<a target="_blank" href={t.href}>
				<b class="focus">{t.title}</b>
			</a>
		</li>
	{/each}
</ul>
<br />

<h3>Experience</h3>
{#each jobStuff.jobs as e}
	<Job {e} />
{/each}
<br />

<h3>Education</h3>
{#each jobStuff.education as ed}
	<Education {ed} />
	<br />
{/each}

<style lang="scss">
	a {
		text-decoration: none;
	}
</style>
