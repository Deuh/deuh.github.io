<script>
  import EventRow from "./eventRow.svelte";
  export let eventsData = [];
  export let firstYear;

  var lastYear = firstYear;
  eventsData.forEach(function (d) {
    var time = d.time;
    var startYear = time.startYear;
    var endYear = time.endYear;
    if (startYear && startYear < firstYear) firstYear = startYear;
    if (endYear && endYear > lastYear) lastYear = endYear;
  });

  $: console.log("eventRows", firstYear, eventsData, );
</script>

{#each eventsData as data (data.id)}
  <EventRow {firstYear} event={data} />
{/each}