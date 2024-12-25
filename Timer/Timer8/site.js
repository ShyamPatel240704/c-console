var Count = 0;
var Timer1 =undefined; 

var Img = [];
Img[0] = "1.jpg";
Img[1] = "2.jpg";
Img[2] = "7.jpg";

window.onload = function () {
    Timer1 = setInterval(TimerFus,1000);
}

function TimerFus() {
    document.getElementById("bodyId").style.backgroundImage="URL('"+Img[++Count]+"')";
    if (Count == 3) {
        Count = 0;
        Timer1 = undefined;
    }
}
