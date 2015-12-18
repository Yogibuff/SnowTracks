// require the express module, set to variable called app
var express = require( 'express' ),
  app = express(),
  path = require( 'path' );
var port = 3000;

// require the api.js file, set to variable called api, and send to express with use method
var api = require( './api.js' );
app.use( '/api', api );

// use get method on the variable app, route for root of the server /
app.get('/', function(req, res){
// annonymous callback function using response object's sendFile method to send the index file from the directory, logging the request
  res.sendFile(path.join( __dirname + '/index.html' ));
  console.log(req.path + " was requested.");
  console.log(req.body);
});

// adding another route: 'get' request for route to server for package.json
// format: app.get method("1st param URL endpoint", anonymous callback function(request, response))

app.get('/package.json', function(req, res) {
  res.sendFile(__dirname + '/package.json');
  console.log(req.path + " was requested.");
});

app.get('/main.js', function(req, res) {
	res.sendFile(__dirname + '/main.js');
});

app.use( '/images', function( req, res, next ) {
  console.log( 'Image' + ' ' + req.url + ' ' + 'was requested' );
  next();
});

// static server to serve masthead img from html page
app.use( '/images', express.static( 'images' ) );

// listens to port 3000
app.listen( port, function(){
	console.log("The front-end server is running on port " + port + " " + "Go to localhost:" + port + " to view this app!");
} );
