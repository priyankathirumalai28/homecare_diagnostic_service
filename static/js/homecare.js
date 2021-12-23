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

