var modHeight = 80;  
$( "div" ).one( "click", function() {  
    $( this ).outerHeight( modHeight ).addClass( "mod" );  
    modHeight -= 8;  
  }); 