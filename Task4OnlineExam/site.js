function btn1Click() {
    // debugger;

    var Right = 0, Wrong = 0, Att = 0, UnAtt = 0;

    if (rdo11.checked == true) {
        Wrong++;
        Att++;
        
    }


    else if (rdo12.checked == true) {
        Right++;
        Att++;
    }


    else if (rdo13.checked == true) {
        Wrong++;
        Att++;
    }


    else if (rdo14.checked == true) {
        Wrong++;
        Att++;
    }

    else {
        UnAtt++;
    }


    // Q-2 Start

    if (rdo21.checked == true) {
        Right++;
        Att++;
    }


    else if (rdo22.checked == true) {
        Wrong++;
        Att++;
    }


    else if (rdo23.checked == true) {
        Wrong++;
        Att++;
    }


    else if (rdo24.checked == true) {
        Wrong++;
        Att++;
    }

    else {
        UnAtt++;
    }

    // Q-3 Start

    if (rdo31.checked == true) {
        Wrong++;
        Att++;
    }


    else if (rdo32.checked == true) {
        Wrong++;
        Att++;
    }


    else if (rdo33.checked == true) {
        Right++;
        Att++;
    }


    else if (rdo34.checked == true) {
        Wrong++;
        Att++;
    }

    else {
        UnAtt++;
    }


    
    // Q-4 Start

    if (rdo41.checked == true) {
        Wrong++;
        Att++;
    }


    else if (rdo42.checked == true) {
        Wrong++;
        Att++;
    }


    else if (rdo43.checked == true) {
        Wrong++;
        Att++;
    }


    else if (rdo44.checked == true) {
        Right++;
        Att++;
    }

    else {
        UnAtt++;
    }

    lbl1.innerHTML = Right;
    lbl2.innerHTML = Wrong;
    lbl3.innerHTML = Att;
    lbl4.innerHTML = UnAtt;
}