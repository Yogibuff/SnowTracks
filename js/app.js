 //  TESTING STILL !  //
// nodemon js/app.js //

// require the express module, set to variable called app
var express = require('express'),
    app = express(),
    path = require('path'),
    port = 3000;

// set a route for the root of the server
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/../index.html'));
});

// other routes
app.get('/index.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/../index.html'));
});

app.get('/about-us.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/../about-us.html'));
});

app.get('/package.json', function(req, res) {
  res.sendFile(path.join(__dirname + '/../package.json'));
  // console.log(req.path + " was requested.");
});

// didn't work to fix the error
// app.get('/node_modules', function(req, res) {
//   res.sendFile(path.join(__dirname + '/../node_modules'));
//   // console.log(req.path + " was requested.");
// });
// // static server to serve node_module files
// app.use('/node_modules', express.static('node_modules'));

// CSS
app.use('/css', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../css/default.css'));
  next();
});
// static server to serve CSS files
app.use('/css', express.static('css'));

// images
app.use('/images', function(req, res, next) {
  next();
});
// static server to serve image files
app.use('/images', express.static('images'));

// Javascript
app.use('/js', function(req, res, next) {
  next();
});
// static server to serve js files
app.use('/js', express.static('js'));


// requires the api.js file for later implementation of snoCountry API
// var api = require('/api.js');
// app.use('/api', api);

 //////////////////////////////////////////////////////////
// hosted locally & listening for requests on port 3000 //
app.listen( port, function(){
  console.log("The front-end server is running on port " + port + " " + "Go to localhost:" + port + " to view this app!");
} );