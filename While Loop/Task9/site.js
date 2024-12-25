function  btn1Click()
{
    var i = 1;

while (i <= parseInt(txt1.value)) {
    if (i % 2 != 0) {
        lbl1.innerHTML += i + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    }

    else if (i % 2 == 0) {
        lbl1.innerHTML += i + "<br>";
    }


    i++;
}
}
