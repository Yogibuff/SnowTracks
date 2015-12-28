// express app
var express = require('express'),
    app = express(),
    request = require('request'),
    router = express.Router();

// body-parser middlewear, to be used with SnoCountry API JSON returned data
// Add '&output=json' to end of SnoCountry API for Json formatted response
var bodyParser = require('body-parser'),
    parseText = bodyParser.text();

router.post( '/', function(req, res) {
  // SnoCountry API reqest URL format: http:feeds.snocountry.net/conditions.php?apiKey=SnoCountry.example&states=ca&resortType=alpine&output=json
  // (modifiers attached on the end, ex: '&states=ca')
  // var allOptions = statesArray ['ca', 'co', 'mt', 'nm', 'ut', 'vt'];

  // var requestedState = req.body

  var SnoCountryQuery = "http:feeds.snocountry.net/conditions.php?apiKey=SnoCountry.example&states=" + requestedState + "&resortType=alpine&output=json";
  request( SnoCountryQuery, function(error, response, body) {
    // if no error and status code 200, log success and send the recieved .json file to body-parser for stringify'd text response
    if ( !error && response.statusCode == 200 ) {
      console.log('SnoCountry successfully reached. Status code: ' + response.statusCode);
      res.send( parseText(body) );
    }
    else {
      console.log(error);
      console.log('Status code: ' + response.statusCode);
    }
  });
});

module.exports = router;


// Syntax for snow conditions query for a specific resort:
// URL: http://feeds.snocountry.net/conditions.php?...{Request Parameters}...
// Or by State, using getResortList (returns html default, or add &output=JSON:
// URL: http://feeds.snocountry.net/getResortList.php?...{Request Parameters}...





// router.post( '/', function(req, res) {
  // SnoCountry API reqest URL format: http:feeds.snocountry.net/conditions.php?apiKey=SnoCountry.example&states=ca&resortType=alpine&output=json
  // (modifiers attached on the end, ex: '&states=ca')
// var allOptions = statesArray ['ca', 'co', 'mt', 'nm', 'ut', 'vt'];
// var requested = req.body
// Option 1 for checking if req.body contains an accepted state
// returns true if requested state is in the array, and false otherwise

//   statesArray.prototype.contains = function ( requested ) {
//      for (i in statesArray) {
//          if (statesArray[i] == requested) 
//           return true;
//      }
//      return false;
//   };

// // Option 2
// this +for loop to iterate through the array of state options looking for a match: 'true'
//   var stateExists = function() {
//     if (req.body) {
//       statesArray.prototype.exists = function (requested) {
//         for (var i = 0; i < this.length; i++) {
//         if (this[i] == requested) return true;
//         }
//         else {
//         return false;
//       }
//   };
//   // if (match found between req.body and a state in statesArray): break
//     console.log("Didn't send to SnoCountry API, State requested did not match any available options.");
//     }
//   }


//////////////  Promises Synchronous order of operations  //////////////

// FIRST: User clicks a State which is matched on the back-end to a latitude / longitude value pair, 
//       location: app.js, contains a list of the 6 States (UT, CO, CA, VT, MT, NM) with stored lat/long data 
//       which is stored in variables for click event to be sent to map initializing function in app.js
// THEN ASYNCHRONOUSLY: send request Google Maps API and post results into the DOM, remove the middle section jumbotron text
//       and replace with a 640px wide by 400px tall map of the selection in the page's center.
// AT THE SAME TIME: request SnoCountry.com Snow Reports (left side of their website: #ski areas open, #areas with new snow, Biggest Snowfalls...) 