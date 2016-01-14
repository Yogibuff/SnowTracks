////////////////////////////////////////////////
//          Navbar  Event  Listeners          //
////////////////////////////////////////////////

/* Navbar: Hide and Show Map and Sponsors on click */

$(document.body).ready(function () {
  // Navbar: 'Remove Map' removes both text and map, show on click
  $("#remove-map").on('click', function () {
    $('#map').css('opacity', '0');
    $('.jumbotron').css('display', 'none');
  });
  // hide sponsors on page load
  $('#sponsors').css('opacity', '0');
});

var createSponsors = function(src, sponsors) {
  var sponsors = document.getElementById("sponsors");
  var image = document.createElement('img');
  image.setAttribute('src', src);
  sponsors.appendChild(image);
};

// Navbar: 'Sponsors' images show on click
var showSponsors = document.getElementById("show-sponsors");
showSponsors.addEventListener("click", function() {
  if (sponsors.children.length > 1) {
    sponsors.innerHTML = "";
    sponsors.style.opacity = 0;
  }
  else {
  createSponsors('images/snowbird-logo.png', 'sponsors');
  createSponsors('images/snocountry_logo.png', 'sponsors');
  createSponsors('images/google-maps-logo.jpg', 'sponsors');
  createSponsors('images/killington-logo.png', 'sponsors');
  createSponsors('images/mammoth-logo.jpg', 'sponsors');
  // show footer white background on click
  sponsors.style.opacity = 1;
  }
}, false);