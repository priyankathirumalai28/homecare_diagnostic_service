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

$(document).ready(function () {
    $("#hcds_appointment").click(function(){
         $('#appointment_modal').modal('show');
    });
    $("#hcds_feedback").click(function(){
         $('#feedbackmodel').modal('show');
    });
     $("#hcds_call_request").click(function(){
         $('#call_back_request_model').modal('show');
    });
    $("#hcds_package").click(function(){
         $('#package_modal').modal('show');
    });
    $("#hcds_offer").click(function(){
         $('#offer_modal').modal('show');
    });
    $("#hcds_service").click(function(){
         var hash = this.hash;
              $('html, body').animate({
                  scrollTop:  $('#service').offset().top
                }, 500);
              return false;
            });

});

