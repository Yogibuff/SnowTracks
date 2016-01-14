//////////////////////////////////////////
//  Weather requests to SnoCountry API  //
/////////////////////////////////////////

// load Express.js
var express = require('express'),
    app = express(),
    router = express.Router();
// load Node package for HTTP requests
var request = require('request');
// load body-parser middlewear for returned JSON data, attaches data to the request object
var bodyParser = require('body-parser'),
    parseText = bodyParser.text();

// get the requested id from the string in the URL pattern of the route (server recieves request for a route)
// router.get('/:id', function(req, res) {
//   var resortId = req.params.id;
//   res.send(resortId);
// });

/*  response to Get requests on the root '/' route  */
router.get('/:id', parseText, function(req, res) {
  var SnoCountryQuery = "http://feeds.snocountry.net/conditions.php?apiKey=SnoCountry.example" + "&ids=" + req.params.id + "&output=json";
  // make request with completed SnoCountryQuery URL
  request( SnoCountryQuery, function(error, response, body) {
    if ( !error && response.statusCode == 200 ) {
      console.log('SnoCountry connection successful. Api.js recieved resort data.');
      // send the recieved .json file to body-parser to stringify JSON response
      res.send(body);
    }
    else {
      console.log(error);
      console.log('Error reaching SnoCountry. Status code: ' + response);
    }
  });
});

module.exports = router;



//////////////////////////////////////////////////////////////////////
/////////////////////// API Notes Section /////////////////////////////
//////////////////////////////////////////////////////////////////////
/* 
SnoCountry API Full URL format:
 http:feeds.snocountry.net/conditions.php?apiKey=SnoCountry.example&states=ca&resortType=alpine&output=json

modifiers attached: state '&states=ca', non-crosscountry ski resorts only "&resortType=alpine", and fill in resort id &ids=######) + JSON formatted response '&output=json'

Examples of Syntax for snow conditions query for a specific resort:
URL: http://feeds.snocountry.net/conditions.php?...{Request Parameters}...
Or by State, using getResortList (returns html default, or add &output=JSON:
URL: http://feeds.snocountry.net/getResortList.php?...{Request Parameters}...
http://feeds.snocountry.net/conditions.php?apiKey=xxx&ids=802007
*/

////////////////////////////////////////
//  List of Resort ID's for query URL //
//////////////////////////////////////

/*
Heavenly 916004
Alpine Meadow 916001
Squaw Valley 916011
Mammoth 619002

Vail 303023
Telluride 303022
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
