<script>
	import LinkWithIcon from "./linkButton.svelte";
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

<h2>Links buttons</h2>
<LinkWithIcon name='Chrome Store' url='#' icon=''/>
<LinkWithIcon name='Electric ?' url="#" icon='plug'/>
<LinkWithIcon name='Indexed' url="#" icon=''/>
<LinkWithIcon name='Published' url="#" icon=''/>

<br><br>
<h2>rules showcase</h2>
{#each rules as rule}
	<Item {...rule} /><br>
{/each}

<style>

</style>