function btn1Click() {
    //debugger;
    var t1 = Name.value;
    var t2 = Email.value;
    var t3 = Passwrod.value;
    var dro1 = drop1.value;
    if (rdo1.checked == true) {
        var rdobtn1 = rdo1.value;
    }
    else if (rdo2.checked == true) {
        var rdobtn2 = rdo2.value;
    }

    var t4 = Address.value;
    var date = date1.value;

  
    localStorage.setItem("EmailRegistration" , t2);
    localStorage.setItem("PasswordRegistration" , t3);


    window.location.href = "index.html";
}