function btn1Click()
{

    var Sum = 0;
    var a = [];

    a[0] = txt1.value;
    a[1] = txt2.value;
    a[2] = txt3.value;
    a[3] = txt4.value;
    a[4] = txt5.value;

    for (var i = 0; i < 5; i++) {
        Sum = Sum + parseInt(a[i]);
        lbl1.innerHTML += a[i] + " ";

        if (i < 4) {
            lbl1.innerHTML += "+";
        }
    }

    lbl1.innerHTML += " = " + Sum; 

}