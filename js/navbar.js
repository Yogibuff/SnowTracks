////////////////////////////////////////////////
//          Navbar  Event  Listeners          //
////////////////////////////////////////////////

/* Remove Map */

// 'Remove Map' on click removes both text and map 
$(document.body).ready(function () {
  $("#remove-map").on('click', function () {
    $('#map').css('opacity', '0');
    $('.jumbotron').css('display', 'none');
  });
});


/* Sponsors */

var createSponsors = function(src, sponsors) {
  var sponsors = document.getElementById("sponsors");
  var image = document.createElement('img');
  image.setAttribute('src', src);
  sponsors.appendChild(image);
};

// add event listener
var showSponsors = document.getElementById("show-sponsors");
showSponsors.addEventListener("click", function(){
  if (sponsors.children.length > 1) {
    sponsors.innerHTML = "";
  }
  else {
  createSponsors('images/snowbird-logo.png', 'sponsors');
  createSponsors('images/snocountry_logo.png', 'sponsors');
  createSponsors('images/google-maps-logo.jpg', 'sponsors');
  createSponsors('images/killington-logo.png', 'sponsors');
  createSponsors('images/mammoth-logo.jpg', 'sponsors');
  }
}, false);