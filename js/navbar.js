////////////////////////////////////////////////
//          Navbar  Event  Listeners          //
////////////////////////////////////////////////

// 'Remove Map' on click removes both text and map 
$(document.body).ready(function () {
  $("#remove-map").on('click', function () {
    $('#map').css('opacity', '0');
    $('.jumbotron').css('display', 'none');
  });
});

$(document.body).ready(function () {
  //Stack menu when collapsed
  $('navbar-sandwich').on('show.navbar-collapse', function() {
      $('.nav-pills').addClass('nav-stacked');
  });

  //Unstack menu when not collapsed
  $('navbar-sandwich').on('hide.navbar-collapse', function() {
      $('.nav-pills').removeClass('nav-stacked');
  });
});

// 'Remove Map' nav button just hides #map
// $("#remove-map").click(function () {
//   $('#map').css('opacity', '0');
// });


// // Function to change the content to about page
// function aboutJumbotron() {
//   var jumbotron = document.getElementById("jumbotron");
//   jumbotron.child[4].nodeValue = "About content, line by line";
// }

// // add event listener for 'about' on the navbar
// var aboutClicked = document.getElementById("outside");
// aboutClicked.addEventListener("click", aboutJumbotron, false);


// // Function to change the content to contact page
// function contactJumbotron() {
//   var jumbotron = document.getElementById("jumbotron");
//   jumbotron.child[4].nodeValue = "Contact jumbotron content, line by line";
// }


// // add event listener for 'contact' on the navbar
// var contactClicked = document.getElementById("outside");
// contactClicked.addEventListener("click", contactJumbotron, false);



// // Function to change the content
// function insertSponsors() {
//   var jumbotron = document.getElementById("jumbotron");
//     jumbotron.firstChild.nodeValue = "pictures of sponsors go in-line here";
// }

// // add event listener
// var sponsored = document.getElementById("sponsors");
// sponsored.addEventListener("click", insertSponsors, false);