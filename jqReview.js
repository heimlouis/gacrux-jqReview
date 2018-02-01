$( document ).ready( function(){
  $( '#clickyButton' ).on( 'click', function(){
    console.log( 'in clickyButton on click' );
    // capture user input
    // create an object with the user input
    var newCar = {
      year: $( '#yearIn' ).val(),
      make: $( '#makeIn' ).val(),
      model: $( '#modelIn' ).val()
    }
    console.log( newCar );
    // push that car into our garage
    // display what is in our garage
  }); // end clickyButton on click
}); //end doc ready
