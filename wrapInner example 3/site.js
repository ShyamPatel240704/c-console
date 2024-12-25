$(document).ready(function() {  
    $("div").click(function () {  
       var content = "<marquee><b></b></marquee>";  
       $(this).wrapInner( content );  
    });  
 });  