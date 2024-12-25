$( "p" ).click(function() {  
    $( this ).toggleClass( "off" );  
  });  
  var p;  
  $( "button" ).click(function() {  
    if ( p ) {  
      p.appendTo( "body" );  
      p = null;  
    } else {  
      p = $( "p" ).detach();  
    }  
  });  