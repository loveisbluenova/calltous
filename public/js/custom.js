jQuery(document).ready(function(){
    
  jQuery( "#contactform" ).on('submit',function(e){

        jQuery.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')
            }
        })

        e.preventDefault(); 
        var formData = {
            name: jQuery('#name').val(),
            email: jQuery('#email').val(),
            phone_no: jQuery('#phone_no').val(),
            moving_from: jQuery('#moving_from').val(),
            moving_to: jQuery('#moving_to').val(),
            message: jQuery('#message').val(),
        }
        console.log(formData);
        var type = "POST"; //for creating new resource
        var my_url = '/sendmessage';

        jQuery.ajax({
            type: type,
            url: my_url,
            data: formData,
            dataType: 'json',
            success: function (data) {                        
                var success_alert = '<div class="elementor-message elementor-message-success" role="alert">The Message was sent successfully.</div>';
                jQuery('#contactform').after(success_alert);  
            },
            error: function (data) {
                var error_alert = '<div class="elementor-message elementor-message-danger" role="alert">error</div>';
                jQuery('#contactform').after(success_alert);  
            }
        });
    });
 
});