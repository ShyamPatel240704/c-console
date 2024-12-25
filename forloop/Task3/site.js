function btn1Click()
{
    for(let i = parseInt(txt1.value); i <= parseInt(txt2.value); i++)
    {
        lbl1.innerHTML += i + "&nbsp;&nbsp;&nbsp;"; 
    }
}