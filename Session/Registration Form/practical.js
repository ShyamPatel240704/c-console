function btn1Click() {
    debugger;
    var Name = drop1.value;
    var FirstName = txt1.value;
    var MidName = txt2.value;
    var LastName = txt3.value;
    if (rdo1.checked == true) {
        var Gender = rdo1.value;
    }
    else if (rdo2.checked == true) {
        var Gender = rdo2.value;
    }
    var Castes = drop2.value;
    var Date = drop3.value;
    var Date1 =  drop4.value ;
    var Date2 =  drop5.value;
    var Address = txt4.value;
    var AnnualIncome = txt5.value;
    var Pincode = txt6.value;
    var PaymentOption = drop6.value;
    var Email = txt7.value;
    var MobileNumber = txt8.value;
    var LandlineNumber = txt9.value;
    var State = drop7.value;
    var City = drop8.value;
    if (rdo3.checked == true) {
        var EmploymentStatus =  rdo3.value;
    }
    else if (rdo4.checked == true) {
        var EmploymentStatus = rdo4.value;
    }
    var WorkExeprience = txt10.value;

    sessionStorage.setItem("Name" , Name);
    sessionStorage.setItem("FirstName" , FirstName);
    sessionStorage.setItem("MidName" , MidName);
    sessionStorage.setItem("LastName" , LastName);
    sessionStorage.setItem("Gender" , Gender);
    sessionStorage.setItem("Castes" , Castes);
    sessionStorage.setItem("Date" , Date);
    sessionStorage.setItem("Date1" , Date1);
    sessionStorage.setItem("Date2" , Date2);
    sessionStorage.setItem("Address" , Address);
    sessionStorage.setItem("AnnualIncome" , AnnualIncome);
    sessionStorage.setItem("Pincode" , Pincode);
    sessionStorage.setItem("PaymentOption" , PaymentOption);
    sessionStorage.setItem("Email" , Email);
    sessionStorage.setItem("MobileNumber" , MobileNumber);
    sessionStorage.setItem("LandlineNumber" , LandlineNumber);
    sessionStorage.setItem("State" , State);
    sessionStorage.setItem("City" , City);
    sessionStorage.setItem("EmploymentStatus" , EmploymentStatus);
    sessionStorage.setItem("WorkExeprience" , WorkExeprience);


    window.location.href = "output.html";
}