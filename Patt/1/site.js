function btn1Click() {

    for (var row = 1; row <= 4; row++) {
        for (var col = 1; col <= 4; col++) {
            lbl1.innerHTML += " * ";
        }
        lbl1.innerHTML += " <br> ";

    }
}

function btn2Click() {

    for (var row = 1; row <= 4; row++) {
        for (var col = 1; col <= 4; col++) {
            lbl1.innerHTML += row * col + " ";
        }
        lbl1.innerHTML += " <br> ";

    }
}


function btn3Click() {

    for (var row = 4; row >= 1; row--) {
        for (var col = 1; col <= 4; col++) {
            lbl1.innerHTML += row * col + " ";
        }
        lbl1.innerHTML += " <br> ";

    }
}

function btn4Click() {

    for (var row = 1; row <= 4; row++) {
        for (var col = 1; col <= row; col++) {
            lbl1.innerHTML += row * col + " ";
        }
        lbl1.innerHTML += " <br> ";

    }
}

function btn5Click() {
    var a = 1;
    for (var row = 1; row <= 4; row++) {
        for (var col = 1; col <= row; col++) {
            lbl1.innerHTML += a + " ";
            a++;
        }
        lbl1.innerHTML += " <br> ";

    }
}

function btn6Click() {

    for (var row = 1; row <= 4; row++) {
        for (var col = 4; col >= row; col--) {
            lbl1.innerHTML += " * ";

        }
        lbl1.innerHTML += " <br> ";

    }
}

function btn7Click() {

    for (var row = 1; row <= 4; row++) {
        for (var col = 4; col >= row; col--) {
            lbl1.innerHTML += row + "  ";

        }
        lbl1.innerHTML += " <br> ";

    }
}

function btn8Click() {

    for (var row = 1; row <= 4; row++) {
        for (var col = 1; col <= 5 - row; col++) {
            lbl1.innerHTML += row * col + "  ";

        }
        lbl1.innerHTML += " <br> ";

    }
}

function btn9Click() {

    for (var row = 4; row >= 1; row--) {
        for (var col = row; col >= 1; col--) {
            lbl1.innerHTML += col + "  ";

        }
        lbl1.innerHTML += " <br> ";

    }
}


function btn10Click() {

    for (var row = 1; row <= 4; row++) {
        for (var col = row; col <= 4; col++) {
            lbl1.innerHTML += col + "  ";

        }
        lbl1.innerHTML += " <br> ";

    }
}

function btn11Click() {

    for (var row = 1; row <= 4; row++) {
        for (var spc = 1; spc <= 5 - row; spc++) {
            lbl1.innerHTML += "&nbsp;&nbsp;&nbsp;";
        }
        for (var col = 1; col <= row; col++) {
            lbl1.innerHTML += row + "  ";

        }
        lbl1.innerHTML += " <br> ";

    }
}

function btn12Click() {

    for (var row = 4; row >= 1; row--) {
        for (var spc = 1; spc <= row; spc++) {
            lbl1.innerHTML += "&nbsp;&nbsp;&nbsp;";
        }
        for (var col = row; col <= 4; col++) {
            lbl1.innerHTML += col + "  ";

        }
        lbl1.innerHTML += " <br> ";

    }
}

function btn13Click() {

    for (var row = 1; row <= 4; row++) {
        for (var spc = 1; spc <= row; spc++) {
            lbl1.innerHTML += "&nbsp;&nbsp;&nbsp;";
        }
        for (var col = row; col <= 4; col++) {
            lbl1.innerHTML += col + "  ";

        }
        lbl1.innerHTML += " <br> ";

    }
}

function btn14Click() {

    for (var row = 4; row >= 1; row--) {
        for (var spc = row; spc < 4; spc++) {
            lbl1.innerHTML += "&nbsp;&nbsp;&nbsp;";
        }
        for (var col = 1; col <= row; col++) {
            lbl1.innerHTML += row + "  ";

        }
        lbl1.innerHTML += " <br> ";

    }
}

