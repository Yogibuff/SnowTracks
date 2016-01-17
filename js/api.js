//////////////////////////////////////////
//  Weather requests to SnoCountry API  //
/////////////////////////////////////////

// load Express.js
var express = require('express'),
    app = express(),
    router = express.Router(),
// load Node package for HTTP requests
    request = require('request'),
    bodyParser = require('body-parser'),
    parseText = bodyParser.text();

router.get('/:id', parseText, function(req, res) {
  var SnoCountryQuery = "http://feeds.snocountry.net/conditions.php?apiKey=SnoCountry.example" + "&ids=" + req.params.id + "&output=json";
  // make request to SnoCountry API
  request( SnoCountryQuery, function(error, response, body) {
    if ( !error && response.statusCode == 200 ) {
      console.log('SnoCountry connection successful. Recieved resort data.');
      // send the recieved JSON file to body-parser to stringify response
      res.send(body);
    }
    else {
      console.log(error);
      console.log('Error reaching SnoCountry. Status code: ' + response);
    }
  });
});

module.exports = router;