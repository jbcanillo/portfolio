<script>
	import Tooltip from '$lib/components/tooltip.svelte';
	export let links = Array();
</script>

<nav class="container-fluid dark-mode-element">
	<ul>
		<li>
			<slot/>
		</li>
	</ul>
	<ul>
		{#each links as { url, name, icon }}
			<li>
				<Tooltip text={name} position="bottom">
					<a href={url}>
						{#if icon}
							<span class="icon">{@html icon}</span>
						{:else}
							<span class="icon"><iconify-icon height="auto" icon="material-symbols:tsunami"/></span>
						{/if}
					</a>
				</Tooltip>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		display: flex;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		/* background-color: rgb(255, 255, 255); */
		box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
	}
	a:hover {
		background-color: rgba(32, 107, 181, 0.627);
		color: aqua;
	}
</style>
