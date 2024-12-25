function btn1Click() {


    var i = 1;

    while (i <= 10) {

        var j = parseInt(txt1.value);
        while (j <= parseInt(txt2.value)) {

            lbl1.innerHTML += j + " * " + i + " = " + j * i +  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";


            j++;
        }

        lbl1.innerHTML +=  "<br>";

        i++;
    }


}