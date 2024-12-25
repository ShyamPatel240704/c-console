var Timer1 = undefined;

function Start(params) {
    Timer1 = setInterval(TimerFus, 1000);
}

function TimerFus() {
    if (parseInt(lbl3.innerHTML) < 60) {
        lbl3.innerHTML = parseInt(lbl3.innerHTML) + 1;
    }

    else if (parseInt(lbl3.innerHTML) == 60 && parseInt(lbl2.innerHTML) < 60) {
        lbl3.innerHTML = 0;

        lbl2.innerHTML = parseInt(lbl2.innerHTML) + 1;

    }

    else if (parseInt(lbl3.innerHTML) == 60 && parseInt(lbl2.innerHTML) == 60 && parseInt(lbl1.innerHTML) < 24) {
        lbl3.innerHTML = 0;
        lbl2.innerHTML = 0;
            lbl1.innerHTML = parseInt(lbl1.innerHTML) + 1;
        
    }


}

function Stop() {
    clearInterval(Timer1);
    Timer1 = undefined;
}

function Reset() {
    lbl1.innerHTML = "00";
    lbl2.innerHTML = "00";
    lbl3.innerHTML = "00"; 
    clearInterval(Timer1);
    Timer1 = undefined;
}

function Lap() {
    lbl4.innerHTML = lbl1.innerHTML + " : " + lbl2.innerHTML + " : " + lbl3.innerHTML + "<br>" + lbl4.innerHTML; 
}