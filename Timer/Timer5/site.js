var Count = 0;
var Timer1 = undefined;

function btn1() {
    // debugger;
    Timer1 = setInterval(TimerFus,100);
}

function TimerFus() {
    if (parseInt(lbl1.innerHTML) < 10) {
        lbl1.innerHTML = parseInt(lbl1.innerHTML) + 1;
    }

    else if (parseInt(lbl1.innerHTML) == 10) {
        lbl1.innerHTML = 0;
        if (parseInt(lbl1.innerHTML) < 10) {
            lbl1.innerHTML = parseInt(lbl1.innerHTML) + 1;
        }
    }
}