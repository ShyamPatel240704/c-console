$(document).ready(function(){  
    $("#flip").click(function(){  
        $("#panel").slideDown("slow");  
        $("#panel").slideUp("slow");  
        $("#panel2").slideUp("slow");  
        
    //    else {
    //     $("#panel").slideUp("slow");  

    //    }
    });  
    $("#flip1").click(function(){  
        $("#panel1").slideToggle("slow");  
        if ($("#panel1").slideDown("slow")) {
            $("#panel").slideUp("slow");  
            $("#panel2").slideUp("slow");  

        }
        // if ($("#panel1").slideDown("slow")) {
            
        // }

    });  
    $("#flip2").click(function(){  
        $("#panel2").slideToggle("slow");  
        if ($("#panel2").slideDown("slow")) {
            $("#panel").slideUp("slow");  
            $("#panel1").slideUp("slow");  
        }

    });  
});  