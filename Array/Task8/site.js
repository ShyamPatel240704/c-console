function btn1Click()
{
    debugger;
    var a = [];

    a[0] = parseInt(txt1.value);
    a[1] = parseInt(txt2.value);
    a[2] = parseInt(txt3.value);
    a[3] = parseInt(txt4.value);
    a[4] = parseInt(txt5.value);
    a[5] = parseInt(txt6.value);
    a[6] = parseInt(txt7.value);
    a[7] = parseInt(txt8.value);
    a[8] = parseInt(txt9.value);
    a[9] = parseInt(txt10.value);

    for(var i = 0; i < 10; i++)
    {
        if (a[i] != parseInt(txt11.value)) {
            lbl1.innerHTML += a[i];
        }
    }

}