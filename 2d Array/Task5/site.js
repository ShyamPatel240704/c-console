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

    b[0][0] = a[0][0];
    b[0][1] = a[0][1];
    b[0][2] = a[0][2];

    b[1] = [];

    b[1][0] =  a[1][0];
    b[1][1] =  a[1][1];
    b[1][2] =  a[1][2];

    b[2] = [];

    b[2][0] =  a[2][0];
    b[2][1] =  a[2][1];
    b[2][2] =  a[2][2];


    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            lbl1.innerHTML += a[i][j];
        }
        lbl1.innerHTML += "<br>";
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            b[i][j] = a[j][i];
        }
        lbl1.innerHTML += "<br>";
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            lbl2.innerHTML += b[i][j];
        }
        lbl2.innerHTML += "<br>";
    }

    var F = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (a[i][j] != b[i][j]) {
                F = 1;
                break;
            }
        }
       
    }

    if (F == 0) {
        lbl3.innerHTML = "Matrix Is Symatrix.";
    }

    else
    {
        lbl3.innerHTML = "Matrix Is No Symatrix.";

    }
}