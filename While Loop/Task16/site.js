function btn1Click() {
    debugger;

    var a = parseInt(txt1.value);

    var Temp = a;
    var rem = 0, rev = 0;

    while (a != 0) {
        rem = parseInt(a % 10);

        rev = rev  + rem;

        a = parseInt(a / 10);

        lbl1.innerHTML = rev;

    }

    if (Temp % lbl1.innerHTML == 0) {
        lbl1.innerHTML += "Nevin No.";
    }

    else
    {
        lbl1.innerHTML += "Not Nevin No.";
    }

}