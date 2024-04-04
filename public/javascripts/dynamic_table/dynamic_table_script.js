
function addrow() {
  try {
    let mytable = document.getElementById("mytable");
    let rowcount = mytable.rows.length;
    let colCount = mytable.rows[0].cells.length;
    let rows = mytable.insertRow(rowcount);
    for (let i = 0; i < colCount; i++) {
      let newcell = rows.insertCell(i);
    }

  } catch (e) { console.log(e); }
}

function deleterow() {
  try {
    let mytable = document.getElementById("mytable");
    let rowscount = mytable.rows.length;
    if (rowscount > 2) {
      let i = rowscount - 1;
      mytable.deleteRow(i);
    }
  } catch (e) { console.log(e); }
}

function addcolumn() {
  try {
    let mytable = document.getElementById("mytable");
    let colcount = mytable.rows[0].cells.length;
    let rowcount = mytable.rows

    let newcell;
    for (let i = 0; i < rowcount.length; i++) {
      newcell = rowcount[i].insertCell(colcount);
    }

  } catch (e) { console.log(e); }
}

function deletecolumn() {
  try {
    let mytable = document.getElementById("mytable");
    let rowcount = mytable.rows.length;
    let columns = mytable.rows[0].cells.length;

    if (columns > 2) {

      for (let i = 0; i < rowcount; i++) {
        mytable.rows[i].deleteCell(-1);
      }
    }

  } catch (e) { console.log(e); }
}