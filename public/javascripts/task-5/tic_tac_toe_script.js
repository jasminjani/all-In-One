var count = 0;
var turn = document.getElementById("turn").innerHTML = "X's turn";

function clicked(resultid) {

    var id = resultid;

    if (id.innerHTML == "X" || id.innerHTML == "O") {
        alert("Choose another place ");
    }
    else {

        if (count % 2 == 0) {
            id.innerHTML = "X";
            turn = document.getElementById("turn").innerHTML = "O's turn";
        }
        else {
            id.innerHTML = "O";
            turn = document.getElementById("turn").innerHTML = "X's turn";
        }
        count++;
    }

    if ((document.getElementById("one").innerHTML == "X" && document.getElementById("two").innerHTML == "X" && document.getElementById("three").innerHTML == "X") ||
        (document.getElementById("four").innerHTML == "X" && document.getElementById("five").innerHTML == "X" && document.getElementById("six").innerHTML == "X") ||
        (document.getElementById("seven").innerHTML == "X" && document.getElementById("eight").innerHTML == "X" && document.getElementById("nine").innerHTML == "X") ||
        (document.getElementById("one").innerHTML == "X" && document.getElementById("four").innerHTML == "X" && document.getElementById("seven").innerHTML == "X") ||
        (document.getElementById("two").innerHTML == "X" && document.getElementById("five").innerHTML == "X" && document.getElementById("eight").innerHTML == "X") ||
        (document.getElementById("three").innerHTML == "X" && document.getElementById("six").innerHTML == "X" && document.getElementById("nine").innerHTML == "X") ||
        (document.getElementById("one").innerHTML == "X" && document.getElementById("five").innerHTML == "X" && document.getElementById("nine").innerHTML == "X") ||
        (document.getElementById("three").innerHTML == "X" && document.getElementById("five").innerHTML == "X" && document.getElementById("seven").innerHTML == "X")
    ) {
        alert("X wins the game");
        document.getElementById("mytable").style.pointerEvents = "none";
        turn = document.getElementById("turn").innerHTML = "X wins";

    }
    else if ((document.getElementById("one").innerHTML == "O" && document.getElementById("two").innerHTML == "O" && document.getElementById("three").innerHTML == "O") ||
        (document.getElementById("four").innerHTML == "O" && document.getElementById("five").innerHTML == "O" && document.getElementById("six").innerHTML == "O") ||
        (document.getElementById("seven").innerHTML == "O" && document.getElementById("eight").innerHTML == "O" && document.getElementById("nine").innerHTML == "O") ||
        (document.getElementById("one").innerHTML == "O" && document.getElementById("four").innerHTML == "O" && document.getElementById("seven").innerHTML == "O") ||
        (document.getElementById("two").innerHTML == "O" && document.getElementById("five").innerHTML == "O" && document.getElementById("eight").innerHTML == "O") ||
        (document.getElementById("three").innerHTML == "O" && document.getElementById("six").innerHTML == "O" && document.getElementById("nine").innerHTML == "O") ||
        (document.getElementById("one").innerHTML == "O" && document.getElementById("five").innerHTML == "O" && document.getElementById("nine").innerHTML == "O") ||
        (document.getElementById("three").innerHTML == "O" && document.getElementById("five").innerHTML == "O" && document.getElementById("seven").innerHTML == "O")
    ) {
        alert("O wins the game");
        document.getElementById("mytable").style.pointerEvents = "none";
        turn = document.getElementById("turn").innerHTML = "O wins";
    }
    else if (count == 9) {
        alert("draw game");
        document.getElementById("mytable").style.pointerEvents = "none";
        turn = document.getElementById("turn").innerHTML = "Game draw";
    }
}