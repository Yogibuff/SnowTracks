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
//   var sponsors = document.getElementById("sponsors");
//   sponsors.firstChild.nodeValue = "picture 1 - sponsors going to be added as in-line children elements of #sponsors";
// }

// add event listener
// var showSponsors = document.getElementById("show-sponsors");
// showSponsors.addEventListener("click", insertSponsors, false);