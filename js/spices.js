let spiceList = {
    1: { num: "1", id: "Ci", name: "Cinnamon", compound: "swp", row: "1", col: "1" },
    2: { num: "2", id: "Ca", name: "Cassia", compound: "swp", row: "1", col: "2" },
    3: { num: "3", id: "Cl", name: "Clove", compound: "swp", row: "1", col: "3" },
    4: { num: "4", id: "Al", name: "Allspice", compound: "swp", row: "1", col: "4" },
    5: { num: "5", id: "Nu", name: "Nutmeg", compound: "wt", row: "1", col: "5" },
    6: { num: "6", id: "Ma", name: "Mace", compound: "wt", row: "1", col: "6" },
    7: { num: "7", id: "An", name: "Anise", compound: "swp", row: "2", col: "1" },
    8: { num: "8", id: "St", name: "Star Anise", compound: "swp", row: "2", col: "2" },
    9: { num: "9", id: "Fe", name: "Fennel", compound: "swp", row: "2", col: "3" },
    10: { num: "10", id: "Cw", name: "Caraway", compound: "wt", row: "2", col: "4" },
    11: { num: "11", id: "Di", name: "Dill", compound: "wt", row: "2", col: "5" },
    12: { num: "12", id: "Ao", name: "Annatto", compound: "wt", row: "2", col: "6" },
    13: { num: "13", id: "Lq", name: "Liquorice", compound: "swp", row: "3", col: "1" },
    14: { num: "14", id: "Mb", name: "Mahleb", compound: "swp", row: "3", col: "2" },
    15: { num: "15", id: "Mc", name: "Mastic", compound: "ft", row: "3", col: "3" },
    16: { num: "16", id: "Ju", name: "Juniper", compound: "ft", row: "3", col: "4" },
    17: { num: "17", id: "Ro", name: "Rose", compound: "ft", row: "3", col: "5" },
    18: { num: "18", id: "Co", name: "Coriander", compound: "ft", row: "3", col: "6" },
    19: { num: "19", id: "Va", name: "Vanilla", compound: "swp", row: "4", col: "1" },
    20: { num: "20", id: "Cu", name: "Cumin", compound: "et", row: "4", col: "2" },
    21: { num: "21", id: "Ni", name: "Nigella", compound: "et", row: "4", col: "3" },
    22: { num: "22", id: "Sl", name: "Grain of Selim", compound: "pt", row: "4", col: "4" },
    23: { num: "23", id: "Bl", name: "Black Cardamon", compound: "pt", row: "4", col: "5" },
    24: { num: "24", id: "Cm", name: "Cardamon", compound: "pt", row: "4", col: "6" },
    25: { num: "25", id: "Li", name: "Dried Lime", compound: "ct", row: "5", col: "1" },
    26: { num: "26", id: "Lm", name: "Lemon Myrtle", compound: "ct", row: "5", col: "2" },
    27: { num: "27", id: "Am", name: "Amchoor", compound: "ssa", row: "5", col: "3" },
    28: { num: "28", id: "Ar", name: "Anardana", compound: "ssa", row: "5", col: "4" },
    29: { num: "29", id: "Ba", name: "Bay", compound: "pt", row: "5", col: "5" },
    30: { num: "30", id: "Gg", name: "Galangal", compound: "pt", row: "5", col: "6" },
    31: { num: "31", id: "Le", name: "Lemon grass", compound: "ct", row: "6", col: "1" },
    32: { num: "32", id: "Ta", name: "Tamarind", compound: "ssa", row: "6", col: "2" },
    33: { num: "33", id: "Su", name: "Sumac", compound: "ssa", row: "6", col: "3" },
    34: { num: "34", id: "Cb", name: "Carob", compound: "ssa", row: "6", col: "4" },
    35: { num: "35", id: "By", name: "Barberry", compound: "fa", row: "6", col: "5" },
    36: { num: "36", id: "Cc", name: "Cacao", compound: "fa", row: "6", col: "6" },
    37: { num: "37", id: "Pa", name: "Paprika", compound: "tp", row: "7", col: "1" },
    38: { num: "38", id: "Wa", name: "Wattle", compound: "tp", row: "7", col: "2" },
    39: { num: "39", id: "Ga", name: "Garlic", compound: "sc", row: "7", col: "3" },
    40: { num: "40", id: "As", name: "Asafoetida", compound: "sc", row: "7", col: "4" },
    41: { num: "41", id: "Cy", name: "Curry Leaf", compound: "sc", row: "7", col: "5" },
    42: { num: "42", id: "Mu", name: "Mustard", compound: "sc", row: "7", col: "6" },
    43: { num: "43", id: "Se", name: "Sesame", compound: "tp", row: "8", col: "1" },
    44: { num: "44", id: "Pr", name: "Grains of paradise", compound: "pc", row: "8", col: "2" },
    45: { num: "45", id: "Pe", name: "Black pepper", compound: "pc", row: "8", col: "3" },
    46: { num: "46", id: "Sa", name: "Saffron", compound: "uc", row: "8", col: "4" },
    47: { num: "47", id: "Fg", name: "Fenugreek", compound: "uc", row: "8", col: "5" },
    48: { num: "48", id: "Tu", name: "Turmeric", compound: "uc", row: "8", col: "6" },
    49: { num: "49", id: "Si", name: "Sichuan pepper", compound: "pc", row: "9", col: "1" },
    50: { num: "50", id: "Gi", name: "Ginger", compound: "pc", row: "9", col: "2" },
    51: { num: "51", id: "Ch", name: "Chilli", compound: "pc", row: "9", col: "3" },
    52: { num: "52", id: "Po", name: "Poppy", compound: "uc", row: "9", col: "4" },
    53: { num: "53", id: "Aj", name: "Ajwain", compound: "uc", row: "9", col: "5" },
    54: { num: "54", id: "Ce", name: "Celery Seed", compound: "uc", row: "9", col: "6" }
}

/*
 * Spices Script
 */
function main() {
    var app = document.querySelector('#periodic-table');
    for (var key in spiceList) {
        var spice = spiceList[key];
        var grid = 'grid-area: ' + spice.col + ' / ' + spice.row + ';';
        var el = generateElement(key, spice.id, spice.name, spice.compound, grid);
        app.appendChild(el);
    }
}

function createDiv(elclass, value) {
    var el = document.createElement('div');
    el.setAttribute('class', elclass);
    el.textContent = value;
    return el;
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


main();