function btn1Click()
{
    debugger;

    
    var i = parseInt(txt1.value);

    while (i <= parseInt(txt2.value)) {
        lbl1.innerHTML += i + " ";

        i++;
    }
}