/* NOTE: Does NOT work when placed in the js folder, even when adding /../ before routes! */

// require the express module, set to variable called app
var express = require('express'),
    app = express(),
    path = require('path'),
    port = 3000;

// set a route for the root of the server
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// other routes
app.get('/index.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/about-us.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/about-us.html'));
});

app.get('/package.json', function(req, res) {
  res.sendFile(path.join(__dirname + '/package.json'));
});

// CSS
app.use('/css', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/css/default.css'));
  next();
});
// static server to serve CSS files
app.use('/css', express.static('css'));
// Javascript
app.use('/js', function(req, res, next) {
  // console.log(req.path + " was requested.");
  next();
});
// static server to serve js files
app.use('/js', express.static('js'));

// static server to serve image files
app.use('/images', express.static('images'));

// requires the api.js file for later implementation of snoCountry API
// var api = require('/api.js');
// app.use('/api', api);

 //////////////////////////////////////////////////////////
// hosted locally & listening for requests on port 3000 //
app.listen( port, function() {
  console.log("Front-end server is running." + " " + "Go to localhost:" + port + " to view SnowTracks!");
} );