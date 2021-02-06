<script>
    export let id = 'Id';
    export let name = 'Name';
    export let compound_id = 'Compound';
    export let flavours = ['one', 'two', 'three'];

    //import FlavourItem;
</script>

<div class="spice_card">
    name
</div>
<div class="periodic-table__element element--{compound_id} {id}">
  <div class="name">{name}</div>
  <div class="compounds-id">{compound_id}</div>
  <div class="symbol">{id}</div>
  <div class="flavours">
    <ul class="flavour_list">
    {#each flavours as flavour}
      <li class="fl-item fl-item--flavour">{flavour}</li>
    {/each}
  </ul>
  </div>
</div>

<style>

</style>
