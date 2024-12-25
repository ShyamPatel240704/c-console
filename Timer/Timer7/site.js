var Count = 0;
var Color = ["Red","Blue","Black","Yellow"];
// Color[0] = "Red";
// Color[1] = "Black";

// Color[2] = "Yellow";
// Color[3] = "Blue";

var Timer1 = undefined;

window.onload = function () {
    
    Timer1 = setInterval(TimerFus, 1000);
}

function TimerFus() {
   
    document.getElementById("bodyId").style.backgroundColor = '' + Color[++Count];


    if (Count == 4) {
        Count = 0;
    }
}
