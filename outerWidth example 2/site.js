$(document).ready(function () {
    $("div").click(function () {
        var color = $(this).css("background-color");
        var width = $(this).outerWidth(true);
        $("#result").html("Outer Width is <span>" + width + "</span>.");
        $("#result").css({ 'color': color, 'background-color': 'white' });
    });
});  