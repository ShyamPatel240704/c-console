var Timer1 = undefined;
var Timer2 = undefined;
var Xpos = 0;
var Ypos = 0;
var DisplayHeight = 0;
var BubbleId;
var ABCD = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
var key;
var Count = 0;
var ScoreCount = 0;
// var TimerCount = 0;


window.onload = function () {
    // debugger;

    //   var  Len = ABCD.length;

    ScoreValue.innerHTML = 0;

    if (localStorage.getItem("LowScore") != null) {
        LastScoreValue.innerHTML = localStorage.getItem("LowScore");
        lbl3.innerHTML = localStorage.getItem("LowScore");
    }

    if (localStorage.getItem("HeighScoreValueLocal") != null) {
        HeighScore.innerHTML = localStorage.getItem("HeighScoreValueLocal");
    }
    if (localStorage.getItem("HeighScoreValueLocal") != null) {
        lbl4.innerHTML = localStorage.getItem("HeighScoreValueLocal");
    }
}

function btn1Click() {
    Timer1 = setInterval(Timer1Fus, 1000);
    Timer2 = setInterval(Timer2Fus, 10);
    document.getElementById("btn1").style.display = "none";

    document.getElementById("btn2").style.display = "inline-block";
    document.getElementById("btn3").style.display = "inline-block";
    document.getElementById("btn4").style.display = "inline-block";


}

function Timer1Fus() {

    // GameStart.innerHTML = TimerCount++;


    var Len = Math.floor(Math.random() * ABCD.length);

    Xpos = Math.floor((Math.random() * (innerWidth - 100)) + 100);
    Ypos = Math.floor((Math.random() * (innerHeight - 100)) + 100);

    Xpos = Xpos - 100;
    Ypos = Ypos - 100;


    // lbl1.innerHTML = Xpos;
    // lbl2.innerHTML = Ypos;

    var Bubblediv = document.createElement("div");
    Bubblediv.classList.add("BubbleCircle");

    Bubblediv.style.left = Xpos + "px";
    Bubblediv.style.bottom = 0 + "px";

    Bubblediv.innerHTML = ABCD[Len];

    document.getElementById("Circle").appendChild(Bubblediv);
}

function removeBubble(event) {

    key = event.key;
    BubbleId = document.querySelectorAll(".BubbleCircle");
    for (let i = 0; i < BubbleId.length; i++) {
        const singleBubbleRemove = BubbleId[i];

        if (singleBubbleRemove.innerHTML == key) {
            // debugger;
            document.getElementById("Circle").removeChild(singleBubbleRemove);

            ScoreCount++;

            ScoreValue.innerHTML = ScoreCount;

        }
        console.log(singleBubbleRemove);
    }
}

