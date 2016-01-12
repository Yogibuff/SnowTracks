/////////////////////////////////////////////////////////
//        Google Map  Initalizing  Function            //
/////////////////////////////////////////////////////////

var map;
function initMap() {
    //map options
  var mapOptions = {
    zoom: 6,
    scrollwheel: false, // disable mouse scrolling
    center: new google.maps.LatLng(39.17852,-120.22769),
    panControl: false,
    panControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_LEFT
    },
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
      position: google.maps.ControlPosition.RIGHT_CENTER
    },
    scaleControl: false
    };

  map = new google.maps.Map(document.getElementById('map'), mapOptions);

 // create array of location data within an object locations
 // access the individual resort data to create Map using locations.resorts[i]

  var resorts = [  
    {
      name: "Heavenly",
      web: "https://goo.gl/maps/Z1fYLwbjT1o",
      Lng: -119.93175,
      Lat: 38.93758
    }, 
    {
      name: "Alpine Meadows",
      web: "https://goo.gl/maps/QfaH3dkJ2H82",
      Lng: -120.24011,
      Lat: 39.16336
    },
    {
      name: "Squaw Valley",
      web: "https://goo.gl/maps/zkGrtgyMgbD2",
      Lng: -120.23703,
      Lat: 39.18979
    },
    {
      name: "Mammoth",
      web: "https://goo.gl/maps/GftQXeFNAK32",
      Lng: -119.03830,
      Lat: 37.65061
    },
    {
      name: "Vail",
      web: "https://goo.gl/maps/PjvSwH5r2DQ2",
      Lng: -107.84852,
      Lat: 39.606148
    }, 
    {
      name: "Telluride",
      web: "https://goo.gl/maps/LMQPdj9qx4N2",
      Lng: -106.35716,
      Lat: 38.93758
    },
    {
      name: "Keystone",
      web: "https://goo.gl/maps/4vSYUqEZRGv",
      Lng: -105.97870,
      Lat: 39.605335
    },
    {
      name: "Breckenridge",
      web: "https://goo.gl/maps/csRjiH2wTDo",
      Lng: -106.06906,
      Lat: 39.48051
    },
    {
      name: "Big Sky",
      web: "https://goo.gl/maps/4qcfsDhbNP22",
      Lng: -111.40285,
      Lat: 45.28563
    },
    {
      name: "Bridger Bowl",
      web: "https://goo.gl/maps/uZK9TBce7s62",
      Lng: -110.91347,
      Lat: 45.81937
    }, 
    {
      name: "Whitefish",
      web: "https://goo.gl/maps/wAHXiowRY492",
      Lng: -114.35686,
      Lat: 48.48918
    },
    {
      name: "Snowbowl",
      web: "https://goo.gl/maps/mMswD9tuBHK2",
      Lng: -114.00286,
      Lat: 47.01415
    },
    {
      name: "Taos Ski Valley",
      web: "https://goo.gl/maps/Au1HK6q33yP2",
      Lng: -105.47113,
      Lat: 36.59244
    }, 
    {
      name: "Apache",
      web: "https://goo.gl/maps/TuD8N9MqVGU2",
      Lng: -105.79095,
      Lat: 33.39734
    },
    {
      name: "Pajarito",
      web: "https://goo.gl/maps/qi1RVSuPWNG2",
      Lng: -106.40218,
      Lat: 35.88897
    },
    {
      name: "Angel Fire",
      web: "https://goo.gl/maps/nNY1N6XjQZx",
      Lng: -105.27557,
      Lat: 36.38749
    }, 
    // Utah
    {
      name: "Alta",
      web: "https://goo.gl/maps/WJuhZRh8yB22",
      Lng: -111.63095,
      Lat: 40.59083
    },
    {
      name: "Solitude",
      web: "https://goo.gl/maps/vW8p77rJCFJ2",
      Lng: -111.59419,
      Lat: 40.61907
    },
    {
      name: "Park City",
      web: "https://goo.gl/maps/AW7UBpu8xjS2",
      Lng: -111.51047,
      Lat: 40.65108
    }, 
    {
      name: "Snowbird",
      web: "https://goo.gl/maps/fmNjHuHeE282",
      Lng: -111.65896,
      Lat: 40.58103
    },
    {
      name: "Killington",
      web: "https://goo.gl/maps/2LppvdhvH7v",
      Lng: -72.80460,
      Lat: 43.61779
    },
    {
      name: "Jay Peak",
      web: "https://goo.gl/maps/pcU13aYQDcv",
      Lng: -72.50737,
      Lat: 44.93490
    }, 
    {
      name: "Smugglers Notch",
      web: "https://goo.gl/maps/LEfWCQudKq32",
      Lng: -72.79063,
      Lat: 44.58911
    },
    {
      name: "Stratton",
      web: "https://goo.gl/maps/TGBQ9eGL8oy",
      Lng: -72.91031,
      Lat: 43.11344
    }
  ]; // close resorts object

  for (var i = 0; i < resorts.length; i++) {
    new google.maps.Marker({
        position: { lat: resorts[i].Lat, lng: resorts[i].Lng },
        map: map,
        title: resorts[i].name
      });
  } 

  // add multiple marker info windows

} // close initMap()

// Used by event-listeners.js
function newLocation(newLat,newLng) {
    map.setCenter({
        lat : newLat,
        lng : newLng
    });
}