function btn1Click() {
    
    var a = 0 , b = 1 , c = 0;

    var i = 1;
    while (i <= parseInt(txt1.value)) {
        c = c + a;
        a = b;
        b = c;

        lbl1.innerHTML += c + " ";

        i++;
    }
}