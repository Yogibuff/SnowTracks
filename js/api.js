// express app
var express = require( 'express' ),
  app = express(),
  request = require( 'request' ),
  router = express.Router();

// body-parser middlewear, to be used with SnowCountry API JSON returned data
var bodyParser = require( 'body-parser' ),
  parseText = bodyParser.text();

// Add a route for POST, with status codes (including success 200 code) logged to the console
// router.post( '/', function( req, res ) {
//   //"http://maps.googleapis.com/maps/api/js?key=YOUR_KEY"
//   var baseUrl = 'http://maps.googleapis.com/maps/api/js?';
//   var apiKey = 'AIzaSyCbgb6h0fxgC-2HjRmh6YlLnLiCC0edouw';
//   var additionalParameters = '&signed_in=true&libraries=places&callback=initMap';
//    /*additonal Parameters are If they're signed in with their Google account, their saved places, 
//   home and work locations, and more are built right into the map they see. This also means that 
//   interactions with the map, such as starring a location, are saved for easy viewing in Google Maps 
//   for desktop or mobile, and any other Google Map that the user visits on the web. */ 

//   var queryURL = baseUrl + /* req.body + */ 'key=' + apiKey + additionalParameters;

//   request( queryURL, function( error, response, body ) {
//     // if no error and status code 200, log success and send the recieved .json file to body-parser for stringify'd text response
//     if ( !error && response.statusCode == 200 ) {
//       console.log( 'Success. Status code: ' + response.statusCode );
//       res.send( body );
//     }
//     else {
//       console.log(error);
//       console.log( 'Status code: ' + response.statusCode );
//     }
//   });
// });

// module.exports = router;


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

/* Node implementation of Promises - coding pattern to enforce proper Synchronous pattern of passing data, 
so that user input location can be converted to longitude/latitude and THEN this value can be plugged 
into the 'center' property of the google Map initializing function */

// add this initMap() function into the DOM only AFTER the center property is set!

  // var map;
  // function initMap() {
  //   var stateLocation = {lat: x, lng: y}
  //   var colorado = {39.19110, -106.81754}
  //   var california = {39.17852, -120.22769}
  //   var newMexico = {36.39309, -105.28501}
  //   var montana = {46.98927, -114.01456}
  //   var vermont = {43.67757, -72.77982}
  //   var utah = {40.58884, -111.63798}
  //   map = new google.maps.Map(document.getElementById('map'), {
  //     center: {lat: x, lng: y},
  //     zoom: 8
  //   });
  // }

// FIRST Promise takes user input and matches it to a latitude / longitude value pair, 
//    Alternate (will be using): having a list of preset states (UT, CO, CA, VT, MT, NM) with stored lat/long data 
//                               which is stored in variables and gets plugged in to init map function.
// THEN pass the latitude/longitude data into the function initMap() 'center' property, creating a map of that state.
// THEN send request Google Maps API and post results into the DOM, replacing the middle section jumbotron & text.
// THEN request SnowCountry.com Snow Reports (left side of their website: #ski areas open, #areas with new snow, Biggest Snowfalls...) 