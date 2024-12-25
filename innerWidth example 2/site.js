$(document).ready(function() {  
    $("div").click(function () {  
       var color = $(this).css("background-color");  
       var width = $(this).innerWidth();  
       $("#result").html("Inner Width is <span>" + width + "</span>.");  
       $("#result").css({'color': color, 'background-color':'white'});  
    });  
 });  