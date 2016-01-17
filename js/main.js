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
      // returned data 
      var weatherData = response.items[0];
      console.log(response.items[0]);

      // clear Powder Report modal, then re-populate with data from the most recently clicked resort
      var viewReport = document.getElementById("populate-report");

      viewReport.addEventListener("click", function() {
        // var modalTest = document.getElementById("modalTest");
        // if (modalTest.length > 1) {
        //   var reportHeader = document.getElementById("report-header"),
        //       conditions = document.getElementById("conditions"),
        //       snowQuality = document.getElementById("snow-quality"),
        //       terrainParkContent = document.getElementById("terrain-park"),
        //       resortCam = document.getElementById("resort-cam");
        //   resortCam.innerHTML = "";
        //   reportHeader.innerHTML = "";
        //   conditions.innerHTML = "";
        //   snowQuality.innerHTML = "";
        //   terrainParkContent.innerHTML = "";
        // }
        // return terrain park status, unless the length of the string is less than 1 - then put n/a
        var terrainPark = weatherData.terrainParkOpen;
        var terrainParkStatus = function() {
          if (terrainPark.length < 1) {
            return "n/a";
          }
          else {
            return terrainParkStatus;
          }
        };

        // insert resort name before existing content
        $("#report-header").prepend(weatherData.resortName);

        // return recent snow in inches, if < 1 inch, put "0"
        var showRecentSnow = function() {
          var recentSnow = weatherData.snowLast48Hours;
          if (recentSnow.value < 1) {
            return "0";
          }
          if (recentSnow.value <= 2) {
            // 0 - 2 inches is colored in red for a poor powder report
            $("#snowfall").css("background-color", "rgba(225, 29, 33, 0.7)");
          }
            // 3 - 4 inches is colored in orange for passable condtions
          if (recentSnow.value > 2 && recentSnow.value <= 4) {
            $("#snowfall").css("background-color", "rgba(235, 118, 32, 0.7)");
          }
            // 6 - 7 inches is colored in yellow for decent conditions
          if (recentSnow.value > 5 && recentSnow.value <= 7) {
            $("#snowfall").css("background-color", "rgba(251, 202, 4, 0.67)");
          }
            // 8 or more inches is green for excellent conditions
          if (recentSnow.value > 8) {
            $("#snowfall").css("background-color", "rgba(57,152,0,0.6)");
          }
          else {
            return recentSnow;
          }
        };

        // insert inches of snowfall (number value)
        $("#snowfall").append(showRecentSnow).append(" inches of new snowfall");
        // console.log(response.items[0].snowLast48Hours);
        // console.log(response.items[0].lastSnowFallDate);

        // insert today's weather description (sentence)
        $("#conditions").append(weatherData.weatherToday_Condition);

        // insert surfact conditon (snow description in a few words)
        $("#snow-quality").append(weatherData.primarySurfaceCondition);

        // insert status of the resort's terrain park (open / closed)
        $("#terrain-park").append(weatherData.terrainParkOpen);
        
        // insert webcam of resort
        $("#resort-cam").append(weatherData.webCamLink);
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

///////////////////////////////////////////////////////
//  Populate Front End with SnoCountry return data  //
/////////////////////////////////////////////////////

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