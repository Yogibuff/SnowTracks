// BEGIN on'click' listners for each State's id
$(document.body).ready(function () {
  $("#california").on('click', function () {
    newLocation(39.17852,-120.22769);
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
});