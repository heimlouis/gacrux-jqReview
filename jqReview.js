var garage = [];

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
    // push that car into our garage
    garage.push( newCar );
    // display what is in our garage
    displayGarage();
    // empty inputs
    $( '#yearIn' ).val( '' );
    $( '#makeIn' ).val( '' );
    $( '#modelIn' ).val( '' );
  }); // end clickyButton on click
}); //end doc ready

function displayGarage(){
  console.log( 'in displayGarage' );
  // target output element by ID
  var output = $( '#garageOut' );
  // empty output element
  output.empty();
  // loop though cars in garage and display on DOM
  for( var i=0; i<garage.length ; i++ ){
    // append each car into output element
    var outputString = '<li>';
    outputString += garage[ i ].year + ' ';
    outputString += garage[ i ].make + ' ';
    outputString += garage[ i ].model;
    outputString += '</li>';
    output.append( outputString );
  } //end for
} // end displayGarage
