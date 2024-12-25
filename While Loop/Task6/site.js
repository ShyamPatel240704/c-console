function btn1Click()
{
   

    var i = 1;

    while (i <= 10) {
        
        lbl1.innerHTML += parseInt(txt1.value) + " * " + i + " = " + parseInt(txt1.value) * i + "<br>" ;
        
        i++;
    }

    
}