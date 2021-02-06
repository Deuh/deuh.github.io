<script>
    import Year from "./year.svelte";
    export let firstYear;
    export let lastYear;
    export let yearLength = 365;

    let dayLength = yearLength/12/30;
    let yearsData = [];
    for (var y=firstYear, age = 0; y<=lastYear+1; y++, age++){
        var days = (y % 4 == 0) ? 366 : 365;
        yearsData.push({
            id: y,
            yearWidth: (days*dayLength).toFixed(2),
            yearText: y,
            yearAge: age
        });
    }
    console.log('headerYears', yearsData);
</script>

<div id="life-years" class="comment_">
    {#each yearsData as data (data.id)}
        <Year {...data} />
    {/each}
</div>
