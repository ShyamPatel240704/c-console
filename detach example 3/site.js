$(document).ready(function(){  
    $("#btn1").click(function(){  
        $("body").append($("#p1").detach());  
    });  
    $("#btn2").click(function(){  
        $("body").append($("#p2").remove());  
    });  
    $("p").click(function(){  
        $(this).animate({fontSize: "+=1px"})  
    });  
}); 