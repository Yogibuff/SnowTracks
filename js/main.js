  ///////////////////////
 //  Event listeners  //
///////////////////////

var resorts = document.getElementsByClassName("submitResort");

function submitResortId() {
  var resortId = this.getAttribute('data-resortId');
  callApi(resortId);
}

// iterate through resorts, add event listeners so each sends correct query URL to SnowCountry API
for (var i = 0; i < resorts.length; i++) {
  resorts[i].addEventListener("click", submitResortId);
}

// new XML Http Request to retrieve data from SnoCountry API
function callApi(resortId) {
  // send HTTP requests to Express server and load the response data
  var xhr = new XMLHttpRequest();
  // bring the response to the front-end onload (when the API server responds)
  xhr.onload = function() {
    // if status is good, take the API response and parse into JSON
    if (xhr.status == 200) {
      response = JSON.parse(xhr.responseText);
      
      // returned data 
      var weatherData = response.items[0];
      var viewReport = document.getElementById("populate-report");
      
      ///////////////////////////////////////////////////////
      //  Populate Front End with SnoCountry return data  //
      /////////////////////////////////////////////////////
      
      // Powder report opens modal and populates with the most recently recieved SnoCountry data
      viewReport.addEventListener("click", function() {

        // test resort name, if data already exists, clear fields
        var reportHeader = document.getElementById("report-header").value;
        var checkHeader = function() {  
          if (reportHeader === weatherData.resortName) {
            // if the requested data matches currently displayed data, do nothing
            return;
          }
          else {
            var conditions = document.getElementById("conditions"),
                snowQuality = document.getElementById("snow-quality"),
                terrainParkContent = document.getElementById("terrain-park"),
                resortCam = document.getElementById("resort-cam");
                snowfall = document.getElementById("modal-test");
            document.getElementById("report-header").innerHTML = "";
            snowfall.innerHTML = "";
            conditions.innerHTML = "";
            snowQuality.innerHTML = "";
            terrainParkContent.innerHTML = "";
            resortCam.innerHTML = "";
          }
        };
        checkHeader();

        var populateReport = function() {
          // insert resort name
          $("#report-header").prepend(weatherData.resortName);
          
          // display recent inches of snowfall
          var recentSnow = weatherData.snowLast48Hours;
          var showRecentSnow = function() {
            var recentSnow = response.items[0].snowLast48Hours,
                snowfall = $("#modal-test");
            if (recentSnow !== snowfall) {
              snowfall.innerHTML = "";
            }
            if (recentSnow < 1 || recentSnow === null) {
              $("#modal-test").css("background-color", "rgba(225, 29, 33, 0.7)");
              return "0";
            }
            if (recentSnow <= 2) {
              // 0 - 2 inches is colored in red for a poor powder report
              $("#modal-test").css("background-color", "rgba(225, 29, 33, 0.7)");
              return recentSnow;
            }
              // 3 - 4 inches is colored in orange for passable condtions
            if ((recentSnow > 2) && (recentSnow <= 4)) {
              $("#modal-test").css("background-color", "rgba(235, 118, 32, 0.7)");
              return recentSnow;
            }
              // 6 - 7 inches is colored in yellow for decent conditions
            if ((recentSnow > 5) && (recentSnow <= 7)) {
              $("#modal-test").css("background-color", "rgba(251, 202, 4, 0.67)");
              return recentSnow;
            }
              // 8 or more inches is green for excellent conditions
            if (recentSnow > 8) {
              $("#modal-test").css("background-color", "rgba(57,152,0,0.6)");
              return recentSnow;
            }
            // if there is no change, do nothing
            else {
              return;
            }
          };

          // insert inches of snowfall (number value)
          $("#modal-test").append(showRecentSnow).append(" inches of new snowfall");

          // insert today's weather description (sentence)
          $("#conditions").append(weatherData.weatherToday_Condition);

          // insert surfact conditon (snow description in a few words)
          $("#snow-quality").append(weatherData.primarySurfaceCondition);

          // return terrain park status, unless the length of the string is less than 1 - then put n/a
          var terrainParkStatus = function() {
            var terrainPark = response.items[0].terrainParkOpen,
                activeParkStatus = document.getElementById("terrain-park");
            // if the same park is called, do nothing; if terrain park data does not exist, print "n/a"; if they do not match print new
            if (terrainPark !== activeParkStatus) {
            }
            if ((terrainPark.length < 1) || (terrainPark == "no")) {
              $("#terrain-park").css("background-color", "rgba(225, 29, 33, 0.7)");
              return "Terrain Park not available";
            }
            if (terrainPark == "yes") {
              $("#terrain-park").css("background-color", "rgba(57,152,0,0.6)");
              return "Terrain Park is OPEN!";
            }
            else {
              return;
            }
          };
          // insert status of the resort's terrain park (open / closed)
          $("#terrain-park").append(terrainParkStatus);
          
          // insert resort webcam URL as href property of the webcam button
          $("#resort-cam").prop('href', weatherData.webCamLink);
        };
        populateReport();
      }, false);
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



/*  Powder Report - Populate Modal  */
//selected data values from data array within "items" object
    

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