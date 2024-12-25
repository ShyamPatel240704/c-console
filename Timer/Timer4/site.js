var Count = 0;
var Timer1 = undefined;

function btn1() {
    // debugger;
    Timer1 = setInterval(TimerFus,100);
}

function TimerFus() {
   
    // lbl2.innerHTML = ++Count;

    if (parseInt(lbl1.innerHTML) < 10) {
       
      lbl1.innerHTML = parseInt(lbl1.innerHTML) + 1;
      
    }
    else if (parseInt(lbl2.innerHTML) < 10) {
        lbl2.innerHTML = parseInt(lbl2.innerHTML) + 1;
        
    }

}