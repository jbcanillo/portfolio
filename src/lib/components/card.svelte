<script>
	import Star from '$lib/components/star.svelte';
	export let link = '';
	export let color = '';
	export let title = '';
	export let content = '';
	export let subcontent = '';
	export let counter = 0;
</script>

<article class="card" style="border: 2px solid {color};">
	<div class="pull-right">
		<Star />
	</div>
	{#if counter}
		<strong># {counter}</strong>
	{/if}

	<a href={link} target="_self">
		<header>
			<h4>{title}</h4>
		</header>
		<pre>{content}</pre>
		<footer>
			<sub>{subcontent}</sub>
		</footer>
	</a>
</article>

<style>
	a,
	a:hover {
		text-decoration: none;
	}
	article:hover {
		background-color: rgba(8, 177, 177, 0.1);
	}
	.card {
		margin: 10px;
		max-width: 100%;
		width: 100%;
		height: 50%;
	}
	article {
		padding: 15px;
		transition: background-color 0.3s;
	}
	pre {
    	padding: 5px;
	}
	@media (min-width: 600px) {
		.card {
			max-width: 250px; /* Adjust the max-width for larger screens */
		}
	}
</style>
