function btn1Click()
{
    var Sum = 0;

    var i = 1;

    while (i <= parseInt(txt1.value)) {
        
        lbl1.innerHTML += i;
        
        if (i < parseInt(txt1.value)) {
            lbl1.innerHTML += "+";
        }

        Sum = Sum + i;

        i++;
    }

    lbl1.innerHTML += " = " + Sum;
}