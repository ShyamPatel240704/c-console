var Zero = 0;
var Pos = 0;
var Neg = 0;
var Odd = 0 ;
var Even = 0;

function btn1Click()
{
    debugger;

    var Sum = 0;
    var a = [];

    a[0] = txt1.value;
    a[1] = txt2.value;
    a[2] = txt3.value;
    a[3] = txt4.value;
    a[4] = txt5.value;



    for (var i = 0; i < 5; i++) {
       
        if (a[i] == 0) {
           Zero++;
        }

        if (a[i] > 0) {
         Pos++;   
        }

        if (a[i] < 0 ) {
            Neg++;
        }

        if (a[i] % 2 != 0) {
            Odd++;
        }

        if (a[i] % 2 == 0) {
            Even++;
        }
    }
    lbl1.innerHTML += "  " + Zero; 
    lbl2.innerHTML += "  " + Pos; 
    lbl3.innerHTML += "  " + Neg; 
    lbl4.innerHTML += "  " + Odd; 
    lbl5.innerHTML += "  " + Even; 
    
}



