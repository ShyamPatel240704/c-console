function btn1Click() {

    debugger;
    
    var a = txt1.value;
    for (let i = 1; i <= a; i++) {
        if (i % 2 != 0) {
            lbl1.innerHTML += i + " ";

        }
    }

    for (let j = 1; j <= a; j++) {
        if (j % 2 == 0) {
            lbl2.innerHTML += j + " ";

        }
    }


}