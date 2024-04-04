let scounter = 0;


let timeLeft = 45;
let elem = document.getElementById('Timer');

let timerId = setInterval(countdown, 1000);

function countdown() {
  try {
    if (timeLeft == -1) {
      elem.innerHTML = "timeout";
      clearTimeout(timerId);
      document.getElementById("mytable").style.pointerEvents = "none";
      alert("score is : " + scounter)
    } else {
      elem.innerHTML = timeLeft + ' seconds remaining';
      timeLeft--;
    }
  } catch (e) { console.log(e); }
}


function clicked() {
  try {

    document.getElementById("target").removeAttribute("onclick")
    document.getElementById("target").removeAttribute("id")
    scounter += 1;
    document.getElementById("myspan").innerHTML = "<p> Score : " + scounter + "</p>";
    addrow();
    addcol();
    getRandomColor();
    opacity();

  } catch (e) { console.log(e); }
}

function addrow() {
  try {
    let mytable = document.getElementById("mytable");
    let rowcount = mytable.rows.length;
    let colcount = mytable.rows[0].cells.length;

    let rows = mytable.insertRow(rowcount);
    for (let i = 0; i < colcount; i++) {
      let cell = rows.insertCell(i);
    }
  } catch (e) { console.log(e); }
}


function addcol() {
  try {

    mytable = document.getElementById("mytable");
    rowcount = mytable.rows.length;
    let onlyrow = mytable.rows;
    colcount = mytable.rows[0].cells.length;

    let newcell;
    for (let i = 0; i < rowcount; i++) {
      newcell = onlyrow[i].insertCell(colcount);
    }
  } catch (e) { console.log(e); }
}


function opacity() {
  try {
    rowcount = mytable.rows.length;
    let a = rowcount * rowcount;

    let r = Math.floor(Math.random() * a)

    document.getElementsByTagName("td")[r].style.opacity = "0.7";
    document.getElementsByTagName("td")[r].setAttribute('id', 'target');
    document.getElementById("target").setAttribute("onclick", "clicked()")

    for (let i = 0; i < document.getElementsByTagName("td").length; i++) {
      if (i == r) {
        continue;
      }
      else {
        document.getElementsByTagName("td")[i].style.opacity = "1";
      }
    }
  } catch (e) { console.log(e); }
}



function getRandomColor() {
  try {

    let r = Math.floor(Math.random() * 255);
    let s = Math.floor(Math.random() * 255);
    let t = Math.floor(Math.random() * 255);
    let color = "rgb(" + r + "," + s + "," + t + ")";

    let x = document.getElementsByTagName("td");

    for (let i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = color;
    }
  } catch (e) { console.log(e); }
}
