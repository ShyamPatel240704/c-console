window.onload = function () {
    
    if (localStorage.getItem("Name") != null) {
        lbl1.innerHTML = localStorage.getItem("Name");
    }
    if (localStorage.getItem("FirstName") != null) {
        lbl2.innerHTML = localStorage.getItem("FirstName");
    }
    if (localStorage.getItem("MidName") != null) {
        lbl3.innerHTML = localStorage.getItem("MidName");
    }

    if (localStorage.getItem("LastName") != null) {
        lbl4.innerHTML = localStorage.getItem("LastName");
    }
    if (localStorage.getItem("Gender") != null) {
        lbl5.innerHTML = localStorage.getItem("Gender");
    }
    if (localStorage.getItem("Castes") != null) {
        lbl6.innerHTML = localStorage.getItem("Castes");
    }
    if (localStorage.getItem("Date") != null) {
        lbl7.innerHTML = localStorage.getItem("Date");
    }
    if (localStorage.getItem("Date1") != null) {
        lbl8.innerHTML = localStorage.getItem("Date1");
    }
    if (localStorage.getItem("Date2") != null) {
        lbl9.innerHTML = localStorage.getItem("Date2");
    }
    if (localStorage.getItem("Address") != null) {
        lbl10.innerHTML = localStorage.getItem("Address");
    }
    if (localStorage.getItem("AnnualIncome") != null) {
        lbl11.innerHTML = localStorage.getItem("AnnualIncome");
    }
    if (localStorage.getItem("Pincode") != null) {
        lbl12.innerHTML = localStorage.getItem("Pincode");
    }
    if (localStorage.getItem("PaymentOption") != null) {
        lbl13.innerHTML = localStorage.getItem("PaymentOption");
    }
    if (localStorage.getItem("Email") != null) {
        lbl14.innerHTML = localStorage.getItem("Email");
    }
    if (localStorage.getItem("MobileNumber") != null) {
        lbl15.innerHTML = localStorage.getItem("MobileNumber");
    }
    if (localStorage.getItem("LandlineNumber") != null) {
        lbl16.innerHTML = localStorage.getItem("LandlineNumber");
    }
    if (localStorage.getItem("State") != null) {
        lbl17.innerHTML = localStorage.getItem("State");
    }
    if (localStorage.getItem("City") != null) {
        lbl18.innerHTML = localStorage.getItem("City");
    }
    if (localStorage.getItem("EmploymentStatus") != null) {
        lbl19.innerHTML = localStorage.getItem("EmploymentStatus");
    }
    if (localStorage.getItem("WorkExeprience") != null) {
        lbl20.innerHTML = localStorage.getItem("WorkExeprience");
    }
}