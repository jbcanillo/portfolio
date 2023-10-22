<script>
	import '../app.css';
	import '@picocss/pico';
	import 'iconify-icon';

	import { APP_NAME } from '$lib/scripts/constants';
	import { onNavigate } from '$app/navigation';

	import NavigationBar from '$lib/components/topnav.svelte';
	import Footer from '$lib/components/botnav.svelte';

	// view transition between routes
	onNavigate((navigation) => {
		// @ts-ignore
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			// @ts-ignore
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	const links = [
		{
			url: '/',
			name: 'Home',
			icon: '<iconify-icon height="auto" icon="material-symbols:home"/>'
		},
		{
			url: '/projects',
			name: 'My Projects',
			icon: '<iconify-icon height="auto" icon="material-symbols:view-kanban"/>'
		},
		{
			url: '/blogs',
			name: 'My Blogs',
			icon: '<iconify-icon height="auto" icon="material-symbols:newsmode"/>'
		},
		{
			url: '/login',
			name: 'Login',
			icon: '<iconify-icon height="auto" icon="material-symbols:login"/>'
		},
		{
			url: '/logout',
			name: 'Logout',
			icon: '<iconify-icon height="auto" icon="material-symbols:logout"/>'
		}
	];
</script>

<svelte:head>
	<title>{APP_NAME}</title>
	<link rel="icon" type="image/svg" href="/images/favicon.ico" />
</svelte:head>

<header class="container-fluid">
	<NavigationBar {links}>
		<a href="https://jubric.dev" target="_blank">
			<span class="typewriter">:\>jubric.dev </span>
		</a>
	</NavigationBar>
</header>

<main class="container-fluid">
	<slot />
</main>

<footer class="container-fluid">
	<Footer>
		
	</Footer>
</footer>

<style>
</style>
