function btn1Click()
{

    for(let i = 1; i <= 10; i++)
    {
        for(let j = parseInt(txt1.value); j <= parseInt(txt2.value); j++)
            {
               lbl1.innerHTML += j + " * " + i + " = " +  j * i + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"; 
            }
            lbl1.innerHTML +=  "<br>";
    }

   
}