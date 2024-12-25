// $(document).ready(function () {
//     $("#btnSwitch").click(function () { 
//     //    $(".NormalClass").switchClass("NormalClass","LargeClass",3000);
//        $(".NormalClass").SwitchClass("NormalClass","LargeClass",'fast');
//     //    $(".LargeClass").switchClass("LargeClass","NormalClass",3000);
//         return false
//     });

// });



$(function() {  
    $('#btnSwitch').click(function(){  
       $(".NormalClass").switchClass("NormalClass","LargeClass",'fast');  
       $(".LargeClass").switchClass("LargeClass","NormalClass",'fast');  
       return false;
    });  
 }); 