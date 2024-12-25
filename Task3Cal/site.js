var Total = 0;

function btn1Click()
{
    Total = parseInt(txt1.value) + parseInt(txt2.value);

    lbl1.innerHTML = Total;
}

function btn2Click()
{
    Total = parseInt(txt1.value) - parseInt(txt2.value);

    lbl1.innerHTML = Total;
}

function btn3Click()
{
    Total = parseInt(txt1.value) * parseInt(txt2.value);

    lbl1.innerHTML = Total;
}

function btn4Click()
{
    Total = parseInt(txt1.value) / parseInt(txt2.value);

    lbl1.innerHTML = Total;
}