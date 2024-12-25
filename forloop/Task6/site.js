function btn1Click()
{
    
    for(let i = 1; i <= 10; i++)
    {
        lbl1.innerHTML += parseInt(txt1.value) + " * " + i + " = " + parseInt(txt1.value) * i + "<br>";    
    }

    
}