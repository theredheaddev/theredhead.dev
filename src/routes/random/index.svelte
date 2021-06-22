<script lang="ts">
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

<p class="focus">This is essentially a random page for me just to list things.</p>
<p class="focus">
	Things such as favourite video games, shows and random pictures or something. I don't know yet...
</p>

<h3 class="focus">Completed Games</h3>
<ul>
	{#each games as game}
		<li><b class="focus">{game.name}</b> - Completed: {game.completed}</li>
	{/each}
</ul>

<style lang="scss">
	p {
		text-align: center;
		font-size: 18px;
		font-weight: bold;
	}
</style>
