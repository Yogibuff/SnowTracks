 //  TESTING STILL !  //
// nodemon js/app.js //

// require the express module, set to variable called app
var express = require('express'),
  app = express(),
  path = require('path');
var port = 3000;

// set a route for the root of the server
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../index.html'));
  console.log(req.path + " was requested.");
  console.log(req.body);
});

// other routes
app.get('/package.json', function(req, res) {
  res.sendFile(path.join(__dirname + '/../package.json'));
  console.log(req.path + " was requested.");
});

app.get('/about-us.html', function(req, res) {
res.sendFile(path.join(__dirname + '/../about-us.html'));
});

//images
app.use('/images', function(req, res, next) {
  console.log('Image' + ' ' + req.url + ' ' + 'was requested');
  next();
});
// static server to serve image files
app.use('/images', express.static('images'));

// requires the api.js file for later implementation of snoCountry API
// var api = require('/api.js');
// app.use('/api', api);

 //////////////////////////////////////////////////////////
// hosted locally & listening for requests on port 3000 //
app.listen( port, function(){
	console.log("The front-end server is running on port " + port + " " + "Go to localhost:" + port + " to view this app!");
} );