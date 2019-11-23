/*
 * Spices Script
 */
function main() {
    getJsonFile('https://deuh.github.io/data/spices.json');
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
                console.log('json', json);
                renderPeriodicTable(json.spices);;
            })
    } else {
        console.log('TODO: XMLHttpRequest');
    }
}

function renderPeriodicTable(data) {
    var app = document.querySelector('#periodic-table');
    for (var key in data) {
        var spice = data[key];
        var grid = 'grid-area: ' + spice.col + ' / ' + spice.row + ';';
        var el = generateElement(key, spice.id, spice.name, spice.compound_id, grid);
        app.appendChild(el);
    }
}

function generateElement(num, id, name, compound, grid) {
    var el = document.createElement('div');
    el.setAttribute('class', 'periodic-table__element periodic-table__element--' + compound + ' ' + id);
    el.setAttribute('style', grid);
    el.appendChild(createDiv('name', name));
    el.appendChild(createDiv('atomic-number', num));
    el.appendChild(createDiv('symbol', id));
    el.appendChild(createDiv('atomic-weight', compound));
    return el;
}

function createDiv(elclass, value) {
    var el = document.createElement('div');
    el.setAttribute('class', elclass);
    el.textContent = value;
    return el;
}

main();