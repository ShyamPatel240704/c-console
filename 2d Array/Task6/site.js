function btn1Click() {

    debugger;
    
    var a = [];

    a[0] = [];

    a[0][0] = txt1.value;
    a[0][1] = txt2.value;
    a[0][2] = txt3.value;

    a[1] = [];

    a[1][0] = txt4.value;
    a[1][1] = txt5.value;
    a[1][2] = txt6.value;

    a[2] = [];

    a[2][0] = txt7.value;
    a[2][1] = txt8.value;
    a[2][2] = txt9.value;

    var b = [];

    b[0] = [];

    b[0][0] = txt11.value;
    b[0][1] = txt12.value;
    b[0][2] = txt13.value;

    b[1] = [];

    b[1][0] =  txt14.value;
    b[1][1] =  txt15.value;
    b[1][2] =  txt16.value;

    b[2] = [];

    b[2][0] =  txt17.value;
    b[2][1] =  txt18.value;
    b[2][2] =  txt19.value;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            lbl1.innerHTML += a[i][j];
        }
        lbl1.innerHTML += "<br>";
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            lbl2.innerHTML += b[i][j];
        }
        lbl2.innerHTML += "<br>";
    }

    var Sum = 0;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            Sum = parseInt(a[i][j]) + parseInt(b[i][j]);
            lbl3.innerHTML += Sum + " ";
        }
        lbl3.innerHTML += "<br>";
    }
    
}