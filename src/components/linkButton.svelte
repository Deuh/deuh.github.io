<script>
	export let name     = 'Name';
    export let url      = '#';
    export let icon     = ''; // icon-plug ...
</script>

<a href='{url}' class='link--ext icon--{icon}'>
    {name}
</a>

<style>
	a {
		border: 1px solid var(--textColor);
		border-radius: 1px;
		padding: 0px 3px;
	}
	a:hover {
		text-decoration:none;
    }
    
	a.link--ext:after {
		content:'↗';
		color: var(--textColor);
		border-left: 1px solid var(--textColor);
		margin-left:5px;
		text-decoration:none;
		padding-left: 3px;
    }
    
	a.link--ext:hover:after {
		color: var(--textHoverColor);
	}
	
	.icon--plug:after {
		content:"🔌" ! important;
    }
</style>