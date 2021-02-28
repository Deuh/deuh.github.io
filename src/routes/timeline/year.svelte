<script>
  export let yearWidth = 365;
  export let yearText;
  export let yearAge;
  export let id;
</script>

<div id="year--{id}" class="year" style="width: {yearWidth}px">
  <span>{yearText} <i>({yearAge})</i></span>
</div>
