function btn1Click() {
    
    var a = [];

    a[0] = txt1.value;
    a[1] = txt2.value;
    a[2] = txt3.value;
    a[3] = txt4.value;
    a[4] = txt5.value;
    a[5] = txt6.value;

    var temp = 0;

    for (var i = 0; i < 6; i+=2 ) {
        
        temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
    }

    for(var i = 0; i < 6; i++)
    {
        lbl1.innerHTML += a[i] + " ";
    }

}