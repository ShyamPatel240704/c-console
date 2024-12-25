// var  r = );
var Timer1 = undefined;

window.onload = function ()
{
    TimerFus()
    Timer1 = setInterval(TimerFus,100);
    // ColorNo = r.Next(100,999);
    
}
function TimerFus() {
//    Random  = new Random();
    ColorNo = Math.floor(Math.random()*(999999-100000)+100000);
document.getElementById("bodyId").style.backgroundColor="#"+ColorNo;
}

