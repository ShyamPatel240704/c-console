function btn1Click() {
    var a = txt1.value;
    var Sum = 0;
    for (let i = 1; i < parseInt(txt1.value); i++) {
        if (parseInt(txt1.value) % i == 0) {

            Sum += i;
        }
    }

    if (a == Sum) {
        lbl1.innerHTML = "Perfect No.";
    }

    else{
        lbl1.innerHTML = "Not Perfect No;"
    }

}