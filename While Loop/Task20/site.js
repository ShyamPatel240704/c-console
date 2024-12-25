function btn1Click() {
    debugger;

    var rem = 0, rev = 0;
    var i = 1;

    while (i < 1000) {
        var Temp = i;
        rem = 0, rev = 0;
        while (Temp != 0) {
            rem = parseInt(Temp % 10);

            rev = rev +  rem * rem * rem;

            Temp = parseInt(Temp / 10);

            

        }
        if (i == rev) {
            lbl1.innerHTML += i + " ";
        }
        i++;
    }
}