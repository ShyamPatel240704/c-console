$(document).ready(function () {
    $("div").click(function () {
        var position = $(this).position();
        $("#lresult").html("left position: <span>" + position.left + "</span>.");
        $("#tresult").html("top position: <span>" + position.top + "</span>.");
    });
}); 