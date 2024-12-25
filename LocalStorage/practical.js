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

    localStorage.setItem("Name" , Name);
    localStorage.setItem("FirstName" , FirstName);
    localStorage.setItem("MidName" , MidName);
    localStorage.setItem("LastName" , LastName);
    localStorage.setItem("Gender" , Gender);
    localStorage.setItem("Castes" , Castes);
    localStorage.setItem("Date" , Date);
    localStorage.setItem("Date1" , Date1);
    localStorage.setItem("Date2" , Date2);
    localStorage.setItem("Address" , Address);
    localStorage.setItem("AnnualIncome" , AnnualIncome);
    localStorage.setItem("Pincode" , Pincode);
    localStorage.setItem("PaymentOption" , PaymentOption);
    localStorage.setItem("Email" , Email);
    localStorage.setItem("MobileNumber" , MobileNumber);
    localStorage.setItem("LandlineNumber" , LandlineNumber);
    localStorage.setItem("State" , State);
    localStorage.setItem("City" , City);
    localStorage.setItem("EmploymentStatus" , EmploymentStatus);
    localStorage.setItem("WorkExeprience" , WorkExeprience);


    window.location.href = "output.html";
}