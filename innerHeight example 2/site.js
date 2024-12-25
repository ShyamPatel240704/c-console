var modHeight = 80;  
$( "div" ).one( "click", function() {  
  $( this ).innerHeight( modHeight ).addClass( "mod" );  
  modHeight -= 8;  
});  