$(document).ready(function(){  
    $("#btn1").click(function(){  
        $("p").prepend("<b>Prepended text</b>. ");  
    });  
    $("#btn2").click(function(){  
        $("ol").prepend("<li>Prepended item</li>");  
    });  
});  