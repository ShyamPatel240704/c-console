var Timer1 = undefined;
var Timer2 = undefined;
var Count = 1;
var SecondCount = 20;

window.onload = function () {

}



function btn1Click() {
    Timer1 = setInterval(TimerFus, 1000);
    Timer2 = setInterval(Timer2Fus, 1000);


    document.getElementById("box3").style.display = "block";

   
        lbl1.innerHTML = SecondCount * Count;
        Count = Count * 2;

        lbl3.innerHTML = 0;
  


    if (parseInt(lbl3.innerHTML) == 0) {
        document.getElementById("box2").style.display = "none";


    }

}
function TimerFus() {
    // lbl3.innerHTML = ++Count;
    if (parseInt(lbl1.innerHTML) > 0) {
        lbl1.innerHTML = parseInt(lbl1.innerHTML) - 1;

    }
    if (parseInt(lbl1.innerHTML) == 0) {
        clearInterval(Timer1);
        Timer1 = undefined;
    }
}

function Timer2Fus() {

    if (parseInt(lbl1.innerHTML) == 0 && parseInt(lbl3.innerHTML) < 10) {
        lbl3.innerHTML = parseInt(lbl3.innerHTML) + 1;
    }

    if (parseInt(lbl1.innerHTML) == 0 && parseInt(lbl3.innerHTML) <= 10) {
        document.getElementById("box2").style.display = "block";
        document.getElementById("box3").style.display = "none";
    }

    if (parseInt(lbl3.innerHTML) == 10) {
        // lbl3.
        document.getElementById("box2").style.display = "none";
        Timer2 = undefined;
    }

    // else
    // {
    //     lbl3.innerHTML = 0;

    // }


}