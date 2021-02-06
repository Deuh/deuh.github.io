<script>    
/*function getCellSize() {
  var baseWidth = parseInt($('#grid-size').css('width').split('px')[0]);
  var baseHeight = parseInt($('#grid-size').css('height').split('px')[0]);
  
  var padding = parseInt($('.wrapper').css('grid-gap'));
  return [ baseWidth+padding, baseHeight+padding ];
}

function getGridLocation( cell, x, y ){
  
  var gridX = Math.floor( x / cell[0] );
  var gridY = Math.floor( y / cell[1] );
  
  return [ gridX, gridY ];
}

console.log(getCellSize());

var cellSize = [0,0];
var mouseOffset = [0,0];
$('#drag').draggable({
  start: function( event, ui ) {
    cellSize = getCellSize();
    // Save the mouse offset
    // mouseOffset = [ event.offsetX, event.offsetY ];
    mouseOffset = [$('#grid-size')[0].getBoundingClientRect().left, $('#grid-size')[0].getBoundingClientRect().top ]

  },
  drag: function( event, ui ) {
    var location = getGridLocation(cellSize, ui.offset.left - mouseOffset[0] + (cellSize[0]/2), ui.offset.top - mouseOffset[1] + (cellSize[1]/2));
    
    // console.log( ui.position, ui.offset, location );
    
    $('#hover').css('grid-row', (location[1] + 1) + " / span 1");
    $('#hover').css('grid-column', (location[0] + 1) + " / span 1");
    
    // $('#view').css('top', ui.offset.top - mouseOffset[1] );
    // $('#view').css('left', ui.offset.left - mouseOffset[0] );
    // $('#view').css('top', event.screenY );
    // $('#view').css('left', event.screenX );
    // Will cause you to drag where the cursor is
    // ui.position.left = ui.offset.left - mouseOffset[0];
    // ui.position.top = ui.offset.top - mouseOffset[1];
  },
  stop: function( event, ui ) {
    var location = getGridLocation(cellSize, ui.offset.left - mouseOffset[0] + (cellSize[0]/2), ui.offset.top - mouseOffset[1] + (cellSize[1]/2));
    
    console.log(location);
    
    $('#drag').css('grid-row', (location[1] + 1) + " / span 1");
    $('#drag').css('grid-column', (location[0] + 1) + " / span 1");

    $('#drag').css('top', '0px').css('left', '0px');
  }
});*/
</script>
<div class="wrapper">
    <div id="grid-size"></div>
  <!--   <div id="view"></div> -->
    <div id="hover"></div>
    <div id="drag"></div>
  </div>

<style>
html, body {
  width: 100%;
  height: 100%;
  margin: 0px;
  overflow: hidden;
}

.wrapper {
  background-color: lightgrey;
  width: 90%;
  height: 90%;
  margin: 10px auto;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid #444;
 
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(auto-fill, 30px);
  grid-gap: 5px;
}

.wrapper div {
  position: relative;
}

#grid-size {
/*   background-color: red; */
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
}

#view {
  background-color: red;
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
}

#hover {
  border: 2px dashed #555;
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  z-index: 500;
}

#drag {
  background-color: green;
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  z-index: 1000;
}



</style>