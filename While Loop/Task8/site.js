function btn1Click()
{
    var i = 1;

    while (i <= parseInt(txt1.value)) {
        if (i % 2 != 0) {
            lbl1.innerHTML += i + " ";
        }

        i++;
    }

    var j = 1;

    while (j <= parseInt(txt1.value)) {
        if (j % 2 == 0) {
            lbl2.innerHTML += j + " ";
        }

        j++;
    }
}