function btn1Click() {
    debugger;

    var a = parseInt(txt1.value);

    var Temp = a;
    var rem = 0, rev = 0;

    while (a != 0) {
        rem = parseInt(a % 10);

        rev = rev * 10 + rem;

        a = parseInt(a / 10);

        lbl1.innerHTML += rem;

    }

    if (lbl1.innerHTML == Temp) {
        lbl1.innerHTML += "Palindrom No.";
    }

    else
    {
        lbl1.innerHTML += "Not Palindrom No.";
    }

}