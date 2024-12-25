var Count = 10;
var Timer1 = undefined;

function btn1() {
    Timer1 = setInterval(timerfuc,100);
}
function timerfuc() {
    lbl1.innerHTML = --Count;
    if (lbl1.innerHTML == 0) {
        clearInterval(Timer1);
        Timer1 = undefined;
    }
}