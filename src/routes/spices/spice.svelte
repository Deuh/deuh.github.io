<script>
    export let id = 'Id';
    export let name = 'Name';
    export let compound_id = 'Compound';
    export let flavours = ['one', 'two', 'three'];
    export let num;
</script>

<div class="periodic-table__element element--{compound_id} {id}">
  <div class="name">{name}</div>
  <div class="compounds-id">{compound_id}</div>
  <div class="symbol">{id}</div>
  <div class="flavours">
    <ul class="flavour_list">
    {#each flavours as flavour, i}
      <li class="fl-item fl-item--{i}">{flavour}</li>
    {/each}
  </ul>
  </div>
</div>

<style>
.periodic-table__element {
  padding: 3px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  background: #212424;
  color: #fff;
}
.periodic-table__element:hover .symbol {
  position: absolute;
  top: -6px;
  right: 2px;
  color: #212424;
}
.periodic-table__element:hover,
.periodic-table__element:hover .symbol {
  cursor: pointer;
  color: #212424;
}
.periodic-table__element .compounds-id {
  order: 1;
  display: none;
  align-self: flex-start;
}
.periodic-table__element:hover .compounds-id {
  padding: 0px 3px 1px 3px;
  border: 1px solid black;
  border-radius: 2px;
  color: #151515;
  position: relative;
  bottom: 1px;
}
.periodic-table__element .symbol {
  font-size: 30px;
  font-weight: bold;
  order: 2;
}
.periodic-table__element .name {
  order: 3;
  text-align: center;
}
.periodic-table__element .flavours {
  display: none;
  order: 4;
}
.periodic-table__element:hover .compounds-id {
  display: block;
}
.periodic-table__element:hover .name {
  display: none;
}
.periodic-table__element:hover .flavours {
  display: block;
}
.element--swp .symbol {
  color: #f2c8a2;
}
.element--swp:hover {
  background-color: #f2c8a2;
}
.periodic-table__element:hover.element--swp {
  background-color: #f2c8a2;
}
.periodic-table__element:hover .compounds-id {
  display: block;
}
.periodic-table__element:hover .name {
  display: none;
}
.periodic-table__element:hover .flavours {
  display: block;
}
.element--wt .symbol {
  color: #d1c4b4;
}
.element--wt:hover {
  background-color: #d1c4b4;
}
.periodic-table__element:hover.element--wt {
  background-color: #d1c4b4;
}
.periodic-table__element:hover .compounds-id {
  display: block;
}
.periodic-table__element:hover .name {
  display: none;
}
.periodic-table__element:hover .flavours {
  display: block;
}
.element--ft .symbol {
  color: #dec6c4;
}
.element--ft:hover {
  background-color: #dec6c4;
}
.periodic-table__element:hover.element--ft {
  background-color: #dec6c4;
}
.periodic-table__element:hover .compounds-id {
  display: block;
}
.periodic-table__element:hover .name {
  display: none;
}
.periodic-table__element:hover .flavours {
  display: block;
}
.element--et .symbol {
  color: #bebab1;
}
.element--et:hover {
  background-color: #bebab1;
}
.periodic-table__element:hover.element--et {
  background-color: #bebab1;
}
.periodic-table__element:hover .compounds-id {
  display: block;
}
.periodic-table__element:hover .name {
  display: none;
}
.periodic-table__element:hover .flavours {
  display: block;
}
.element--pt .symbol {
  color: #c3d2d5;
}
.element--pt:hover {
  background-color: #c3d2d5;
}
.periodic-table__element:hover.element--pt {
  background-color: #c3d2d5;
}
.periodic-table__element:hover .compounds-id {
  display: block;
}
.periodic-table__element:hover .name {
  display: none;
}
.periodic-table__element:hover .flavours {
  display: block;
}
.element--ct .symbol {
  color: #c5d3c2;
}
.element--ct:hover {
  background-color: #c5d3c2;
}
.periodic-table__element:hover.element--ct {
  background-color: #c5d3c2;
}
.periodic-table__element:hover .compounds-id {
  display: block;
}
.periodic-table__element:hover .name {
  display: none;
}
.periodic-table__element:hover .flavours {
  display: block;
}
.element--ssa .symbol {
  color: #f2d9a9;
}
.element--ssa:hover {
  background-color: #f2d9a9;
}
.periodic-table__element:hover.element--ssa {
  background-color: #f2d9a9;
}
.periodic-table__element:hover .compounds-id {
  display: block;
}
.periodic-table__element:hover .name {
  display: none;
}
.periodic-table__element:hover .flavours {
  display: block;
}
.element--fa .symbol {
  color: #dcc7d8;
}
.element--fa:hover {
  background-color: #dcc7d8;
}
.periodic-table__element:hover.element--fa {
  background-color: #dcc7d8;
}
.periodic-table__element:hover .compounds-id {
  display: block;
}
.periodic-table__element:hover .name {
  display: none;
}
.periodic-table__element:hover .flavours {
  display: block;
}
.element--tp .symbol {
  color: #d9c3b6;
}
.element--tp:hover {
  background-color: #d9c3b6;
}
.periodic-table__element:hover.element--tp {
  background-color: #d9c3b6;
}
.periodic-table__element:hover .compounds-id {
  display: block;
}
.periodic-table__element:hover .name {
  display: none;
}
.periodic-table__element:hover .flavours {
  display: block;
}
.element--sc .symbol {
  color: #d9c6a5;
}
.element--sc:hover {
  background-color: #d9c6a5;
}
.periodic-table__element:hover.element--sc {
  background-color: #d9c6a5;
}
.periodic-table__element:hover .compounds-id {
  display: block;
}
.periodic-table__element:hover .name {
  display: none;
}
.periodic-table__element:hover .flavours {
  display: block;
}
.element--pc .symbol {
  color: #f8bba6;
}
.element--pc:hover {
  background-color: #f8bba6;
}
.periodic-table__element:hover.element--pc {
  background-color: #f8bba6;
}
.periodic-table__element:hover .compounds-id {
  display: block;
}
.periodic-table__element:hover .name {
  display: none;
}
.periodic-table__element:hover .flavours {
  display: block;
}
.element--uc .symbol {
  color: #c5d3c4;
}
.element--uc:hover {
  background-color: #c5d3c4;
}
.periodic-table__element:hover.element--uc {
  background-color: #c5d3c4;
}
.periodic-table__element:hover {
  transition: 0.2s all ease-out;
  background-color: transparent;
}

.periodic-table__element.Ci { grid-area: Ci;}
.periodic-table__element.An { grid-area: An;}
.periodic-table__element.Lq { grid-area: Lq;}
.periodic-table__element.Va { grid-area: Va;}
.periodic-table__element.Li { grid-area: Li;}
.periodic-table__element.Le { grid-area: Le;}
.periodic-table__element.Pa { grid-area: Pa;}
.periodic-table__element.Se { grid-area: Se;}
.periodic-table__element.Si { grid-area: Si;}
.periodic-table__element.Ca { grid-area: Ca;}
.periodic-table__element.St { grid-area: St;}
.periodic-table__element.Mb { grid-area: Mb;}
.periodic-table__element.Cu { grid-area: Cu;}
.periodic-table__element.Lm { grid-area: Lm;}
.periodic-table__element.Ta { grid-area: Ta;}
.periodic-table__element.Wa { grid-area: Wa;}
.periodic-table__element.Pr { grid-area: Pr;}
.periodic-table__element.Gi { grid-area: Gi;}
.periodic-table__element.Cl { grid-area: Cl;}
.periodic-table__element.Fe { grid-area: Fe;}
.periodic-table__element.Mc { grid-area: Mc;}
.periodic-table__element.Ni { grid-area: Ni;}
.periodic-table__element.Am { grid-area: Am;}
.periodic-table__element.Su { grid-area: Su;}
.periodic-table__element.Ga { grid-area: Ga;}
.periodic-table__element.Pe { grid-area: Pe;}
.periodic-table__element.Ch { grid-area: Ch;}
.periodic-table__element.Al { grid-area: Al;}
.periodic-table__element.Cw { grid-area: Cw;}
.periodic-table__element.Ju { grid-area: Ju;}
.periodic-table__element.Sl { grid-area: Sl;}
.periodic-table__element.Ar { grid-area: Ar;}
.periodic-table__element.Cb { grid-area: Cb;}
.periodic-table__element.As { grid-area: As;}
.periodic-table__element.Sa { grid-area: Sa;}
.periodic-table__element.Po { grid-area: Po;}
.periodic-table__element.Nu { grid-area: Nu;}
.periodic-table__element.Di { grid-area: Di;}
.periodic-table__element.Ro { grid-area: Ro;}
.periodic-table__element.Bl { grid-area: Bl;}
.periodic-table__element.Ba { grid-area: Ba;}
.periodic-table__element.By { grid-area: By;}
.periodic-table__element.Cy { grid-area: Cy;}
.periodic-table__element.Fg { grid-area: Fg;}
.periodic-table__element.Aj { grid-area: Aj;}
.periodic-table__element.Ma { grid-area: Ma;}
.periodic-table__element.Ao { grid-area: Ao;}
.periodic-table__element.Co { grid-area: Co;}
.periodic-table__element.Cm { grid-area: Cm;}
.periodic-table__element.Gg { grid-area: Gg;}
.periodic-table__element.Cc { grid-area: Cc;}
.periodic-table__element.Mu { grid-area: Mu;}
.periodic-table__element.Tu { grid-area: Tu;}
.periodic-table__element.Ce { grid-area: Ce;}



.flavour_list {
  list-style-type: none ;
  margin: 2px 0;
  padding: 0px;
}

@media (max-width: 745px) {
  .periodic-table__element .name {
    display:none;
  }
}
</style>
