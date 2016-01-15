///////////////////////
//  Event listeners  //
/////////////////////

// select all resorts on front end
var resorts = document.getElementsByClassName("submitResort");

// loop through and add event listeners
for (var i = 0; i < resorts.length; i++) {
  resorts[i].addEventListener("click", submitResortId);
}

function submitResortId() {
  // var resortId = this.dataset.resortId;
  var resortId = this.getAttribute('data-resortId');
  callApi(resortId);
  // debugging
  console.log(this);
}

// new XML Http Request from the query to the API
function callApi(resortId) {
  // used to send HTTP requests to Express server and load the response data
  var xhr = new XMLHttpRequest();
  
  // bring the response to the front end onload (when the API server responds)
  xhr.onload = function() {
    // if status is good, take the response and parse
    if (xhr.status == 200) {
      response = JSON.parse(xhr.responseText);
      console.log(response);
      console.log(response.items[0].id);
    }
    if (xhr.status !== 200) {
      console.log('error. check user input. status: '+ status);
    }
  };
  // open the Express router.post function from api.js
  xhr.open('get', '/api/' + resortId, true);
  // xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.send(resortId);
}

///////////////////////////////////////////////////////
//  Populate Front End with SnoCountry return data  //
/////////////////////////////////////////////////////

/*  Powder Report - Populate Modal  */
//selected data values from data array within "items" object
// var list = response.items

function printlist(list) {
  var listHTML = "<ol>";
  // iterate through SnoCountry weather returned object with array of items 
  for (var i = 0; i < list.length; i++) {
    listHTML += '<li>' + list[i] + "</li>";
  }
  listHTML += "</ol>";
  print(listHTML);
}

var reportModal = document.getElementById("reportModal");

function print(html) {
  document.write(html);
}


/*  Response Items to populate pushpins and other front-end elements

Found within the object "items" of body-parsed JSON package 
(these are in an array, converted to object and referenced as "items")

// Powder Report items:
"snowLast48Hours": "",
// if "0" or "", instead display
"lastSnowFallDate": "Dec 26, 2015",
"weatherToday_Condition": "Light To Moderate Snow",
"primarySurfaceCondition": "Packed Powder",
"terrainParkOpen": "yes",
// Cam Links:
"resortPhotos": "https:\/\/instagram.com\/arapahoe_basin\/",
"webCamLink": "http:\/\/arapahoebasin.com\/ABasin\/snow-conditions\/web-cams.aspx",


// D3.js Gauge items:
"weatherToday_Temperature_Low": "11",
"weatherToday_Temperature_High": "26",
"weatherToday_WindSpeed": "8",


// Resort info placed on its Map pushpin 'Marker info window'
"logo": "http:\/\/snocountry.com\/ski_area_logos\/303001logo.jpg",
"resortAddress": "28194 US Highway 6 Dillon , CO 80435",
"webSiteLink": "http:\/\/www.arapahoebasin.com\/",
// Trailmap
"tnTrailMapURL": "http:\/\/www.snocountry.com\/trail_maps\/large_trail_maps\/large_thumbnails\/303001.gif",
"lgTrailMapURL": "http:\/\/www.snocountry.com\/snowclient\/trailmapDisplay.php?permcode=303001",


// Location (use with Google Maps to place the pins accurately):
"latitude": "39.638952",
"longitude": "-105.871382",

*/ 