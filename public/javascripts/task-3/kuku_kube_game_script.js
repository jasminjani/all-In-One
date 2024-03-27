var scounter = 0;

document.addEventListener("click", function (e) {
    const target = e.target.closest("#target");

    if (target) {

        clicked();
        scounter += 1;
        document.getElementById("myspan").innerHTML = "<p> Score : " + scounter + "</p>";
    }
});


var timeLeft = 45;
var elem = document.getElementById('Timer');

var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        elem.innerHTML = "timeout";
        clearTimeout(timerId);
        document.getElementById("mytable").style.pointerEvents = "none";
        doSomething();
    } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}


function clicked() {

    addrow();
    addcol();
    getRandomColor();
    opacity();

}

function addrow() {
    var mytable = document.getElementById("mytable");
    var rowcount = mytable.rows.length;
    var colcount = mytable.rows[0].cells.length;

    let rows = mytable.insertRow(rowcount);
    for (let i = 0; i < colcount; i++) {
        let cell = rows.insertCell(i);
    }
}


function addcol() {

    mytable = document.getElementById("mytable");
    rowcount = mytable.rows.length;
    var onlyrow = mytable.rows;
    colcount = mytable.rows[0].cells.length;

    let newcell;
    for (let i = 0; i < rowcount; i++) {
        newcell = onlyrow[i].insertCell(colcount);
    }
}


function opacity() {
    rowcount = mytable.rows.length;
    let a = rowcount * rowcount;

    let r = Math.floor(Math.random() * a)

    document.getElementsByTagName("td")[r].style.opacity = "0.7";
    document.getElementsByTagName("td")[r].setAttribute('id', 'target');

    for (let i = 0; i < document.getElementsByTagName("td").length; i++) {
        if (i == r) {
            continue;
        }
        else {
            document.getElementsByTagName("td")[i].style.opacity = "1";
        }
    }

}



function getRandomColor() {

    let r = Math.floor(Math.random() * 255);
    let s = Math.floor(Math.random() * 255);
    let t = Math.floor(Math.random() * 255);
    let color = "rgb(" + r + "," + s + "," + t + ")";

    var x = document.getElementsByTagName("td");

    for (let i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = color;
    }
}
