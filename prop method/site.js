$(document).ready(function(){  
    $("button").click(function(){  
        var $x = $("div");  
        $x.prop("color","#e0eeee");  
        $x.append("The value of the color property: " + $x.prop("color"));  
        $x.removeProp("color");  
        $x.append("<br>Now the value of the color property: " + $x.prop("color"));  
    });  
});  