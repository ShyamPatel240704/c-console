var modWidth = 70;  
$( "div" ).one( "click", function() {  
  $( this ).width( modWidth ).addClass( "mod" );  
  modWidth -= 10;  
});  