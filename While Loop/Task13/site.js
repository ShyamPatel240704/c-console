function btn1Click() {
    
    var Sum = 0 , Flag = 0;

    var i = 1;

    while (i < parseInt(txt1.value)) {
        if (parseInt(txt1.value) % i == 0) {
            Sum = Sum + i;
            Flag = 1;
        }

        i++;
    }

    if (Flag == Sum) {
        lbl1.innerHTML = "Prime No.";
        
    }

    else{
        lbl1.innerHTML = "Not Prime No.";
    }
}