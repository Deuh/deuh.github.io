/*
 * Spices Script
 */
const el_periodicTable = document.getElementById('periodic-table');
let json_spices;
let json_compounds;

function main() {
    var json = getJsonFile('https://deuh.github.io/spices/data/spices.json');
    // select display mode
    document.getElementById('display_periodic').onclick = function() {
        el_periodicTable.classList.add('grid_order-periodic');
        el_periodicTable.classList.remove('grid_order-compounds');
    }
    document.getElementById('display_compound').onclick = function() {
        el_periodicTable.classList.add('grid_order-compounds');
        el_periodicTable.classList.remove('grid_order-periodic');
    }
}

function getJsonFile(src) {
    if (window.fetch) {
        fetch(src)
            .then(response => {
                if (!response.ok) {
                    console.log("HTTP error " + response.status);
                }
                return response.json();
            })
            .then(json => {
                json_spices = json.spices;
                json_compounds = json.compounds;

                renderPeriodicTable(json.spices, json.compounds);
                renderCompoundsTags(json.compounds);
            })
    } else {
        console.log('TODO: XMLHttpRequest');
    }
}

function renderPeriodicTable(data, compounds) {
    var app = document.querySelector('#periodic-table');
    for (var key in data) {
        var spice = data[key];
        var grid = 'grid-area: ' + spice.col + ' / ' + spice.row + ';';
        grid = '';
        var el = generateElement(key, spice.id, spice.name, spice.compound_id, spice.flavours, grid);
        app.appendChild(el);
    }
}

function generateElement(num, id, name, compound, flavours, grid) {
    var el = document.createElement('div');
    el.setAttribute('class', 'periodic-table__element periodic-table__element--' + compound + ' ' + id);
    //el.setAttribute('style', grid);
    el.appendChild(createDiv('name', name));
    el.appendChild(createDiv('compounds-id', compound));
    el.appendChild(createDiv('symbol', id));
    el.appendChild(createDiv('flavours', flavours.join(', ')));
    return el;
}

function createDiv(elclass, value) {
    var el = document.createElement('div');
    el.setAttribute('class', elclass);
    el.textContent = value;
    return el;
}

function generateTag(id, name) {
    var el = document.createElement('div');
    el.setAttribute('class', 'compoundTag compoundTag-' + id);
    el.appendChild(createDiv('id', id));
    el.appendChild(createDiv('name', name));
    el.onclick = function() {
        console.log('click on ' + name);
        el.classList.toggle('active');
        el_periodicTable.classList.toggle('active--'+id);
    } 
    return el;
}

function renderCompoundsTags(data){
    var app = document.querySelector('#periodic-table').parentNode;
    for (var key in data) {
        var el = generateTag(data[key].id, data[key].name);
        app.appendChild(el);
    }
}
main();