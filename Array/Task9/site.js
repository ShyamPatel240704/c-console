function btn1Click()
{
    debugger;
    var a = [];
    var b = [];

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

    var k = 0;
    for(var i = 0; i < 10; i++)
    {
        var flag = 0;
        for(var j = 0; j <= k; j++)
        {
            if (a[i] == b[j]) {
                flag = 1;
                break;
            }
        }

        if (flag == 0) {
            b[k] = a[i];
            k++;
        }
    }

    for(var i = 0; i < k; i++)
    {
        lbl1.innerHTML += b[i];
    }

}