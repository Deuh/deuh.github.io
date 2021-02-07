<script>
  let menu = [
    { href: "spices", icon: "🌶️", title: "Experiment #1: Spices" },
    { href: "timeline", icon: "🔓locked", title: "Experiment #2: Timeline" },
    { href: "uiLib", icon: "📦", title: "Experiment #3: UI library" },
    { href: "dataMiner", icon: "dM", title: "Experiment #4: Page data Miner extension"},
    { href: "#", icon: "🔒locked", title: "Experiment #5: Qwantity calculator"}
  ];
</script>

<svelte:head>
  <title>Labs | deuh.github.io</title>
</svelte:head>

<div class="container">
  <div class="content">
            {#each menu as item}
                <li>
                    <a href="/{item.href}">[{item.icon}] - [ {item.title} ]</a>
                </li>
            {/each} 
  </div>
</div>