function btn15Click() {

    for (var row = 4; row >= 1; row--) {
        for (var spc = row; spc < 4; spc++) {
            lbl1.innerHTML += "&nbsp;&nbsp;&nbsp;";
        }
        for (var col = 1; col <= row; col++) {
            lbl1.innerHTML += col + "  ";

        }
        lbl1.innerHTML += " <br> ";

    }
}


function btn16Click() {

    var a = 1;
    for (var row = 1; row <= 4; row++) {
        for (var spc = 1; spc <= row; spc++) {
            lbl1.innerHTML += "&nbsp;&nbsp;&nbsp;";
        }
        for (var col = row; col <= 4; col++) {
            lbl1.innerHTML += a + "  ";
            a++;
        }
        lbl1.innerHTML += " <br> ";

    }
}

function btn17Click() {


    for (var row = 1; row <= 4; row++) {
        for (var spc = 1; spc < 5 - row; spc++) {
            lbl1.innerHTML += "&nbsp;&nbsp;";
        }
        for (var col = 1; col <= row; col++) {
            lbl1.innerHTML += row + "&nbsp;  ";
        }
        lbl1.innerHTML += " <br> ";

    }
}

function btn18Click() {


    for (var row = 4; row >= 1; row--) {
        for (var spc = row; spc < 4; spc++) {
            lbl1.innerHTML += "&nbsp;&nbsp;";
        }
        for (var col = 1; col <= row; col++) {
            lbl1.innerHTML += row + "&nbsp;  ";
        }
        lbl1.innerHTML += " <br> ";

    }
}

function btn19Click() {


    for (var row = 4; row >= 1; row--) {
        for (var spc = row; spc < 4; spc++) {
            lbl1.innerHTML += "&nbsp;&nbsp;";
        }
        for (var col = 1; col <= row; col++) {
            lbl1.innerHTML += col + "&nbsp;  ";
        }
        lbl1.innerHTML += " <br> ";

    }
}

function btn20Click() {

    for (var row = 1; row <= 4; row++) {
        for (var spc = 1; spc < 5 - row; spc++) {
            lbl1.innerHTML += "&nbsp;&nbsp;";
        }
        for (var col = 1; col <= row; col++) {
            lbl1.innerHTML += " * &nbsp;  ";
        }
        lbl1.innerHTML += " <br> ";

    }

    for (var row = 3; row >= 1; row--) {
        for (var spc = row; spc < 4; spc++) {
            lbl1.innerHTML += "&nbsp;&nbsp;";
        }
        for (var col = 1; col <= row; col++) {
            lbl1.innerHTML += " * &nbsp;  ";
        }
        lbl1.innerHTML += " <br> ";

    }
}

function btn21Click() {

    for (var row = 4; row >= 1; row--) {
        for (var spc = row; spc < 4; spc++) {
            lbl1.innerHTML += "&nbsp;&nbsp;";
        }
        for (var col = 1; col <= row; col++) {
            lbl1.innerHTML += " * &nbsp;  ";
        }
        lbl1.innerHTML += " <br> ";

    }

    for (var row = 2; row <= 4; row++) {
        for (var spc = 1; spc < 5 - row; spc++) {
            lbl1.innerHTML += "&nbsp;&nbsp;";
        }
        for (var col = 1; col <= row; col++) {
            lbl1.innerHTML += " * &nbsp;  ";
        }
        lbl1.innerHTML += " <br> ";

    }

}

function btn22Click() {



    for (var row = 1; row <= 4; row++) {

        for (var col = 1; col <= row; col++) {
            lbl1.innerHTML += " * &nbsp;  ";
        }
        lbl1.innerHTML += " <br> ";

    }

    for (var row = 3; row >= 1; row--) {

        for (var col = 1; col <= row; col++) {
            lbl1.innerHTML += " * &nbsp;  ";
        }
        lbl1.innerHTML += " <br> ";

    }

}

