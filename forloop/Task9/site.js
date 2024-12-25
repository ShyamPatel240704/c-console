function btn1Click()
{
    
    for(let i = 1; i <= parseInt(txt1.value); i++)
    {
        if (i % 2 != 0) {
            lbl1.innerHTML += i + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        }
        else if (i % 2 == 0) {
            lbl1.innerHTML += i + "<br>";
        }
    }

   
}