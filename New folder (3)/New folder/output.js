window.onload = function () {
    if (sessionStorage.getItem("name") != null) {
        lbl1.innerHTML = sessionStorage.getItem("name");
    }
}