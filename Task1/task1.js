function btn1Cick() {

    // debugger;

    lbl11.innerHTML = parseInt(txt1.value) + parseInt(txt2.value) + parseInt(txt3.value) + parseInt(txt4.value) + parseInt(txt5.value);

    if (parseInt(txt1.value) < 35 || parseInt(txt2.value) || parseInt(txt3.value) || parseInt(txt4.value) || parseInt(txt5.value)) {

        var g1 = 0, g2 = 0, g3 = 0, g4 = 0, g5 = 0, Grace = 0;
        if (parseInt(txt1.value) < 35) {
            g1 = 35 - parseInt(txt1.value);

            lbl1.innerHTML = g1;
        }

        if (parseInt(txt2.value) < 35) {
            g2 = 35 - parseInt(txt2.value);

            lbl2.innerHTML = g2;
        }

        if (parseInt(txt3.value) < 35) {
            g3 = 35 - parseInt(txt3.value);

            lbl3.innerHTML = g3;
        }

        if (parseInt(txt4.value) < 35) {
            g4 = 35 - parseInt(txt4.value);

            lbl4.innerHTML = g4;
        }

        if (parseInt(txt5.value) < 35) {
            g5 = 35 - parseInt(txt5.value);

            lbl5.innerHTML = g5;
        }

        Grace = g1 + g2 + g3 + g4 + g5;

        if (Grace <= 8) {
            lbl21.innerHTML = "You are Pass With Grace."
        }

        else {
            lbl21.innerHTML = "Fail";
        }
    }

    else {
        Per.innerHTML = lbl11.innerHTML / 5;

        if (Per.innerHTML >= 70) {
            Grade.innerHTML = "A";
        }
        else if (Per.innerHTML >= 60) {
            Grade.innerHTML = " B";
        }

        else if (Per.innerHTML >= 50) {
            Grade.innerHTML = "C";
        }

        else if (Per.innerHTML >= 40) {
            Grade.innerHTML = " D";
        }

        else if (Per.innerHTML >= 35) {
            Grade.innerHTML = "E";
        }

        else if (Per.innerHTML < 35) {
            Grade.innerHTML = " F";
        }
    }
}