$(function() {
  $('#datepicker').datetimepicker({
  minDate:new Date(),
  format: 'YYYY-MM-DD',
  });
});
$(function() {
  $('#timepicker').datetimepicker({
format: 'LT'
  });
});

// for scroll down to the Services list div
$(document).ready(function() {
          $('a[href^="#service"]').click(function() {
          var hash = this.hash;
              $('html, body').animate({
                  scrollTop:  $(hash).offset().top
                }, 500);
              return false;
            });
        });


var map;

google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {
   var mapCanvas = document.getElementById('map');
   var mapOptions = {
      center: new google.maps.LatLng(44.5403, -78.5463),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
   }
   map = new google.maps.Map(mapCanvas, mapOptions)
}

$('#location-model').on('shown.bs.modal', function () {
    google.maps.event.trigger(map, "resize");
});