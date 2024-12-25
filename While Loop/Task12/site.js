function btn1Click() {

    var a = parseInt(txt1.value);
    
    var Sum = 0;
    
    var i = 1;

    while (i < parseInt(txt1.value)) {
        if (parseInt(txt1.value) % i == 0) {
            
            Sum = Sum + i;
        }

        i++;
    }

   

    if (a == Sum) {
        lbl1.innerHTML = "Perfect No.";
    }

    else
    {
        lbl1.innerHTML = "Not Perfect No.";
    }
}