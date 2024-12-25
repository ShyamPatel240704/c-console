

window.onload = function () {

    var QS = new URLSearchParams(window.location.search);

    if (QS.has("Name")) {
        lbl1.innerHTML = QS.get("Name");
    }
    if (QS.has("FistName")) {
        lbl2.innerHTML = QS.get("FistName");
    }
    if (QS.has("MidName")) {
        lbl3.innerHTML = QS.get("MidName");
    }
    if (QS.has("LastName")) {
        lbl4.innerHTML = QS.get("LastName");
    }
    if (QS.has("Gender")) {
        lbl5.innerHTML = QS.get("Gender");
    }
    if (QS.has("Castes")) {
        lbl6.innerHTML = QS.get("Castes");
    }
    if (QS.has("Date")) {
        lbl7.innerHTML = QS.get("Date");
    }
    if (QS.has("Months")) {
        lbl8.innerHTML = QS.get("Months");
    }
    if (QS.has("Year")) {
        lbl9.innerHTML = QS.get("Year");
    }
    if (QS.has("Address")) {
        lbl10.innerHTML = QS.get("Address");
    }
    if (QS.has("Income")) {
        lbl11.innerHTML = QS.get("Income");
    }
    if (QS.has("Pincode")) {
        lbl12.innerHTML = QS.get("Pincode");
    }
    if (QS.has("PaymentOption")) {
        lbl13.innerHTML = QS.get("PaymentOption");
    }
    if (QS.has("Email")) {
        lbl14.innerHTML = QS.get("Email");
    }
    if (QS.has("MobileNumber")) {
        lbl15.innerHTML = QS.get("MobileNumber");
    }
    if (QS.has("LandlineNumber")) {
        lbl16.innerHTML = QS.get("LandlineNumber");
    }
    if (QS.has("State")) {
        lbl17.innerHTML = QS.get("State");
    }
    if (QS.has("City")) {
        lbl18.innerHTML = QS.get("City");
    }
    if (QS.has("EmploymentStatus")) {
        lbl19.innerHTML = QS.get("EmploymentStatus");
    }
    if (QS.has("WorkExeprience")) {
        lbl20.innerHTML = QS.get("WorkExeprience");
    }
}

    function logoutbtn() {
        window.location.href = "index.html";
    }