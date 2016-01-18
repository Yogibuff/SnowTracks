////////////////////////////////////////////////
//          Navbar  Event  Listeners          //
////////////////////////////////////////////////

/*  Navbar: "Remove Map" Hides and Shows Map  */
$(document.body).ready(function () {
  // Navbar: "Remove Map" removes both Jumbotron and Map
  $("#remove-map").on('click', function () {
    $('#map').css('opacity', '0');
    $('.jumbotron').css('display', 'none');
  });
  // hide sponsors on page load
  $('#sponsors').css('opacity', '0');
});

/*  Navbar: "Sponsors" images show on click  */
var createSponsors = function(src, sponsors) {
  var sponsors = document.getElementById("sponsors");
  var image = document.createElement('img');
  image.setAttribute('src', src);
  sponsors.appendChild(image);
};

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

/*  Navbar: "About Us" swaps Jumbotron text content  */
// removes the need for about-us.html
var jumbotronText = document.getElementById('jumbotron-text'),
    aboutUs = document.getElementById('swap-jumbotron');

var styleAboutUs = function() {
  var lines = jumbotronText.getElementsByTagName("hr");
  $(lines).attr("id", "content-split");
  var aboutUsText = jumbotronText.getElementsByTagName("ul");
  $(aboutUsText).attr("id", "about-list");
};

aboutUs.addEventListener("click", function() {
  var jumbotronText = document.getElementById('jumbotron-text');
  jumbotronText.innerHTML = "";
  jumbotronText.innerHTML = "<hr><hr><ul><li><h4>Generate a Google Map instantly - no waiting!</h4></li><li><h4>View daily snow conditions submitted by the pros, accessed through the ©SnoCountry API</h4></li><li><h4>Choose from the <b>Top 4</b> Resorts within the <b>Top 6</b> States, thats <b>24 amazing options!</b></h4></li>"
  ;
  styleAboutUs();
});



// <hr> id="content-split"
// <hr> id="content-split"
// <ul> id="about-list"
//   <li><h4>Generate a Google Map instantly - no waiting!</h4></li>
//   <li><h4>View daily snow conditions submitted by the pros, accessed through the ©SnoCountry API</h4></li>
//   <li><h4>Choose from the <b>Top 4</b> Resorts within the <b>Top 6</b> States, thats <b>24 amazing options!</b></h4></li>


// "
//     <hr id="content-split">
//      <hr id="content-split">
//      <ul id="about-list">
//         <li><h4>Generate a Google Map instantly - no waiting!</h4></li>
//         <li><h4>View daily snow conditions submitted by the pros, accessed through the ©SnoCountry API</h4></li>
//         <li><h4>Choose from the <b>Top 4</b> Resorts within the <b>Top 6</b> States, that\'s <b>24 amazing options!</b></h4></li>
//     "