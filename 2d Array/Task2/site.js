function btn1Click()
{
    debugger;
    var a = [];

    a[0] = [];

    a[0][0] = parseInt(txt1.value);
    a[0][1] = parseInt(txt2.value);
    a[0][2] = parseInt(txt3.value);

    a[1] = [];

    a[1][0] = parseInt(txt4.value);
    a[1][1] = parseInt(txt5.value);
    a[1][2] = parseInt(txt6.value);

    a[2] = [];

    a[2][0] = parseInt(txt7.value);
    a[2][1] = parseInt(txt8.value);
    a[2][2] = parseInt(txt9.value);

   
    // var Temp;
    // for(var i = 0; i < 3; i++)
    // {
    //     for(var j = i + 1; j < 3; j++)
    //     {
            
    //     }

    //     // lbl1.innerHTML += "<br>";
    // }


    for(var i = 0; i < 3; i++)
        {
            for(var j = 0; j < 3; j++)
            {
                lbl1.innerHTML += a[j][i] + " ";
            }
    
            lbl1.innerHTML += "<br>";
        }
    
}