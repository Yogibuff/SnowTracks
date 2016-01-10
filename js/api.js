///////////////////////////////////////////
//  Weather requests to SnoCountry API  //
/////////////////////////////////////////

// load Express.js
var express = require('express'),
    app = express(),
    router = express.Router();
// load node's package for HTTP requests to SnoCountry API
var request = require('request');
// load body-parser middlewear for returned JSON data
var bodyParser = require('body-parser'),
    parseText = bodyParser.text();

// var resortId = [
// // testing queries of Colorado resort ids
// 303022,
// 303023,
// 303014,
// 303007
// ];

// var searchColoradoResort = function() {
//   for (var i = 0; i < resortId.length; i++){
//     (resortId[i] + "SearchButton").addEventListener('click', function() {
//       // request weather from SnoCountry api using resort id, based on the object[#] of clicked resort
//       var SnoCountryQuery = "http:feeds.snocountry.net/conditions.php?apiKey=SnoCountry.example" + "&ids=" + resortId[i] + "&output=json";
//     });
//   }
// };



/*  response to POST requests on the root '/' route  */
router.post('/', parseText, function(req, res) {
  // testing query on Vail, id 303023, working URL: http:feeds.snocountry.net/conditions.php?apiKey=SnoCountry.example&ids=303023&output=json
  var resortId = 303023;
  var SnoCountryQuery = "http:feeds.snocountry.net/conditions.php?apiKey=SnoCountry.example" + "&ids=" + resortId + "&output=json";

  request( SnoCountryQuery, function(error, response, body) {
    if ( !error && response.statusCode == 200 ) {
      console.log('SnoCountry connection successful. Status code: ' + response.statusCode);
      // send the recieved .json file to body-parser to stringify JSON response
      res.send(parseText(body));
    }
    else {
      console.log(error);
      console.log('Error reaching SnoCountry. Status code: ' + response.statusCode);
    }
  });
});

module.exports = router;


// SnoCountry API Full URL format: http:feeds.snocountry.net/conditions.php?apiKey=SnoCountry.example&states=ca&resortType=alpine&output=json
// modifiers attached: state '&states=ca', non-crosscountry ski resorts only "&resortType=alpine", and fill in resort id &ids=######) + JSON formatted response '&output=json'

// Examples of Syntax for snow conditions query for a specific resort:
// URL: http://feeds.snocountry.net/conditions.php?...{Request Parameters}...
// Or by State, using getResortList (returns html default, or add &output=JSON:
// URL: http://feeds.snocountry.net/getResortList.php?...{Request Parameters}...
// http://feeds.snocountry.net/conditions.php?apiKey=xxx&ids=802007

///////////////////////////////////////////////
/*  Resort ID's for SnoCountry API query URL /
/////////////////////////////////////////////

Heavenly 916004
Alpine Meadow 916001
Squaw Valley 916011
Mammoth 619002

Telluride 303022
Vail 303023
Keystone 303014
Breckenridge 303007

Big Sky 406002
Bridger Bowl 406003
Whitefish  406001
Montana Snowball 406008

Angel Fire 505001
Ski Apache 505007
Pajarito 505002
Taos 505009

Alta 801001
Park City 801006
Solitude 801011
Snowbird 801010

Killington 802007
Jay Peak 802006
Smuggs 802016
Stratton 802019
*/