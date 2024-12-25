function btn1Click() {
    debugger;
    var a = txt1.value;
    var Sum = 0;
    var flag = 0;
    for (let i = 1; i < parseInt(txt1.value); i++) {
        if (parseInt(txt1.value) % i == 0) {
            flag = 1;
            Sum += i;
        }
    }

    if (flag == Sum) {
        lbl1.innerHTML = "Prime No.";
    }

    else{
        lbl1.innerHTML = "Not Prime No;"
    }

}