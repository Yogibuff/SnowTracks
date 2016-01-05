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

// add sponsor logos to .container #sponsors
// function insertSponsors() {
//   var sponsorImages = document.getElementById("sponsors").children;
  
//   // if sponsor image exists, remove it on click instead
//   if (sponsorImages.length > 1) {
//     sponsorImages.nodeValue = "";
//   }
//   else {
//     sponsorImages[0].nodeValue = " <img src='images/snowbird-logo.png'> ";
//     sponsorImages[1].nodeValue = " <img src='images/snocountry_logo.png'> ";
//     sponsorImages[2].nodeValue = " <img src='images/google-maps-logo.jpg'> ";
//     sponsorImages[3].nodeValue = " <img src='images/killington-logo.png'> ";
//     sponsorImages[3].nodeValue = " <img src='images/mammoth-logo.jpg'> ";
//   }
// }

var createSponsors = function(src, sponsors) {
  var sponsors = document.getElementById(sponsors);
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