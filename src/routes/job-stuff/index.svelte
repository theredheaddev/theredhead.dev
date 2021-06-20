<script lang="ts">
	import Education from '../../components/Education.svelte';
	import { technologies, experience, education } from './job.data';
	import Job from '../../components/Job.svelte';
</script>

<svelte:head>
	<title>RHD | Job Stuff</title>
</svelte:head>

<h3>Technology Skill set</h3>
<ul>
	{#each technologies as t}
		<li class="w-100">
			<a target="_blank" href={t.href}>
				<b class="focus">{t.title}</b>
			</a>
		</li>
	{/each}
</ul>
<br />

<h3>Experience</h3>
{#each experience as e}
	<Job {e} />
{/each}
<br />

<h3>Education</h3>
{#each education as ed}
	<Education {ed} />
	<br />
{/each}

<style lang="scss">
	a {
		text-decoration: none;
	}
</style>
