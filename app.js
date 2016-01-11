////////////////////////
//  Express Routers  //
//////////////////////

// require the Express module, set host port
var express = require('express'),
    app = express(),
    port = 3000,
// require api.js for implementation of SnoCountry API's weather queries
    api = require('./js/api.js');

// app.use('/api', api);

// set static router to retrieve HTML, CSS, JS, Images
app.use(express.static(__dirname));

// set route to custom 404 Page, overrides default 404 server response
app.use(function(req, res, next) {
  res.status(404).sendFile(__dirname + '/custom-404.html');
});

  ////////////////////////////////////////////////////////
 // Hosted locally & listens for requests on port 3000 //
////////////////////////////////////////////////////////

app.listen( port, function() {
  console.log("Front-end server is running." + " " + "Go to localhost:" + port + " to view SnowTracks!");
} );