function btn1Click()
{
    var Sum = 0;
    for(let i = 1; i <= parseInt(txt1.value); i++)
    {
        lbl1.innerHTML += i ;
        if (i < parseInt(txt1.value)) {
            lbl1.innerHTML += "+";
        } 

        Sum += i;
    }

    lbl1.innerHTML += "=" + Sum; 
}