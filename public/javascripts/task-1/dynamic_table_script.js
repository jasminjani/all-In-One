
function addrow() {
    let mytable = document.getElementById("mytable");
    let rowcount = mytable.rows.length;
    let colCount = mytable.rows[0].cells.length;
    let rows = mytable.insertRow(rowcount);
    for (let i = 0; i < colCount; i++) {
        let newcell = rows.insertCell(i);

        // let newcell = document.getElementById("mytable").insertRow(document.getElementById("mytable").rows.length).insertCell(i);
    }
    // let c1 = r.insertCell();
    // let c2 = r.insertCell();
    // c1.appendChild(rows);  
}

function deleterow() {
    let mytable = document.getElementById("mytable");
    let rowscount = mytable.rows.length;
    if (rowscount > 2) {
        let i = rowscount - 1;
        mytable.deleteRow(i);
    }
}

function addcolumn() {
    let mytable = document.getElementById("mytable");
    let colcount = mytable.rows[0].cells.length;
    // let rowcount = mytable.rows.length;
    let rowcount = mytable.rows

    // let columns = mytable.insertColumn(colcount);
    let newcell;
    for (let i = 0; i < rowcount.length; i++) {
        newcell = rowcount[i].insertCell(colcount);

        //  newcell = columns.insertCell(i);
    }

}

function deletecolumn() {
    let mytable = document.getElementById("mytable");
    let rowcount = mytable.rows.length;
    let columns = mytable.rows[0].cells.length;

    // let index = 2;
    if (columns > 2) {

        for (var i = 0; i < rowcount; i++) {
            mytable.rows[i].deleteCell(-1);
        }
    }

    // if (columns > 2) {
    //     mytable.deleteCell(columns - 1);
    //     mytable.rows[i].deleteCell()
    //     table.rows[i].deleteCell(temp2-1);
    // }
}