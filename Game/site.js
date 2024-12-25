var Timer1 = undefined;
var Timer2 = undefined;

var size = 0;
var XPos;
var YPos;
var score = 0;
var Count = 0;
var Down = 0;
var key;
var LowScore = 0;
var vadharescore = 0;
var bubbleId;
var Local = 0;
var ABCD = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqstuvwxyz1234567890";
window.onload = function () {
    if (localStorage.getItem("HighestScores") != null) {
        HighestScore.innerHTML = localStorage.getItem("HighestScores");
        Local = localStorage.getItem("HighestScores");
    }
    // if (localStorage.getItem("Low") != null) {
    //     lbl6.innerHTML = LowScore;
    // }
}

function btn1Click() {
    Timer1 = setInterval(TimerFus, 1000);
    Timer2 = setInterval(Timer2Fus, 10);
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "inline-block";
    document.getElementById("btn3").style.display = "inline-block";
    document.getElementById("btn4").style.display = "inline-block";

    score = 0;

    var Len = ABCD.length;

}

function TimerFus() {
    var Len = Math.floor(Math.random() * ABCD.length);

    XPos = Math.floor((Math.random() * (window.innerWidth - 100)) + 100);
    YPos = Math.floor((Math.random() * (window.innerHeight - 100)) + 100);
    XPos = XPos - 100;
    YPos = YPos - 100;

    // lbl1.innerHTML = XPos;
    // lbl2.innerHTML = YPos;
    // lbl3.innerHTML = Len;

    // size = Math.floor(Math.random() * 1000);

    var bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.style.left = XPos + "px";
    bubble.style.bottom = 0 + "px";
    // bubble.style.top = YPos + "px";

    bubble.innerHTML = ABCD[Len];
    // lbl4.innerHTML = Down;
    document.getElementById("bubblecreat").appendChild(bubble);

    // clearInterval(Timer1);
    // Timer1 = undefined;
}
function BodyKeyPress(event) {
    key = event.key;
    bubbleId = document.querySelectorAll(".bubble");

    for (let i = 0; i < bubbleId.length; i++) {
        const singleBubble = bubbleId[i];

        if (singleBubble.innerHTML == key) {
            document.getElementById("bubblecreat").removeChild(singleBubble);
            score++;
            ScoreValue.innerHTML = score;
        }
        console.log(singleBubble);
    }


}
function Timer2Fus() {

    var Bubbeles = document.querySelectorAll(".bubble");
    // lbl4.innerHTML = Bubbeles.length;
    Down = window.innerHeight;

    for (let i = 0; i < Bubbeles.length; i++) {
        const SingleBBL = Bubbeles[i];
        var BBLBotPos = parseInt(SingleBBL.style.bottom);

        SingleBBL.style.bottom = (BBLBotPos + 1) + "px";

        if (BBLBotPos > Down) {
            document.getElementById("bubblecreat").removeChild(SingleBBL);
            Count++;
            // lbl5.innerHTML = Count;
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

            // var Pis = document.querySelectorAll(".bubble");
            // Pis[Count].classList.add("in");
            // if (Count != 0) {

            // }
            if (Count == 6) {
                alert("Game Over");


                // window.location.href = "index.html";




                document.getElementById("bubblecreat").innerHTML = "";
                document.getElementById("btn1").style.display = "block";
                Count = 0;
                if (Count == 0) {
                    document.getElementById("box1").style.backgroundColor = "thistle";

                    document.getElementById("box2").style.backgroundColor = "thistle";

                    document.getElementById("box3").style.backgroundColor = "thistle";

                    document.getElementById("box4").style.backgroundColor = "thistle";

                    document.getElementById("box5").style.backgroundColor = "thistle";
                }
                // document.getElementById("Mid").innerHTML = "";

                document.getElementById("btn2").style.display = "none";
                document.getElementById("btn3").style.display = "none";
                document.getElementById("btn4").style.display = "none";
                LastScore.innerHTML = ScoreValue.innerHTML;


                ScoreValue.innerHTML = 0;


                clearInterval(Timer1);
                clearInterval(Timer2);
                Timer1 = undefined;
                Timer2 = undefined;
            }

        }

    }


}
function btn2Click() {

    Timer1 = setInterval(TimerFus, 1000);
    Timer2 = setInterval(Timer2Fus, 10);
}
function btn3Click() {
    clearInterval(Timer1);
    clearInterval(Timer2);
    Timer1 = undefined;
    Timer2 = undefined;
}

function btn4Click() {
    // debugger;
    // window.location.href = "index.html";
    document.getElementById("bubblecreat").innerHTML = "";
    Count = 0;
    if (Count == 0) {
        document.getElementById("box1").style.backgroundColor = "thistle";

        document.getElementById("box2").style.backgroundColor = "thistle";

        document.getElementById("box3").style.backgroundColor = "thistle";

        document.getElementById("box4").style.backgroundColor = "thistle";

        document.getElementById("box5").style.backgroundColor = "thistle";
    }
    document.getElementById("btn1").style.display = "block";
    document.getElementById("btn2").style.display = "none";
    document.getElementById("btn3").style.display = "none";
    document.getElementById("btn4").style.display = "none";
    LastScore.innerHTML = ScoreValue.innerHTML;
    if (size == 0) {
        localStorage.setItem("Low", LastScore.innerHTML);
        // localStorage.setItem("Low",LowScore);
        LowScore = localStorage.getItem("Low");
        lbl6.innerHTML = LowScore;
    }
    if (LowScore > Local) {
        HighestScore.innerHTML = LastScore.innerHTML;
        localStorage.setItem("HighestScores",HighestScore.innerHTML);
        Local = localStorage.getItem("HighestScores");
        lbl7.innerHTML = Local;
    }


    ScoreValue.innerHTML = 0;
    clearInterval(Timer1);
    clearInterval(Timer2);
    Timer1 = undefined;
    Timer2 = undefined;

}





