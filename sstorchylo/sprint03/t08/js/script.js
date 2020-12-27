'use strict';

let data = ['Name', 'Strength', 'Age',
            "Black Panther", '66', '53',
            'Captain America', '79', '137',
            'Captain Marvel', '97', '26',
            'Hulk', '80', '49',
            'Iron Man', '88', '48',
            'Spider-Man', '78', '16',
            'Thanos', '99', '1000',
            'Thor', '95', '1000',
            'Yon-Rogg', '73', '52'];

document.getElementById('placeholder').innerHTML = '';

let x = 3;
let y = 10;

function populateTable(table, rows, cells, content) {
    if (!table) table = document.createElement('table');
    let count = 0;
    for (var i = 0; i < rows; ++i) {
        var row = document.createElement('tr');
        for (var j = 0; j < cells; ++j) {
            row.appendChild(document.createElement('td'));
            row.cells[j].setAttribute('id', count);
            row.cells[j].appendChild(document.createTextNode(content[count++]));
            if( i<=2 && i >=0)row.cells[j].setAttribute('onclick', `tableSort(${j})`);
        }
        table.appendChild(row);
    }
    table.setAttribute('id', 'table');
    return table;
}
document.getElementById('placeholder').appendChild( populateTable(null, y, x, data) );

function tableSort(n) {
    let tbl, rows, switching, shouldSwitch, i, r1, r2, dir, switchCount = 0;
  
    tbl = document.getElementById('table');
    switching = true;
    dir = 'asc';
    while (switching) {
      switching = false;
      rows = tbl.rows;
      for (i = 1; i < (rows.length - 1); ++i) {
        shouldSwitch = false;
        r1 = rows[i].getElementsByTagName('td')[n];
        r2 = rows[i + 1].getElementsByTagName('td')[n];
        if (dir === 'asc') {
          if (r1.innerHTML.toLowerCase() > r2.innerHTML.toLowerCase()) {
            shouldSwitch= true;
            break;
          }
        } else if (dir == 'desc') {
          if (r1.innerHTML.toLowerCase() < r2.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchCount ++;
      } else if (switchCount === 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
    showMessage(n, dir);
  }
  
  function showMessage(n, dir) {
    let msg, name;
  
    msg = document.getElementById('notification');
    name = document.getElementById(n).innerHTML;
    msg.innerHTML = `Sorting by ${name}, order: ${dir.toUpperCase()}`;
  }