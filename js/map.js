// apply listener for click event to whole li
// $(".states").on('click', 'li', function(e) {
//    console.log($(this).attr("class"));
// });


// onclick events trigger location lat lng values send to initMap function
$(".california").on('click', function(e) {
      userLocation = 'california';
      mapCenterOn(locations[userLocation].lat, locations[userLocation].lng);
});
onclick {
      userLocation = 'colorado';
      mapCenterOn(locations[userLocation].lat, locations[userLocation].lng);
};
onclick {
      userLocation = 'montana';
      mapCenterOn(locations[userLocation].lat, locations[userLocation].lng);
};
onclick {
      userLocation = 'newMexico';
      mapCenterOn(locations[userLocation].lat, locations[userLocation].lng);
};
onclick {
      userLocation = 'utah';
      mapCenterOn(locations[userLocation].lat, locations[userLocation].lng);
};
onclick {
      userLocation = 'vermont';
      mapCenterOn(locations[userLocation].lat, locations[userLocation].lng);
};

function eventListeners(locations) {
  var states = getElementByClassName("states");
  
  for (var i = 0; i < 6; i++) {
    var elId = locations[i];
    var el = document.getElementById(elId);
    el.addEventListner('click', function(e) {
      e.preventDefault();
      var userLocation = locations[i];
      mapCenterOn(locations[userLocation].lat, locations[userLocation].lng);
    });
  }
}

var locations = {
      colorado: { 
            lat: 39.19110,
            lng: -106.81754
      },
      california: {
            lat: 39.17852,
            lng: -120.22769
      },
      newMexico: {
            lat: 36.39309,
            lng: -105.28501
      },
      montana: {
            lat: 46.98927,
            lng: -114.01456
      },
      vermont: 43.67757,
            lng: -72.77982
      },
      utah: 40.58884,
            lng: -111.63798
      };
};


function initMap() {

            // Create an array of styles.
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

            // Create a new StyledMapType object, passing it the array of styles,
            // as well as the name to be displayed on the map type control.
            var styledMap = new google.maps.StyledMapType(styles,
              {name: "Styled Map"});

            var mapOptions = {
              zoom: 11,
              center: new google.maps.LatLng(locations),
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