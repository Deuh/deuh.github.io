<script>
  export let segment;

  let menu = [
    { href: "spices", icon: "🌶️", title: "Experiment #1: Spices" },
    { href: "timeline", icon: "🔓locked", title: "Experiment #2: Timeline" },
    { href: "#", icon: "🔒locked", title: "Experiment #3: Netskip" },
  ];
</script>

<svelte:head>
  <title>Labs | deuh.github.io</title>
</svelte:head>

<div class="container">
  <div class="content">
    <ul>
      <li>
        <a
          aria-current={segment === 'spice' ? 'page' : undefined}
          href="/spices">[🌶️] - [ Experiment #1: Spices ]</a>
      </li>
      <li>
        <a
          aria-current={segment === 'timeline' ? 'page' : undefined}
          href="/timeline">[🔓locked] - [ Experiment #2: Timeline ]</a>
      </li>
      <li>
        <a
          aria-current={segment === 'netskip' ? 'page' : undefined}
          href="/#">[🔒locked] - [ Experiment #3: Netskip ]</a>
      </li>
    </ul>

    <!--
            {#each menu as item}
                <li>
                    <a aria-current="{segment === item.href ? 'page' : undefined}" href="/{item.href}">[{item.icon}] - [ {item.title} ]</a>
                </li>
            {/each} 
            
            <ul>
            <li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
            <li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>
            <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
                 the blog data when we hover over the link or tap it on a touchscreen -->
    <!-- <li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
        </ul> -->
  </div>
</div>
