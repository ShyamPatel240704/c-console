window.onload = function () {
    
    if (sessionStorage.getItem("Name") != null) {
        lbl1.innerHTML = sessionStorage.getItem("Name");
    }
    if (sessionStorage.getItem("FirstName") != null) {
        lbl2.innerHTML = sessionStorage.getItem("FirstName");
    }
    if (sessionStorage.getItem("MidName") != null) {
        lbl3.innerHTML = sessionStorage.getItem("MidName");
    }

    if (sessionStorage.getItem("LastName") != null) {
        lbl4.innerHTML = sessionStorage.getItem("LastName");
    }
    if (sessionStorage.getItem("Gender") != null) {
        lbl5.innerHTML = sessionStorage.getItem("Gender");
    }
    if (sessionStorage.getItem("Castes") != null) {
        lbl6.innerHTML = sessionStorage.getItem("Castes");
    }
    if (sessionStorage.getItem("Date") != null) {
        lbl7.innerHTML = sessionStorage.getItem("Date");
    }
    if (sessionStorage.getItem("Date1") != null) {
        lbl8.innerHTML = sessionStorage.getItem("Date1");
    }
    if (sessionStorage.getItem("Date2") != null) {
        lbl9.innerHTML = sessionStorage.getItem("Date2");
    }
    if (sessionStorage.getItem("Address") != null) {
        lbl10.innerHTML = sessionStorage.getItem("Address");
    }
    if (sessionStorage.getItem("AnnualIncome") != null) {
        lbl11.innerHTML = sessionStorage.getItem("AnnualIncome");
    }
    if (sessionStorage.getItem("Pincode") != null) {
        lbl12.innerHTML = sessionStorage.getItem("Pincode");
    }
    if (sessionStorage.getItem("PaymentOption") != null) {
        lbl13.innerHTML = sessionStorage.getItem("PaymentOption");
    }
    if (sessionStorage.getItem("Email") != null) {
        lbl14.innerHTML = sessionStorage.getItem("Email");
    }
    if (sessionStorage.getItem("MobileNumber") != null) {
        lbl15.innerHTML = sessionStorage.getItem("MobileNumber");
    }
    if (sessionStorage.getItem("LandlineNumber") != null) {
        lbl16.innerHTML = sessionStorage.getItem("LandlineNumber");
    }
    if (sessionStorage.getItem("State") != null) {
        lbl17.innerHTML = sessionStorage.getItem("State");
    }
    if (sessionStorage.getItem("City") != null) {
        lbl18.innerHTML = sessionStorage.getItem("City");
    }
    if (sessionStorage.getItem("EmploymentStatus") != null) {
        lbl19.innerHTML = sessionStorage.getItem("EmploymentStatus");
    }
    if (sessionStorage.getItem("WorkExeprience") != null) {
        lbl20.innerHTML = sessionStorage.getItem("WorkExeprience");
    }
}