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
jQuery(document).ready(function() {
    var offset = 100;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('#top_button').removeClass("hidden")
            jQuery('#top_button').fadeIn(duration);
        } else {
            jQuery('#top_button').addClass("hidden")
            jQuery('top_button').fadeOut(duration);
        }
    });

    jQuery('#top_button').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});
window.scrollTo({top: 0, behavior: 'smooth'});

$(document).ready(function(){
     $("#quick_appointment_widget").validate({
    rules:{
        name:{
            required:true,
            minLength:8
        },
    },
    messages:{
        name:{
            required:"Please provide your Login",
            minLength:"Your Login must be at least 8 characters"
        },
    }
});
});