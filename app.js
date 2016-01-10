////////////////////////
//  Express Routers  //
//////////////////////

// require the express module and set host port
var express = require('express'),
    app = express(),
    port = 3000;

// set a static router to retrieve HTML, CSS, JS, Images
app.use(express.static(__dirname));

// require api.js for implementation of SnoCountry API's weather queries
// var api = require('./js/api.js');
// app.use('api.js', api);


  ////////////////////////////////////////////////////////
 // Hosted locally & listens for requests on port 3000 //
////////////////////////////////////////////////////////

app.listen( port, function() {
  console.log("Front-end server is running." + " " + "Go to localhost:" + port + " to view SnowTracks!");
} );