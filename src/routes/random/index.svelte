<script lang="ts">
	import RHDTitle from '../../components/RHDTitle.svelte';

	const games = [
		{
			name: 'Banjo-Kazooie',
			completed: '2020'
		},
		{
			name: 'Banjo-Tooie',
			completed: '2020'
		},
		{
			name: 'GTA Vice City',
			completed: '2020'
		},
		{
			name: 'Mafia 1',
			completed: 2021
		},
		{
			name: 'Destroy All Humans (Remake)',
			completed: '2021'
		}
	];
</script>

<RHDTitle pageName="Random Stuff" />

<p class="focus title-para">This is essentially a random page for me just to list things.</p>
<p class="focus title-para">
	Things such as favourite video games, shows and random pictures or something. I don't know yet...
</p>

<h3 class="focus">Completed Games</h3>
<ul>
	{#each games as game}
		<li><b class="focus">{game.name}</b> - Completed: {game.completed}</li>
	{/each}
</ul>
