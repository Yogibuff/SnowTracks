var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(39.17852,-120.22769),
    zoom: 6
  });
}

function newLocation(newLat,newLng) {
    map.setCenter({
        lat : newLat,
        lng : newLng
    });
}

//if jumbotron exists, hide map
// function hideMap() {
// 	if($('.jumbotron').length){
// 	   $('#map').hide();
// 	}
// }