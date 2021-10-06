$(':radio').change(function() {
  console.log('New star rating: ' + this.value);
    });
    $(".service").click(function() {
    $('html, body').animate({
        scrollTop: $(".services").offset().top
    }, 2000);   
});
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
$(document).ready(function() {
    $('#book_appointment').click(function(e) {
    e.preventDefault();
        $('html, body').animate({
          scrollTop: $("#book_appointment_form").offset().top
        }, "fast");
    });
});
$(document).ready(function() {
    $('#service').click(function(e) {
    e.preventDefault();
        $('html, body').animate({
          scrollTop: $(".services").height()
        }, "fast");
    });
});

$('#basicModal').modal('show');