function Timer2Fus() {
    var Bubble = document.querySelectorAll(".BubbleCircle");

    DisplayHeight = window.innerHeight;

    for (let i = 0; i < Bubble.length; i++) {
        const SingleBubble = Bubble[i];

        var BubblePos = parseInt(SingleBubble.style.bottom);

        SingleBubble.style.bottom = (BubblePos + 1) + "px";

        if (BubblePos > DisplayHeight) {

            document.getElementById("Circle").removeChild(SingleBubble);

            Count++;

            if (Count == 1) {
                document.getElementById("box1").style.backgroundColor = "Red";
            }
            if (Count == 2) {
                document.getElementById("box2").style.backgroundColor = "Red";
            }
            if (Count == 3) {
                document.getElementById("box3").style.backgroundColor = "Red";
            }
            if (Count == 4) {
                document.getElementById("box4").style.backgroundColor = "Red";
            }
            if (Count == 5) {
                document.getElementById("box5").style.backgroundColor = "Red";
            }
            if (Count == 6) {
                alert("Game Over");
                clearInterval(Timer1);
                clearInterval(Timer2);
                document.getElementById("Circle").innerHTML = "";
                document.getElementById("btn1").style.display = "inline-block";

                document.getElementById("btn2").style.display = "none";
                document.getElementById("btn3").style.display = "none";
                document.getElementById("btn4").style.display = "none";

                ScoreCount = 0;


                LastScoreValue.innerHTML = ScoreValue.innerHTML;

                localStorage.setItem("LowScore", LastScoreValue.innerHTML);
                lbl3.innerHTML = localStorage.getItem("LowScore");

                localStorage.setItem("HeighScoreValueLocal",lbl4.innerHTML);
                lbl4.innerHTML = localStorage.getItem("HeighScoreValueLocal");

                if (parseInt(lbl4.innerHTML) < parseInt(lbl3.innerHTML)) {
                    localStorage.setItem("HeighScoreValueLocal",lbl4.innerHTML);
                    lbl4.innerHTML = localStorage.getItem("HeighScoreValueLocal");
                    lbl4.innerHTML = LastScoreValue.innerHTML;
                }

                localStorage.setItem("HeighScoreValueLocal",lbl4.innerHTML);
                lbl4.innerHTML = localStorage.getItem("HeighScoreValueLocal");

                if (parseInt(lbl4.innerHTML) < parseInt(lbl3.innerHTML)) {
                    lbl4.innerHTML = LastScoreValue.innerHTML;
                    localStorage.setItem("HeighScoreValueLocal",lbl4.innerHTML);
                    lbl4.innerHTML = localStorage.getItem("HeighScoreValueLocal");
                }


                localStorage.setItem("HeighScoreValueLocal", HeighScore.innerHTML);
                HeighScore.innerHTML = localStorage.getItem("HeighScoreValueLocal");

                if (parseInt(HeighScore.innerHTML) < parseInt(LastScoreValue.innerHTML)) {
                    HeighScore.innerHTML = LastScoreValue.innerHTML;
                    localStorage.setItem("HeighScoreValueLocal", HeighScore.innerHTML);
                    HeighScore.innerHTML = localStorage.getItem("HeighScoreValueLocal");
                }


                // GameStart.innerHTML = TimerCount++;
                ScoreValue.innerHTML = 0;


            }

        }
    }
}

function btn2Click() {
    clearInterval(Timer1);
    clearInterval(Timer2);

    Timer1 = undefined;
    Timer2 = undefined;

}
function btn3Click() {
    Timer1 = setInterval(Timer1Fus, 10000);
    Timer2 = setInterval(Timer2Fus, 100);
}

function btn4Click() {
    debugger;
    document.getElementById("Circle").innerHTML = "";
    document.getElementById("btn1").style.display = "inline-block";

    document.getElementById("btn2").style.display = "none";
    document.getElementById("btn3").style.display = "none";
    document.getElementById("btn4").style.display = "none";


    LastScoreValue.innerHTML = ScoreValue.innerHTML;

    clearInterval(Timer1);
    clearInterval(Timer2);

    Timer1 = undefined;
    Timer2 = undefined;
    ScoreCount = 0;
    ScoreValue.innerHTML = "0";

    localStorage.setItem("LowScore", LastScoreValue.innerHTML);
    lbl3.innerHTML = localStorage.getItem("LowScore");


    localStorage.setItem("HeighScoreValueLocal", lbl4.innerHTML);
    lbl4.innerHTML = localStorage.getItem("HeighScoreValueLocal");

    if (parseInt(lbl4.innerHTML) < parseInt(lbl3.innerHTML)) {
        lbl4.innerHTML = LastScoreValue.innerHTML;
        localStorage.setItem("HeighScoreValueLocal", lbl4.innerHTML);
        lbl4.innerHTML = localStorage.getItem("HeighScoreValueLocal");
    }


    localStorage.setItem("HeighScoreValueLocal", HeighScore.innerHTML);
    HeighScore.innerHTML = localStorage.getItem("HeighScoreValueLocal");

    if (parseInt(HeighScore.innerHTML) < parseInt(LastScoreValue.innerHTML)) {
        HeighScore.innerHTML = LastScoreValue.innerHTML;
        localStorage.setItem("HeighScoreValueLocal", HeighScore.innerHTML);
        HeighScore.innerHTML = localStorage.getItem("HeighScoreValueLocal");
    }


    // GameStart.innerHTML = TimerCount++;



}