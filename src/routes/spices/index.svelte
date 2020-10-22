<script>
  import SpiceCard from "./spice.svelte";
  import CompoundTag from "./compound.svelte";
  import IconGrid from '../../components/icon_gg_grid.svelte';
  import IconFullwidth from '../../components/icon_gg_fullwidth.svelte';
  import IconGgFullwidth from "../../components/icon_gg_fullwidth.svelte";


  let data = fetchData();
  async function fetchData() {
    const res = await fetch(`https://deuh.github.io/static/data/spices.json`);
    const json = await res.json();
    if (res.ok) {
      console.log(json);
      return json;
    } else {
      console.log(text);
      throw new Error(text);
    }
  }

  function displayPeriodic() {
    let $btn_periodic = document.getElementById('display_periodic');
    let $btn_grouped = document.getElementById('display_grouped');
    let $el_table = document.getElementById('periodic-table');
    $btn_periodic.classList.add('active');
    $btn_grouped.classList.remove('active');
    $el_table.classList.add('grid_order-periodic');
    $el_table.classList.remove('grid_order-compounds');
  }
  function displayGrouped() {
    let $btn_periodic = document.getElementById('display_periodic');
    let $btn_grouped = document.getElementById('display_grouped');
    let $el_table = document.getElementById('periodic-table');
    $btn_grouped.classList.add('active');
      $btn_periodic.classList.remove('active');
      $el_table.classList.add('grid_order-compounds');
      $el_table.classList.remove('grid_order-periodic');
  }
  function compoundToggle(event) {
    console.log('toggle:'+ event.detail.id);
    let $el_table = document.getElementById('periodic-table');
    $el_table.classList.toggle('active--'+event.detail.id);
  }
</script>

<style>
  .wrapper {
    text-align: center;
  }

  .table-header {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
  }
  .table-header__item {
    flex: 0 0 auto;
  }
  .button {
    margin-left: 10px;
    max-width: 16px;
  }
  .button.active {
    color: var(--textColor);
  }
  .button:hover {
    color: var(--textHoverColor);
  }
  .title {
    flex: 20 0 auto;
    margin: 0px;
    flex-grow: 4;
    text-align: left;
  }
  .periodic-table {
    display: grid;
    grid-gap: 2px;
    grid-auto-rows: 1fr;
    grid-auto-columns: 1fr;
    grid-template-columns: repeat(9, 1fr);
    margin: 2em 0 2em;
  }

  .compounds-grid {
    grid-area: cGrid;
  }
