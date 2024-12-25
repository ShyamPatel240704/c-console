$(document).ready(function () {
   
        $("#btnAdd").click(function () { 
            $("#animTarget").addClass("myClass",3000);
        });
    
   
    // else
    // {
        $("#btnRemoveClass").click(function () { 
            $("#animTarget").removeClass("myClass",3000);
        });
    // }
});
