<script>
	import Searchbar from '$lib/components/searchbar.svelte';
	import Card from '$lib/components/card.svelte';

	export let data;
</script>

<section class="container-fluid">
	<hgroup>
		<h1>My Projects</h1>
		<h2>Manage your projects and tasks here.</h2>
	</hgroup>

	<Searchbar />

	<slot />

	{#await data.projects}
		<article aria-busy="true" class="outline">
			<strong>Fetching data...</strong>
		</article>
	{:then projects}
		<div class="card-container">
			{#each projects.items as row, index (row.id)}
				<Card
					counter={index + 1}
					link={'tasks/${row.id}'}
					color={row.color}
					title={row.name}
					content={row.description}
					subcontent={row.category}
				/>
			{/each}
		</div>
	{:catch}
		<article class="outline">
			<strong>Uh oh! Failed to fetch the data.</strong>
		</article>
	{/await}
</section>
