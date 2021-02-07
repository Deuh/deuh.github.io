<script>
	import Item from "./item.svelte";

	let rules = [
{name:"url",target: '.js-click-handler', value:'href'},
{name: 'title',   target: 'h3.product-card-details__title'},
{name: 'Year',    target: '.listing-key-specs > li:nth-of-type(1)'},
{name: 'model',   target: '.listing-key-specs > li:nth-of-type(2)'},
{name: 'price',   target: '.product-card-pricing__price > span'},
{name: 'mileage', target: '.listing-key-specs > li:nth-of-type(3)'}
            ];
</script>

<div class="double-panel">
	<div class="panel-left">
		<h2>Input rules</h2>

	</div>
	<div class="panel-right">
		<h2>rules showcase</h2>
		{#each rules as rule}
			<Item {...rule} /><br>
		{/each}
	</div>
</div>

<style>
	.double-panel {
	grid-template-areas: 'left left left right';
    display: grid;
    margin: 25px;
	}
	.panel-left {grid-area: left;}
	.panel-right {grid-area: right;}
</style>