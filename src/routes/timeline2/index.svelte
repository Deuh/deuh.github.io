<script>
	import Year from './year.svelte';
	import EventRows from './eventRows.svelte';

	$: textAreaValue = `
- 20/10/2019 Season 1
- 2020-10/2020 Season 2
- 19/12/2020 Pre-Settle C.
- 08/01/2021 Pre-Settle A.
- 2020 = event that happen in that year
- 05/2020 = event that happen in that month/year
- 01/07/2020 = event that happen exactly in that day/month/year
- 2020-2021, 10/2020-02/03/2021 = event that happens within the two dates
- ~2021  = event that happen around the time in that year
- 2021-~ = event that happen from that year and beyond (now).`;
	
	$: life = {
		hashCode: function(str) {
			var hash = 0, i, chr;
			for (i = 0; i < str.length; i++) {
				chr   = str.charCodeAt(i);
				hash  = ((hash << 5) - hash) + chr;
				hash |= 0; // Convert to 32bit integer
			}
			return hash;
		},
		idExist(arr, id) {
			return arr.some(function(el) {
				return el.id === id;
			}); 
		},
		parse: function(response){
			var list = response.match(/\-\s+[^\n\r]+/ig);
			var data = [];
			if (list != null && list.length) {
				list.forEach(function(l){
					var matches = l.match(/\-\s+([\d\/\-\~]+)\s(.*)/i);
					if (matches != null && matches.length){
						var time = matches[1];
						var text = matches[2];
						let hashId = life.hashCode(JSON.stringify({time, text}));
						if (!life.idExist(data, hashId)) {
							data.push({
							id: hashId,
							time: life.parseTime(time),
							text: text
						});
						} else {
							console.log('❌ Skipped duplicate');
						}
					}
				});
			}
			return data;
		},
		parseTitle: function(response){
			return response.match(/[^\r\n]+/i)[0];
		},
		parseTime: function(time, point){
			if (!point) point = 'start';
			var data = {};
			if (/^\~\d+$/.test(time)){ // ~YYYY
				data = {
					startYear: parseInt(time.slice(1), 10),
					estimate: true
				};
			} else if (/^\d+$/.test(time)){ // YYYY
				data[point + 'Year'] = parseInt(time, 10);
			} else if (/^\d+\/\d+$/.test(time)){ // MM/YYYY
				var t = time.split('/');
				data[point + 'Month'] = parseInt(t[0], 10);
				data[point + 'Year'] = parseInt(t[1], 10);
			} else if (/^\d+\/\d+\/\d+$/.test(time)){ // DD/MM/YYYY
				var t = time.split('/');
				data[point + 'Date'] = parseInt(t[0], 10);
				data[point + 'Month'] = parseInt(t[1], 10);
				data[point + 'Year'] = parseInt(t[2], 10);
			} else if (/\d\-/.test(time)){ // TIME-TIME
				var splitTime = time.split('-');
				var startTime = life.parseTime(splitTime[0]);
				var endTime = life.parseTime(splitTime[1], 'end');
				for (var k in startTime) { data[k] = startTime[k] }
				for (var k in endTime) { data[k] = endTime[k] }
			} else if (time == '~'){ // NOW
				var now = new Date();
				data.endYear = now.getFullYear();
				data.endMonth = now.getMonth()+1;
				data.endDate = now.getDate();
			}
			data.title = time;
			return data;
		},
		getFirstYear: function(events) {
			return Math.min.apply(Math, events.map(function(o) { return o.time.startYear; }));
		},
		getLastYear: function(events) {
			var thisYear = new Date().getFullYear();
			return Math.max.apply(Math, events.map(function(o) {
				return o.time.endYear||thisYear;
			}));
		},
		getYearsList(firstYear, lastYear) {
			let yearLength = 365;

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
			console.log(yearsData);
			return yearsData;
			
		}
	};
	$: eventsData = life.parse(textAreaValue);
	$: firstYear = life.getFirstYear(eventsData);
	$: lastYear = life.getLastYear(eventsData);
	$: yearsList = life.getYearsList(firstYear, lastYear);

	$:console.log('index', eventsData, firstYear, lastYear);
</script>

<textarea id="dataSource" bind:value={textAreaValue}></textarea>

<div class="live">
	<div class="life-container">
		<div id="life">
			<div id="life-events">
				<div id="life-years" class="comment_">
					{#each yearsList as data (data.id)}
						<Year {...data} />
					{/each}
				</div>
			<EventRows firstYear={firstYear} eventsData={eventsData}/>
			</div>
		</div>
	</div>
</div>

<style>
	
	
:root {
    --navBarColor: #2d2d2d;
    --backgroundColor: #151515;
    --navBarLightColor: #595959;
    --textInButtonPadding: 1.2rem;
    --textColor: #32c848;
    --textHoverColor: #fc625c;
}
#dataSource {
		width: 100%;
		min-height: 120px;
		resize: vertical;
		background-color: var(--backgroundColor);
    	color: var( --textColor);
}
	  :global(h1){
        display: inline;
        font-size: 20px;
        line-height: 1em;
        opacity: .5;
        z-index: 3;
        font-weight: 300;
        white-space: nowrap;
    }
    #life{
        position: relative;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        cursor: -webkit-grab;
        cursor: -moz-grab;
        cursor: grab;
    }
    :global(#life-years){
        position: absolute;
        top: 0;
        bottom: 0;
        white-space: nowrap;
        pointer-events: none;
    }
    :global(#life-years .year){
        display: inline-block;
        box-sizing: border-box;
        color: var(--textHoverColor);
        font-weight: 300;
        white-space: nowrap;
        box-sizing: border-box;
        height: 100%;
        border-left: 1px dashed rgba(255,255,255,.2);
    }
    :global(#life-years .year:first-child){
        border-left: 0;
    }
    :global(#life-years .year span){
        background: var(--navBarColor);
        display: block;
        padding: 10px;
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 3;
    }
    :global(#life-years .year span i){
        opacity: .5;
        font-style: normal;
    }
    :global(#life-events){
        padding-top: 40px;
        padding-bottom: 5em;
        position: relative;
    }
    :global(#life-events:after){
        content: '';
        display: block;
        clear: left;
    }
    :global(#life .event){
        padding-right: 20px;
        padding-bottom: 5px;
        vertical-align: middle;
        white-space: nowrap;
        float: left;
        clear: left;
    }
    :global(#life .event b){
        font-weight: normal;
        color: rgba(255,255,255,.5);
    }
    :global(#life .event .time){
        display: inline-block;
        overflow: hidden;
        height: 0;
        border: 4px solid var(--textColor);
        border-radius: 4px;
        margin-right: 10px;
        opacity: .3;
        position: relative;
        left: -2px;
    }
    :global(#life .event:hover .time){
        border-color: var(--textHoverColor);
        opacity: .5;
    }
    :global(#life .event .date) {
        color: var(--navBarLightColor);
    }
    :global(#life .event:hover .date) {
        color: #fff;
    }
</style>

