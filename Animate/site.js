$(document).ready(function () {
    $("#btnAnimate").click(()=>{
        $(".box").delay(1000).animate({
            "left":"+=100px",
            "top":"+=100px"
        },10000);
    });
});