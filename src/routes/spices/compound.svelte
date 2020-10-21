<script>
  export let id;
  export let name;
  export let color;
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  
  function handleClick() {
    this.classList.toggle('active');
    dispatch('message', {
			id: id
		});
  }
  

</script>

<div class="compoundTag compoundTag-{id}" on:click={handleClick} style="border-color:{color};">
  <div class="id">{id}</div>
  <div class="name">{name}</div>
</div>

<style>
  .compoundTag {display: inline-flex; border: 1px solid #fff; margin:2px; cursor:pointer;}
  .compoundTag>.id {order: 1; padding: 4px; border-right: 1px solid #fff;}
  .compoundTag>.name {order: 2;padding: 4px;}
 
  .active.compoundTag-swp {
    color: #f2c8a2;
  }
  .active.compoundTag-wt {
    color: #d1c4b4;
  }
  .active.compoundTag-ft {
    color: #dec6c4;
  }
  .active.compoundTag-et {
    color: #bebab1;
  }
  .active.compoundTag-pt {
    color: #c3d2d5;
  }
  .active.compoundTag-ct {
    color: #c5d3c2;
  }
  .active.compoundTag-ssa {
    color: #f2d9a9;
  }
  .active.compoundTag-fa {
    color: #dcc7d8;
  }
  .active.compoundTag-tp {
    color: #d9c3b6;
  }
  .active.compoundTag-sc {
    color: #d9c6a5;
  }
  .active.compoundTag-pc {
    color: #f8bba6;
  }
  .active.compoundTag-uc {
    color: #c5d3c4;
  }
  .active.compoundTag-swp .id {background-color: #f2c8a2; color:#151515;}
.active.compoundTag-wt .id {background-color: #d1c4b4; color:#151515;}
.active.compoundTag-ft .id {background-color: #dec6c4; color:#151515;}
.active.compoundTag-et .id {background-color: #bebab1; color:#151515;}
.active.compoundTag-pt .id {background-color: #c3d2d5; color:#151515;}
.active.compoundTag-ct .id {background-color: #c5d3c2; color:#151515;}
.active.compoundTag-ssa .id {background-color: #f2d9a9; color:#151515;}
.active.compoundTag-fa .id {background-color: #dcc7d8; color:#151515;}
.active.compoundTag-tp .id {background-color: #d9c3b6; color:#151515;}
.active.compoundTag-sc .id {background-color: #d9c6a5; color:#151515;}
.active.compoundTag-pc .id {background-color: #f8bba6; color:#151515;}
.active.compoundTag-uc .id {background-color: #c5d3c4; color:#151515;}
</style>


