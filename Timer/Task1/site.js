var Count = 0;
var Timer1 = undefined;
// window.onload = function () {
    
// }

function btn1() {
    Timer1 = setInterval(timerfuc,100);
}

function timerfuc() {
    lbl1.innerHTML = ++Count;
    if (Count == 10) {
        clearInterval(Timer1);
        Timer1 = undefined;
    }
}