<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
    	background-color: var(--backgroundColor);
    	box-sizing: border-box;
    	margin: 0 auto;
    		max-width: 960px;
	}
</style>

<main>
	<Nav {segment}/>
	<slot></slot>
</main>