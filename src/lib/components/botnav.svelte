<script>
	import Darkmode from '$lib/components/darkmode.svelte';
	import { APP_NAME } from "$lib/scripts/constants";
</script>

<nav class="container-fluid dark-mode-element">
	<div class="pull-left">
		<slot/>
	</div>
	<div class="pull-right">
		<span id="notice">{ APP_NAME } © {new Date().getFullYear()}</span>
		<Darkmode />
	</div>
</nav>

<style>
	nav {
		display: block;
		position: fixed;
		text-align: center;
		justify-content: center;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 10px;
		box-shadow: 10px 0px 20px rgb(0 0 0 / 0.2);
	}
	#notice{
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 15px;
	}
</style>