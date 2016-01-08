/////////////////////////////////////////////////////////
//        Google Map  Initalizing  Function            //
/////////////////////////////////////////////////////////

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(39.17852,-120.22769),
    zoom: 6,
    scrollwheel: false // disable mouse scrolling
  });
}

// used by event-listeners.js to recenter Map with new values on click
function newLocation(newLat,newLng) {
    map.setCenter({
        lat : newLat,
        lng : newLng
    });
}


///////////////////////////////////////////
            // Styled Map //
///////////////////////////////////////////

// Create styles array for the Map, clearing map label clutter in a
// JSON object, which is passed to the mapOptions object as 'style' property

/* comment out initMap above to remove the basic map and use this styled map */
// function initMap() {
//  var styles = [
//  {
//    stylers: [
//      { hue: "#00d4ff" },
//      { saturation: 60 },
//      { lightness: -20 },
//      { gamma: 1.51 }
//    ]
//  }, {
//    featureType: "road",
//    elementType: "geometry",
//    stylers: [
//      { lightness: 100 },
//      { visibility: "simplified" }
//    ]

//  }, {
//    featureType: "water",
//    elementType: "geometry",
//    stylers: [
//      { "visibility": "off" }
//    ]
//  }, {
//    featureType: "transit",
//    stylers: [
//      { "visibility": "off" }
//    ]
//  }, {
//    // road labels OFF
//    featureType: "road",
//    elementType: "labels",
//    stylers: [
//      { visibility: "off" }
//    ]
//  }
//  ];
// // Create a new StyledMapType object to name this map setting
//  var styledMap = new google.maps.StyledMapType(styles,
//    { name: "SnowTracks" }
//    );

//  var mapOptions = {
//    center: new google.maps.LatLng(39.17852,-120.22769),
//      zoom: 6
//  };

//  var map = new google.maps.Map(document.getElementById('map'),
//      mapOptions);

//  //Associate the styled map with the MapTypeId and set it to display.
//  map.mapTypes.set('map_style', styledMap);
//  map.setMapTypeId('map_style');
// }