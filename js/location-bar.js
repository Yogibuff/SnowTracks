// Different Options for deploying Event Listeners for each of the 6 States and 24 total Resorts located in the location bar

// adding resorts as child elements of the parent (State abbreviateion) + '-' + 'resorts', ex: "ca-resorts"

// add event listener
// var heavenly = document.getElementById("heavenly");
// heavenly.addEventListener("click", queryHeavenlyCa, false);

// Function to set SnoCountry query URL
//function insertResortUrl() {
//  var ca = document.getElementByClass("ca-resorts");
//  ca.firstChild.(selected Resort Heavenly, set variables for state=ca and resort name for api.js to grab and make the request URL) : 
//    var state = 'ca';
//    var resort = 'heavenly';
//  };
//  ca.secondChild.(select Resort Apline Meadows)
//    var state = 'ca';
//    var resort = 'alpineMeadows';
//  };
//}
/*
Each resort is located at:
$('locations_box > a') 

use "this" to match text from the element to the case where that SnoCountry API is written out fully with the state and resort name inserted


eventListener 'click'


// start here
$(document.body).ready(function () {
  $(".locations_box > a").on('click', function () {
    // on 'click', store the text inside the <a> element, which is the resort's name stored as a reference in the variable "resort"
    var elName = resort;
    // display the SnoCountry data (yet to be created)
    $('#snoCountryOutput').css('display', 'visible');
  });
});

// List checking the clicked element's name (resort the user wants weather info on)
if (this = calResort1) {
  
}
if (this = californiaResort2) {
  
}
if (this = californiaResort3) {
  
}
if (this = californiaResort4) {
  
}

if (this = coloradoResort1) {
  
}
if (this = coloradoResort2) { 

}
if (this = coloradoResort3) {
  
}
if (this = coloradoResort4) {
  
}

// if this element clicked was a montana resort, then find its URL from resort-data.js and send the URL to api.js for querying SnoCountryAPI
if (this = montanaResort1) {
  
}
if (this = montanaResort2) {
  
}
if (this = montanaResort3) {
  
}
if (this = montanaResort4) {
  
}
// etc...


/* IDEA 2 - possible to add Resort on 'click' listeners to event-listeners.js 
so that child elements[1-4] send the clicked resort name and state variables for api.js 
(the SnoCountry API URL) */

/*
// BEGIN on'click' listners for each State's id
$(document.body).ready(function () {
  $("#california").on('click', function () {
    newLocation(39.17852,-120.22769);
    $('#map').css('height', '400px');
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
  // 'click' event on any State checks for jumbotron, if visible - hides it
  $(".states").on('click', function () {
    if($('.jumbotron').is(':visible')) {
      $('.jumbotron').css('display', 'none');
    }
  });
  //sets map to visible when any State clicked
  $(".states").on('click', function () {
    if($('#map').not(':visible')) {
      $('#map').css('opacity', '1');
    }
  });
  
});
*/