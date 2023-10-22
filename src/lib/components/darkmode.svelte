<script>
	import { onMount } from 'svelte';
	import Tooltip from '$lib/components/tooltip.svelte';

	let darkMode = false;
	onMount(() => {
		if (localStorage.getItem('darkMode') === 'true') {
			darkMode = true;
			document.documentElement.dataset.theme = 'dark';
		}
	});

	function toggleDarkMode() {
		darkMode = !darkMode;
		document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
		localStorage.setItem('darkMode', darkMode.toString());
	}
</script>

<Tooltip text="Darkmode" position="top">
	<span class="icon">
		<iconify-icon height="1.5rem" icon="material-symbols:shield-moon" />
	</span>
</Tooltip>
<input id="switch" type="checkbox" role="switch" checked={darkMode} on:change={toggleDarkMode} />
