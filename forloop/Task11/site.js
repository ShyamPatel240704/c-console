function btn1Click()
{
    var a = 0 , b = 1 , c = 0;

    for(let i = 1; i <= parseInt(txt1.value); i++)
    {
         c = c + a;
         a = b;
         b = c;
        lbl1.innerHTML += c + " ";
    }
}