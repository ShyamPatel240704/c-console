$(document).ready(function () {
    $("#btnAnimate").click(function () {
        $("#box").animate({
            left:"+=100px",
            width: "+=200px",
            heigth:"+=200px",
            backgroundColor:"blue"
        })
    });
});