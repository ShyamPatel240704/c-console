
window.onload = function ()
{
    if (localStorage.getItem("Email") != null) {
        txt1.value = localStorage.getItem("Email");
    }
    if (localStorage.getItem("Password") != null) {
        txt2.value = localStorage.getItem("Password");
    }
}
function logout() {
    var t1 = txt1.value;
    var t2 = txt2.value;
    var t1Registration;
    var t2Registration;
    debugger;
    if (localStorage.getItem("EmailRegistration") != null) {
        t1Registration = localStorage.getItem("EmailRegistration");
    }
    if (localStorage.getItem("PasswordRegistration") != null) {
        t2Registration = localStorage.getItem("PasswordRegistration");
    }


    if (chk1.checked == true) {
        localStorage.setItem("Email" , t1);
        localStorage.setItem("Password" , t2);
    }
    if (t1 != t1Registration)
    {
        lbl2.innerHTML = "Please Valid Email ";
    }
    if (t2 != t2Registration)
        {
            lbl2.innerHTML = "Please Valid  Password";
        }
    if (t1 != t1Registration && t2 != t2Registration) {
        lbl2.innerHTML = "Please Valid Email And Password";
    }

    if (t1 == t1Registration && t2 == t2Registration) {
        window.location.href = "output.html";
    }






}