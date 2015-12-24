// express app
var express = require( 'express' ),
  app = express(),
  request = require( 'request' ),
  router = express.Router();

// body-parser middlewear, to be used with SnowCountry API JSON returned data
var bodyParser = require( 'body-parser' ),
  parseText = bodyParser.text();


/* 
router.post( '/', function( req, res ) {
//SnoCountry API reqest URL format (goes on the end) http://feeds.snocountry.net/conditions.php?apiKey=SnowCountry.example&states=ca 

var SnoCountryApi = URL: http://feeds.snocountry.net/conditions.php?apiKey=SnoCountry.example
request( SnoCountryApi, function( error, response, body ) {
    // if no error and status code 200, log success and send the recieved .json file to body-parser for stringify'd text response
    if ( !error && response.statusCode == 200 ) {
      console.log( 'Success. Status code: ' + response.statusCode );
      res.send( body );
    }
    else {
      console.log(error);
      console.log( 'Status code: ' + response.statusCode );
    }
  });
});

module.exports = router;
*/


//////////////  Promises Synchronous order of operations  //////////////

// FIRST: User clicks a State which is matched on the back-end to a latitude / longitude value pair, 
//       location: app.js, contains a list of the 6 States (UT, CO, CA, VT, MT, NM) with stored lat/long data 
//       which is stored in variables for click event to be sent to map initializing function in app.js
// THEN ASYNCHRONOUSLY: send request Google Maps API and post results into the DOM, remove the middle section jumbotron text
//       and replace with a 640px wide by 400px tall map of the selection in the page's center.
// AT THE SAME TIME: request SnoCountry.com Snow Reports (left side of their website: #ski areas open, #areas with new snow, Biggest Snowfalls...) 