function btn23Click() {



    for (var row = 1; row <= 4; row++) {

        for (var col = 1; col <= 4; col++) {
            if (row == 1 || col == 1 || row == 4 || col == 4) {
                lbl1.innerHTML += " * ";
            }

            else {
                lbl1.innerHTML += " &nbsp;&nbsp; ";

            }
        }
        lbl1.innerHTML += " <br> ";

    }



}

function btn24Click() {



    for (var row = 1; row <= 4; row++) {

        for (var col = row; col >= 1; col--) {

            lbl1.innerHTML += col +"  ";
        }
        
        for (var col = row; col < 4; col++) {

            lbl1.innerHTML += " 1 ";
        } 
        lbl1.innerHTML += " <br> ";

    }



}

function btn25Click() {
    for (var row = 1; row <= 4; row++) {
        for(var spc = 1; spc <= 4-row; spc++)
        {
            lbl1.innerHTML += " 1 ";
        }
        for (var col = 1; col <= row; col++) {
            lbl1.innerHTML += col + " ";
        }
        lbl1.innerHTML += " <br> ";
    }
}

function btn26Click() {

    for (var row = 1; row <= 4; row++) {
        for(var col = 1; col <= 4; col++)
        {
            if(row == 1 || col == 1 || col == 4 || row == 4)
            {
                lbl1.innerHTML += " 1 ";
            }

            else
            {
                lbl1.innerHTML += row * col + "  ";
            }
        }
       
        lbl1.innerHTML += " <br> ";
    }

}

function btn27Click() {
    for (var row = 1; row <= 4; row++) {
        for(var spc = 1; spc < row; spc++)
        {
            lbl1.innerHTML += " &nbsp;&nbsp; ";
        }
        for (var col = 1; col <= 5 - row; col++) {
            lbl1.innerHTML += " * ";
        }
        lbl1.innerHTML += " <br> ";
    }

    for (var row = 2; row <= 4; row++) {
        for(var spc = 1; spc < 5 - row; spc++)
        {
            lbl1.innerHTML += " &nbsp;&nbsp; ";
        }
        for (var col = 1; col <=  row; col++) {
            lbl1.innerHTML += " * ";
        }
        lbl1.innerHTML += " <br> ";
    }
}


function btn28Click() {
    for (var row = 4; row >= 1; row--) {
        for(var spc = 1; spc <= row; spc++)
        {
            lbl1.innerHTML += " &nbsp;&nbsp; ";
        }
        for (var col = 4; col >=  row; col--) {
            lbl1.innerHTML +=  col + "  ";
        }
        lbl1.innerHTML += " <br> ";
    }

    for (var row = 3; row >= 1; row--) {
        for(var spc = row; spc <= 4; spc++)
        {
            lbl1.innerHTML += " &nbsp;&nbsp; ";
        }
        for (var col = 4; col >=  5 - row; col--) {
            lbl1.innerHTML += col + "  ";
        }
        lbl1.innerHTML += " <br> ";
    }
}


function btn29Click() {
    for (var row = 5; row >= 1; row--) {
        for(var spc = 1; spc < row; spc++)
        {
            lbl1.innerHTML += " 5 ";
        }
        for (var col = row; col <=  5; col++) {
            lbl1.innerHTML +=  col + "  ";
        }
        lbl1.innerHTML += " <br> ";
    }

}

function btn30Click() {

    for (var row = 1; row <= 5; row++) {
        
        for (var col = 1; col <=  row; col++) {
            lbl1.innerHTML += col % 2 + "  ";
        }
        lbl1.innerHTML += " <br> ";
    }

}

function btn31Click() {
debugger;
    for (var row = 1; row <= 5; row++) {
        
        for (var col = row; col >=  1; col--) {
            lbl1.innerHTML += col % 2 + "  ";
        }
        lbl1.innerHTML += " <br> ";
    }

}