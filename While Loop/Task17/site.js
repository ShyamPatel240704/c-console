function btn1Click() {
    debugger;

    var a = parseInt(txt1.value);

    var Temp = a;
    var rem = 0, rev = 0;

    while (a != 0) {
        rem = parseInt(a % 10);

        rev = rev  + rem * rem * rem;

        a = parseInt(a / 10);

        lbl1.innerHTML = rev;

    }

    if (lbl1.innerHTML == Temp) {
        lbl1.innerHTML += "Armstrong No.";
    }

    else
    {
        lbl1.innerHTML += "Not Armstrong No.";
    }

}