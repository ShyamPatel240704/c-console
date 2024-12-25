$(document).ready(function () {
    $("#btnFadeIn").click(function () { 
       $("#box1").delay("fast").fadeIn();
       $("#box2").delay("slow").fadeIn();
       $("#box3").delay("1000").fadeIn();
       $("#box4").delay("2000").fadeIn();
       $("#box5").delay("3000").fadeIn();

    });
});