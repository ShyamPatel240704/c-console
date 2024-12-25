function btn1Click() {
    

    var a = [];

    a[0] = txt1.value;
    a[1] = txt2.value;
    a[2] = txt3.value;
    a[3] = txt4.value;
    a[4] = txt5.value;

    var Max = 0;
    var Min = a[0];

    for (var i = 0; i < 5; i++) {
        if (Max < a[i]) {
            Max = a[i];
        }

        if (Min > a[i]) {
            Min = a[i];
        }
    }

    lbl1.innerHTML += Max;
    lbl2.innerHTML += Min;

}