$(document).ready(function () {
    $("#btnEffect").click(function () { 
        $( "#box-1" ).effect( "shake", {  
            times: 10,  
            distance: 150  
         }, 300, function() {  
         $( this ).css( "background", "#ff4040" );  
      });  
    });
});