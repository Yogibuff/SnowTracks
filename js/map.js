///////////////////////////////////////////////////////////////////////////
/*   GoogleMap - Initializing Functions & DOM Event Listeners for each State   */
///////////////////////////////////////////////////////////////////////////

// Create Google Map, placed within div #map, inside of the parent div .map-container
function initMap() {

  // Create an array of styles to apply to the Map, clearing roads and other labels
  var styles = [
    {
      stylers: [
        { hue: "#00ffe6" },
        { saturation: -20 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  // Create a new StyledMapType object, passing it the array of styles
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "SnowTracks"});

  var mapOptions = {
    zoom: 6,
    // default center: Aspen, Colorado
    center: new google.maps.LatLng(39.19110,-106.81754),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  
  var map = new google.maps.Map(document.getElementById('map'),
    mapOptions);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
}


///////////////////////////////////////////////////////
/* Google Map changes 'center' based on State Selected */
///////////////////////////////////////////////////////

// plugs in new latitude, longitude array
function newLocation(newLat,newLng) {
  map.setCenter( {
    lat : newLat,
    lng : newLng
  });
}

// BEGIN on'click' listners for each State's id
google.maps.event.addDomListener(window, 'load', initMap);

$(document.body).ready(function () {
  $("#california").on('click', function () {
    newLocation(39.17852,-120.22769);
  });
  $("#colorado").on('click', function () {
    newLocation(39.19110,-106.81754);
  });
  $("#montana").on('click', function () {
    newLocation(46.98927,-114.01456);
  });
  $("#new-mexico").on('click', function () {
    newLocation(36.39309,-105.28501);
  });
  $("#utah").on('click', function () {
    newLocation(40.58884,-111.63798);
  });
  $("#vermont").on('click', function () {
    newLocation(43.67757,-72.77982);
  });
  $("#reset-map").on('click', function () {
    newLocation(39.19110,-106.81754);
  });
});


///////////////////////////////////////////////////////////////////////////

/* OPTION 2: apply listener for click event to each State's li (list item) 
    ~too complex and long, going to use option 1!
*/

// $(".states").on('click', 'li', function(e) {
//    console.log($(this).attr("class"));
// });


// onclick events trigger location lat lng values send to initMap function
// $("#california").on('click', function(e) {
//       userLocation = 'california';
//       mapCenterOn(locations[userLocation].lat, locations[userLocation].lng);
// });
// $("#colorado").on('click', function(e) {
//       userLocation = 'colorado';
//       mapCenterOn(locations[userLocation].lat, locations[userLocation].lng);
// };
// $("#montana").on('click', function(e) {
//       userLocation = 'montana';
//       mapCenterOn(locations[userLocation].lat, locations[userLocation].lng);
// };
// $("#new-mexico").on('click', function(e) {
//       userLocation = 'newMexico';
//       mapCenterOn(locations[userLocation].lat, locations[userLocation].lng);
// };
// $("#utah").on('click', function(e) {
//       userLocation = 'utah';
//       mapCenterOn(locations[userLocation].lat, locations[userLocation].lng);
// };
// $("#vermont").on('click', function(e) {
//       userLocation = 'vermont';
//       mapCenterOn(locations[userLocation].lat, locations[userLocation].lng);
// };

// function eventListeners(locations) {
//   var states = getElementByClassName("states");
  
//   for (var i = 0; i < 6; i++) {
//     var elId = locations[i];
//     var el = document.getElementById(elId);
//     el.addEventListner('click', function(e) {
//       e.preventDefault();
//       var userLocation = locations[i];
//       mapCenterOn(locations[userLocation].lat, locations[userLocation].lng);
//     });
//   }
// }
// // creates the variable locations set equal to the array of State coordinates
// var locations = {
//       colorado: { 
//             lat: 39.19110,
//             lng: -106.81754
//       },
//       california: {
//             lat: 39.17852,
//             lng: -120.22769
//       },
//       montana: {
//             lat: 46.98927,
//             lng: -114.01456
//       },
//       newMexico: {
//             lat: 36.39309,
//             lng: -105.28501
//       },
//       utah: 
//             lat: 40.58884,
//             lng: -111.63798
//       };
//       vermont: 
//             lat: 43.67757,
//             lng: -72.77982
//       },
// };


// Option 3: ALTERNATE WITHOUT JQUERY - add this for each state after initializeMap function
/* alternate map initializer function without styles */

// var map;
// function initializeMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     // default center Aspen, Colorado
//     center: new google.maps.LatLng(39.19110,-106.81754),
//     zoom: 6
//   });
// }
// function newLocation(newLat,newLng) {
//   map.setCenter({
//     lat : newLat,
//     lng : newLng
//   });
// }
// google.maps.event.addDomListener(window, 'load', initialize);

// OR

// google.maps.event.addDomListener(document.getElementById('colorado'), 'click', function () {
//     map.setCenter(new google.maps.LatLng(39.19110,-106.81754));
// });