$(document).ready(function () {
    $(".btn").click(function () {
        var className = $(this).attr("id");
        $("ul li").each(function () {
            if ($(this).hasClass(className)) {
                $(this).fadeTo('slow', 0.0).fadeTo('slow', 1.0);
            }
        });
    });
});  