/*
Periodic grid template
*/
  @media (max-width: 425px) {
    .grid_order-periodic {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-template-areas:
        "Ci An Lq"
        "Va Li Le"
        "Pa Se Si"
        "Ca St Mb"
        "Cu Lm Ta"
        "Wa Pr Gi"
        "Cl Fe Mc"
        "Ni Am Su"
        "Ga Pe Ch"
        "Al Cw Ju"
        "Sl Ar Cb"
        "As Sa Po"
        "Nu Di Ro"
        "Bl Ba By"
        "Cy Fg Aj"
        "Ma Ao Co"
        "Cm Gg Cc"
        "Mu Tu Ce";
    }
  }
  @media (min-width: 426px) {
    .grid_order-periodic {
      grid-template-columns: repeat(9, 1fr);
      grid-template-rows: repeat(6, 1fr);
      grid-template-areas:
        "Ci An Lq Va Li Le Pa Se Si"
        "Ca St Mb Cu Lm Ta Wa Pr Gi"
        "Cl Fe Mc Ni Am Su Ga Pe Ch"
        "Al Cw Ju Sl Ar Cb As Sa Po"
        "Nu Di Ro Bl Ba By Cy Fg Aj"
        "Ma Ao Co Cm Gg Cc Mu Tu Ce";
    }
  }

  div :global(.grid_order-compounds) {
    display: grid;
    grid-template-columns: repeat(5, 0.5fr);
    grid-template-rows: repeat(25, 0.5fr);
    grid-template-areas:
      ". . . . ."
      "Ci An Lq Va Ca"
      "St Mb Cl Fe Al"
      ". . . . ."
      "Cw Nu Di Ma Ao"
      ". . . . ."
      "Mc Ju Ro Co ."
      ". . . . ."
      "Cu Ni . . ."
      ". . . . ."
      "Sl Bl Ba Cm Gg"
      ". . . . ."
      "Li Le Lm . ."
      ". . . . ."
      "Ta Am Su Ar Cb"
      ". . . . ."
      "By Cc . . ."
      ". . . . ."
      "Pa Se Wa . ."
      ". . . . ."
      "Ga As Cy Mu ."
      ". . . . ."
      "Si Pr Gi Pe Ch"
      ". . . . ."
      "Sa Po Fg Aj Tu"
      "Ce . . . .";
  }
  div :global(.periodic-table.active--swp .element--swp) {border-color: #f2c8a2; box-shadow:inset 0px 0px 4px 4px #f2c8a2;}
  div :global(.periodic-table.active--wt .element--wt) {border-color: #d1c4b4; box-shadow:inset 0px 0px 4px 4px #d1c4b4;}
  div :global(.periodic-table.active--ft .element--ft) {border-color: #dec6c4; box-shadow:inset 0px 0px 4px 4px #dec6c4;}
  div :global(.periodic-table.active--et .element--et) {border-color: #bebab1; box-shadow:inset 0px 0px 4px 4px #bebab1;}
  div :global(.periodic-table.active--pt .element--pt) {border-color: #c3d2d5; box-shadow:inset 0px 0px 4px 4px #c3d2d5;}
  div :global(.periodic-table.active--ct .element--ct) {border-color: #c5d3c2; box-shadow:inset 0px 0px 4px 4px #c5d3c2;}
  div :global(.periodic-table.active--ssa .element--ssa) {border-color: #f2d9a9; box-shadow:inset 0px 0px 4px 4px #f2d9a9;}
  div :global(.periodic-table.active--fa .element--fa) {border-color: #dcc7d8; box-shadow:inset 0px 0px 4px 4px #dcc7d8;}
  div :global(.periodic-table.active--tp .element--tp) {border-color: #d9c3b6; box-shadow:inset 0px 0px 4px 4px #d9c3b6;}
  div :global(.periodic-table.active--sc .element--sc) {border-color: #d9c6a5; box-shadow:inset 0px 0px 4px 4px #d9c6a5;}
  div :global(.periodic-table.active--pc .element--pc) {border-color: #f8bba6; box-shadow:inset 0px 0px 4px 4px #f8bba6;}
  div :global(.periodic-table.active--uc .element--uc) {border-color: #c5d3c4; box-shadow:inset 0px 0px 4px 4px #c5d3c4;}
</style>

<div class="content">
    <div class="wrapper">
      <div class="table-header">
        <h1 class="table-header__item title ">Periodic table of Spices</h1>
        <span on:click={displayPeriodic} class="table-header__item button active" id="display_periodic"><IconGrid /></span>
        <span on:click={displayGrouped} class="table-header__item button" id="display_grouped"><IconGgFullwidth/></span>
      </div>
        <div class="periodic-table grid_order-periodic" id="periodic-table">
          {#await data}
            <p>...Loading data</p>
          {:then data}
            {#each data.spices as spice}
              <SpiceCard {...spice} />
            {/each}
            
          {:catch error}
            <p style="color: red">{error.message}</p>
          {/await}
        </div>
        <div class="compounds-grid">
          {#await data}
            <p>...Loading data</p>
          {:then data}
            {#each Object.keys(data.compounds) as key}
              <CompoundTag {...data.compounds[key]} on:message={compoundToggle} />
            {/each}
            {:catch error}
            <p style="color: red">{error.message}</p>
          {/await}
        </div>
    </div>     
</div>
