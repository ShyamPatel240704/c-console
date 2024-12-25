$(document).ready(function () {
    $("div").click(function () {
        var offset = $(this).offset();
        $("#lresult").html("left offset: <span>" + offset.left + "</span>.");
        $("#tresult").html("top offset: <span>" + offset.top + "</span>.");
    });
});  