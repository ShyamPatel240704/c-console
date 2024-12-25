function loginbtn() {
    debugger;
    var dro1 = drop1.value;
    var FistName = txt1.value;
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
    var Month = drop4.value;
    var Year = drop5.value;
    var Address = txt4.value;
    var Income = txt5.value;
    var Pincode = txt6.value;
    var PaymentOption = drop6.value;
    var Email = txt7.value;
    var MobileNumber = txt8.value;
    var LandlineNumber = txt9.value;
    var State = drop7.value;
    var City = drop8.value;
    if (rdo3.checked == true) {
        var EmploymentStatus = rdo3.value;
    }
    else if (rdo4.checked == true) {
        var EmploymentStatus = rdo4.value;
    }

    var WorkExeprience = txt10.value;

    window.location.href = "output.html?Name=" + dro1 + "&FistName=" + FistName + "&MidName=" + MidName + "&LastName=" + LastName + "&Gender=" + Gender + "&Castes=" + Castes + "&Date=" + Date + "&Months=" + Month + "&Year=" + Year + "&Address=" + Address + "&Income=" + Income + "&Pincode=" + Pincode + "&PaymentOption=" + PaymentOption + "&Email=" + Email + "&MobileNumber=" + MobileNumber + "&LandlineNumber=" + LandlineNumber + "&State=" + State + "&City=" + City + "&EmploymentStatus=" + EmploymentStatus + "&WorkExeprience=" + WorkExeprience;

}