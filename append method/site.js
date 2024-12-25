$(document).ready(function(){  
    $("#btn1").click(function(){  
        $("p").append(" <b>Newly added appended text</b>.");  
    });  
    $("#btn2").click(function(){  
        $("ol").append("<li><b>Newly added appended item</b></li>");  
    });  
});  