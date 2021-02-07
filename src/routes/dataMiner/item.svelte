
<script>
	export let target = 'selector';
	export let name = 'name';
	export let value;
</script>

<div class="config_item">
	<span class="config_item--name">
		{name}
	</span>
	<span class="config_item--target">
	{target}
	</span>
	{#if value}
		<span class="config_item--value">
			{value}
		</span>
	{/if}
</div>

<style>
	.config_item {
		margin: 3px;
		border: 1px solid #142933;
		border-radius: 1px;
		padding: 3px 0px;
		display: inline-block;
	}
	.config_item--name,
	.config_item--target,
	.config_item--value{
		display: inline;
		padding: 3px 4px;
	}
	.config_item--name {
		border-right: 1px solid black;
		background-color: #607d8b;
	}
	.config_item--value {
		border-left: 1px solid #142933;
		padding-left: 5px;
		background-color: #1c2d35;
	}
</style>