<script>

    export let firstYear;
	export let event = {
        text: "Season 1",
            time: {
            endDate: 9,
            endMonth: 9,
            endYear: 2015,
            startDate: 26,
            startMonth: 9,
            startYear: 1985,
            title: "default"
        }  
    };
    

    let yearLength = 365;
    let monthLength = yearLength/12;
    let dayLength = monthLength/30;

    let time = event.time;
    let startYear = time.startYear;
    let startMonth = time.startMonth;
    let startDate = time.startDate;
    let endYear = time.endYear;
    let endMonth = time.endMonth;
    let endDate = time.endDate;
    let width = 0;

    // Calculate offset
    let startTime = new Date(firstYear, 0, 1);
    let endTime = new Date(startYear, startMonth ? startMonth-1 : 0, startDate || 1);
    let daysDiff = (endTime - startTime)/(24*60*60*1000);
    let offset = daysDiff*dayLength;

    // Calculate width
    if (endYear){
        let _endMonth = endMonth ? endMonth-1 : 11;
        let _endDate = endDate || new Date(endYear, _endMonth+1, 0).getDate();
        startTime = new Date(startYear, startMonth ? startMonth-1 : 0, startDate || 1);
        endTime = new Date(endYear, _endMonth, _endDate);
        daysDiff = (endTime - startTime)/(24*60*60*1000);
        width = daysDiff*dayLength;
    } else {
        if (startDate){
            width = dayLength;
        } else if (startMonth){
            width = monthLength;
        } else {
            width = yearLength;
        }
    }

    $:console.log('eventRow', event.text, offset, width);
</script>

<div id="event--{event.id}" class="event" style="margin-left: {offset.toFixed(2)}px">
  <div class="time" style="width: {width.toFixed(2)}px" />
  <div class="date">{event.time.title + ' ' + event.text}</div>
</div>
