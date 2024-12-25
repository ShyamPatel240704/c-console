window.onload = function () {
    if (localStorage.getItem("Like") != null) {

        lbl1.innerHTML = localStorage.getItem("Like");
    }

}
function btn1Clicke() {
    // debugger;
    lbl1.innerHTML = parseInt(lbl1.innerHTML) + 1;
    var No = parseInt(lbl1.innerHTML);
    localStorage.setItem("Like", No);
}

function btn2Click() {
    var a = parseInt(lbl1.innerHTML);
    if (a > 0) {
        lbl1.innerHTML = parseInt(lbl1.innerHTML) - 1;
        var No = parseInt(lbl1.innerHTML);
        localStorage.setItem("Like", No);


    }

}