// var RegList = [];

// var ArrayObj =
// {
//     Value: Piston
// };
// RegList.push(ArrayObj);
// console.log(RegList);
// window.onload = function () {
//     setInterval(MoveBox,1000);
// }
// var i = 0;
// function MoveBox()
// {
//     if (i <= 6) {
//         var Pistons = document.querySelectorAll(".piston")
//         Pistons[i].classList.add("in");
//         console.log(i);
//         if (i != 0) {
//             Pistons[i - 1].classList.remove("in");

//         } else if (i == 0) {

//             Pistons[6].classList.remove("in");

//         }
//         i++;

//     } else {
//         i = 0;
//     }
// }




var timer1;
var count = 0;
window.onload = function () {
    timer1 = setInterval(MovePiston, 1000);
}

function MovePiston() {

    var Piston = document.querySelectorAll(".piston-list > .piston");
    Piston[count].classList.add("in");
    if (count != 0) {
        Piston[count - 1].classList.remove("in");
    } else if (count == 0) {
        Piston[Piston.length - 1].classList.remove("in");
    }

    count++;
    if (count >= Piston.length) {
        count = 0;
    }
    // console.log(count);
}