<script>
  import SpiceCard from "./spice.svelte";
  import CompoundTag from "./compound.svelte";
  import IconGrid from '../../components/icon_gg_grid.svelte';
  import IconGgFullwidth from "../../components/icon_gg_fullwidth.svelte";

  let data = {
    "spices": [
      {
        "num": 1,
        "id": "Ci",
        "name": "Cinnamon",
        "compound_id": "swp",
        "flavours": ["sweet", "aromatic","warm"]
      },
      {
        "num": 2,
        "id": "Ca",
        "name": "Cassia",
        "compound_id": "swp",
        "flavours": ["sweet", "peppery","astringent"]
      },
      {
        "num": 3,
        "id": "Cl",
        "name": "Clove",
        "compound_id": "swp",
        "flavours": ["sweet", "astringent","camphorous"]
      },
      {
        "num": 4,
        "id": "Al",
        "name": "Allspice",
        "compound_id": "swp",
        "flavours": ["warm", "peppery","sweet"]
      },
      {
        "num": 7,
        "id": "An",
        "name": "Anise",
        "compound_id": "swp",
        "flavours": ["camphorous", "sweet","warming"]
      },
      {
        "num": 8,
        "id": "St",
        "name": "Star Anise",
        "compound_id": "swp",
        "flavours": ["liquorice", "sweet","warm"]
      },
      {
        "num": 9,
        "id": "Fe",
        "name": "Fennel",
        "compound_id": "swp",
        "flavours": ["aniseedy", "warming","bittersweet"]
      },
      {
        "num": 13,
        "id": "Lq",
        "name": "Liquorice",
        "compound_id": "swp",
        "flavours": ["sweet", "aniseedy","warm"]
      },
      {
        "num": 14,
        "id": "Mb",
        "name": "Mahleb",
        "compound_id": "swp",
        "flavours": ["bittersweet", "fruity","woody"]
      },
      {
        "num": 19,
        "id": "Va",
        "name": "Vanilla",
        "compound_id": "swp",
        "flavours": ["sweet", "musky","woody"]
      },
      {
        "num": 5,
        "id": "Nu",
        "name": "Nutmeg",
        "compound_id": "wt",
        "flavours": ["Bittersweet", "woody","warm"]
      },
      {
        "num": 6,
        "id": "Ma",
        "name": "Mace",
        "compound_id": "wt",
        "flavours": ["sweet", "warm","Aromatic"]
      },
      {
        "num": 10,
        "id": "Cw",
        "name": "Caraway",
        "compound_id": "wt",
        "flavours": ["menthol", "warming","earthy"]
      },
      {
        "num": 11,
        "id": "Di",
        "name": "Dill",
        "compound_id": "wt",
        "flavours": ["bitter", "citrus","woody"]
      },
      {
        "num": 12,
        "id": "Ao",
        "name": "Annatto",
        "compound_id": "wt",
        "flavours": ["peppery", "earthy","sweet"]
      },
      {
        "num": 15,
        "id": "Mc",
        "name": "Mastic",
        "compound_id": "ft",
        "flavours": ["pine-like", "resinous","woody"]
      },
      {
        "num": 16,
        "id": "Ju",
        "name": "Juniper",
        "compound_id": "ft",
        "flavours": ["resinous", "sharp","woody"]
      },
      {
        "num": 17,
        "id": "Ro",
        "name": "Rose",
        "compound_id": "ft",
        "flavours": ["floral", "musky","sweet"]
      },
      {
        "num": 18,
        "id": "Co",
        "name": "Coriander",
        "compound_id": "ft",
        "flavours": ["citrus", "floral","warming"]
      },
      {
        "num": 20,
        "id": "Cu",
        "name": "Cumin",
        "compound_id": "et",
        "flavours": ["earthy", "herby","woody"]
      },
      {
        "num": 21,
        "id": "Ni",
        "name": "Nigella",
        "compound_id": "et",
        "flavours": ["mild", "peppery","herbaceous"]
      },
      {
        "num": 22,
        "id": "Sl",
        "name": "Grain of Selim",
        "compound_id": "pt",
        "flavours": ["musky", "resinous","bittersweet"]
      },
      {
        "num": 23,
        "id": "Bl",
        "name": "Black Cardamom",
        "compound_id": "pt",
        "flavours": ["smoky", "camphorous","resinous"]
      },
      {
        "num": 24,
        "id": "Cm",
        "name": "Cardamom",
        "compound_id": "pt",
        "flavours": ["Eucalyptus", "citrusy","floral"]
      },
      {
        "num": 29,
        "id": "Ba",
        "name": "Bay",
        "compound_id": "pt",
        "flavours": ["resinous", "herbal","floral"]
      },
      {
        "num": 30,
        "id": "Gg",
        "name": "Galangal",
        "compound_id": "pt",
        "flavours": ["warming", "Pungent","peppery"]
      },
      {
        "num": 25,
        "id": "Li",
        "name": "Dried Lime",
        "compound_id": "ct",
        "flavours": ["tangy", "sour","musky"]
      },
      {
        "num": 26,
        "id": "Lm",
        "name": "Lemon Myrtle",
        "compound_id": "ct",
        "flavours": ["citrusy", "warm","bittersweet"]
      },
      {
        "num": 31,
        "id": "Le",
        "name": "Lemon grass",
        "compound_id": "ct",
        "flavours": ["citrusy", "peppery","refreshing"]
      },
      {
        "num": 27,
        "id": "Am",
        "name": "Amchoor",
        "compound_id": "ssa",
        "flavours": ["citrus", "herbaceous","bittersweet"]
      },
      {
        "num": 28,
        "id": "Ar",
        "name": "Anardana",
        "compound_id": "ssa",
        "flavours": ["sweet", "sour","fruity"]
      },
      {
        "num": 32,
        "id": "Ta",
        "name": "Tamarind",
        "compound_id": "ssa",
        "flavours": ["sour", "fruity","sweet"]
      },
      {
        "num": 33,
        "id": "Su",
        "name": "Sumac",
        "compound_id": "ssa",
        "flavours": ["sour", "fruity","woody"]
      },
      {
        "num": 34,
        "id": "Cb",
        "name": "Carob",
        "compound_id": "ssa",
        "flavours": ["sweet", "astringent","chocolatey"]
      },
      {
        "num": 35,
        "id": "By",
        "name": "Barberry",
        "compound_id": "fa",
        "flavours": ["sour", "sharp","tangy"]
      },
      {
        "num": 36,
        "id": "Cc",
        "name": "Cacao",
        "compound_id": "fa",
        "flavours": ["earthy", "floral","bittersweet"]
      },
      {
        "num": 37,
        "id": "Pa",
        "name": "Paprika",
        "compound_id": "tp",
        "flavours": ["Bittersweet", "earthy","fruity"]
      },
      {
        "num": 38,
        "id": "Wa",
        "name": "Wattle",
        "compound_id": "tp",
        "flavours": ["roasted", "woody","musty"]
      },
      {
        "num": 43,
        "id": "Se",
        "name": "Sesame",
        "compound_id": "tp",
        "flavours": ["nutty", "bittersweet","rich"]
      },
      {
        "num": 39,
        "id": "Ga",
        "name": "Garlic",
        "compound_id": "sc",
        "flavours": ["pungent", "bittersweet","sweet"]
      },
      {
        "num": 40,
        "id": "As",
        "name": "Asafoetida",
        "compound_id": "sc",
        "flavours": ["sulphurous", "oniony","garlic-like"]
      },
      {
        "num": 41,
        "id": "Cy",
        "name": "Curry Leaf",
        "compound_id": "sc",
        "flavours": ["meaty", "warm","floral"]
      },
      {
        "num": 42,
        "id": "Mu",
        "name": "Mustard",
        "compound_id": "sc",
        "flavours": ["pungent", "earthy","sharp"]
      },
      {
        "num": 44,
        "id": "Pr",
        "name": "Grains of paradise",
        "compound_id": "pc",
        "flavours": ["peppery", "Pungent","fruity-floral"]
      },
      {
        "num": 45,
        "id": "Pe",
        "name": "Black pepper",
        "compound_id": "pc",
        "flavours": ["hot", "spicy","citrusy"]
      },
      {
        "num": 49,
        "id": "Si",
        "name": "Sichuan pepper",
        "compound_id": "pc",
        "flavours": ["pungent", "citrusy","floral"]
      },
      {
        "num": 50,
        "id": "Gi",
        "name": "Ginger",
        "compound_id": "pc",
        "flavours": ["hot", "citrusy","woody"]
      },
      {
        "num": 51,
        "id": "Ch",
        "name": "Chilli",
        "compound_id": "pc",
        "flavours": ["hot", "Pungent","fruity"]
      },
      {
        "num": 46,
        "id": "Sa",
        "name": "Saffron",
        "compound_id": "uc",
        "flavours": ["grassy", "bitter","honeyed"]
      },
      {
        "num": 47,
        "id": "Fg",
        "name": "Fenugreek",
        "compound_id": "uc",
        "flavours": ["Bittersweet", "warm","musty"]
      },
      {
        "num": 48,
        "id": "Tu",
        "name": "Turmeric",
        "compound_id": "uc",
        "flavours": ["woody", "floral","bitter"]
      },
      {
        "num": 52,
        "id": "Po",
        "name": "Poppy",
        "compound_id": "uc",
        "flavours": ["nutty", "mild","green"]
      },
      {
        "num": 53,
        "id": "Aj",
        "name": "Ajwain",
        "compound_id": "uc",
        "flavours": ["bitter", "herbaceous","peppery"]
      },
      {
        "num": 54,
        "id": "Ce",
        "name": "Celery Seed",
        "compound_id": "uc",
        "flavours": ["bitter", "savoury","lemony"]
      }
    ],
    "compounds": {
        "1": {
          "id": "swp",
          "name": "Sweet Warming Phenols",
          "color": "#f2c8a2"
        },
        "2": {
          "id": "wt",
          "name": "Warming Terpernes",
          "color": "#d1c4b4"
        },
        "3": {
          "id": "ft",
          "name": "Fragrant Terpernes",
          "color": "#dec6c4"
        },
        "4": {
          "id": "et",
          "name": "Earthy Terpernes",
          "color": "#bebab1"
        },
        "5": {
          "id": "pt",
          "name": "Penetrating Terpenes",
          "color": "#c3d2d5"
        },
        "6": {
          "id": "ct",
          "name": "Citrus Terpenes",
          "color": "#c5d3c2"
        },
        "7": {
          "id": "ssa",
          "name": "Sweet-Sour Acids",
          "color": "#f2d9a9"
        },
        "8": {
          "id": "fa",
          "name": "Fruity Aldehydes",
          "color": "#dcc7d8"
        },
        "9": {
          "id": "tp",
          "name": "Toasty Pyrazines",
          "color": "#d9c3b6"
        },
        "10": {
          "id": "sc",
          "name": "Sulphurous Compounds",
          "color": "#d9c6a5"
        },
        "11": {
          "id": "pc",
          "name": "Pugent Compounds",
          "color": "#f8bba6"
        },
        "12": {
          "id": "uc",
          "name": "Unique Compounds",
          "color": "#c5d3c4"
        }
      }
  };

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
