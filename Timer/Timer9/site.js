var Count = 0;
var Timer1 = undefined;

window.onload = function () {
    Timer1 = setInterval(TimerFus, 1000);
    // if (condition) {

    // }

    if (localStorage.getItem("Value") != null) {
        if (confirm("Are You Recover Your Data?") == true) {
            txt1.value = localStorage.getItem("Value");

            // document.getElementById("box2").style.display = "block";

        }

        else if (confirm("Are You Recover Your Data?") == false) {
            localStorage.removeItem("Value");

            // document.getElementById("box1").style.display = "none";
        }



    }
}

function TimerFus() {


    if (parseInt(lbl2timer.innerHTML) >= 0) {
        lbl2timer.innerHTML = ++Count;
    }

    if (txt1.value != "") {
        localStorage.setItem("Value", txt1.value);
    }


}

function btn1Click() {
    if (localStorage.getItem("Value") != null) {
        document.getElementById("box1").style.display = "block";
        document.getElementById("box2").style.display = "none";

    }
}
// function btn2Click() {
//     // debugger;
//     if (confirm("Are You Recover Your Data?") == false) {
//         localStorage.removeItem("Value");
//         txt1.value = "";
//         // document.getElementById("box1").style.display = "block";
//         // document.getElementById("box2").style.display = "none";
//         clearInterval(Timer1);
//         Timer1 = undefined;

//     }
// }