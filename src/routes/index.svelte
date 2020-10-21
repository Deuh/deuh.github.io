<script>
    export let segment;

    let menu = [
        {href:'spices', icon: '🌶️', title: 'Experiment #1: Spices'},
        {href:'#', icon: '🔒locked', title: 'Experiment #2: Timeline'},
        {href:'#', icon: '🔒locked', title: 'Experiment #3: Netskip'},
        /*{href:'about', icon: 'A', title: 'About'},
        {href:'blog', icon: 'B', title: 'Blog'},*/
        
    ];
</script>

<svelte:head>
    <title>Labs | deuh.github.io</title>
</svelte:head>

<div class="container">
    <div class="content">
        <ul>
            {#each menu as item}
                <li>
                    <a aria-current="{segment === item.href ? 'page' : undefined}" href="/{item.href}">[{item.icon}] - [ {item.title} ]</a>
                </li>
            {/each}
        </ul> 

        <!-- <ul>
            <li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
            <li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>
            <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
                 the blog data when we hover over the link or tap it on a touchscreen -->
           <!-- <li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
        </ul> -->
    </div>
</div>