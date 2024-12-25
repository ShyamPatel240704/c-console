$(document).ready(function(){  
    $("button").click(function(){  
        var x = $("p").position();  
        alert("Top position: " + x.top + " Left position: " + x.left);  
    });  
}); 