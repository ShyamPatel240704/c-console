$(document).ready(function(){  
    $("button").click(function(){  
        var x = $("p").offset();  
        alert("Top: " + x.top + " Left: " + x.left);  
    });  
});