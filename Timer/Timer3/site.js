var Count = 0;
var No = 0;
var Timer1 = undefined;
var Timer2 = undefined;

function btn1() {
    // if (lbl1.innerHTML > 0) {
    Timer1 = setInterval(Timerfus, 100);
    // }
    // else if (lbl1.innerHTML == 10) {
        Timer2 =setInterval(Timer2fus,100);
    // }
}

function Timerfus() {
    lbl1.innerHTML = ++Count;

    if (lbl1.innerHTML == 10) {
        // if (lbl1.innerHTML == 10) {

        // }
        clearInterval(Timer1);
        Timer1 = undefined;
    }

}
function Timer2fus() {
   if (lbl1.innerHTML == 10) {
    lbl2.innerHTML = ++No;

    if (lbl2.innerHTML == 10) {
        // if (lbl1.innerHTML == 10) {

        // }
        clearInterval(Timer2);
        Timer2 = undefined;
    }
   }

}