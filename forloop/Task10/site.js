function btn1Click() {
    var Sum = 0;
    for (let i = 1; i <= parseInt(txt1.value); i++) {
        lbl1.innerHTML += "1/" + i  ;

        if (i < parseInt(txt1.value)) {
            lbl1.innerHTML += " + ";
        }

        Sum += 1/i;
    }

    lbl1.innerHTML += " = " + Sum;
}