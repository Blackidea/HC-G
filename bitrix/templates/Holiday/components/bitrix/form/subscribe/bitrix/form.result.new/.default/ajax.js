$(document).on('submit', 'form[name="SIMPLE_FORM_3"]', function(e) {

        event.preventDefault();
        var formData = $(this).serialize();
        $.ajax({
             type: "POST",
             url: "/ajax-forms/subscribe.php",
             data: formData,
             success: function(msg) {
                  //alert( "Прибыли данные: " + msg );
                 if (msg == "Y") {
                    $('.shadow_site').show();
                    $('#popup_feedback_sendOK').show();
                    
                     
                     //feedback.find('.o-modalHeading').html('Спасибо за заявку!');
                     //feedback.attr('data-sent', 'y');
                    $('form[name="SIMPLE_FORM_3"]').find('input[type=text]').each(function(indx, element){
                       $(element).val('');
                     })
                     $('.errortext').html("");
                      
                     // Все ок , форма отправлена 
                     setTimeout(function(){
                        $('#popup_feedback_sendOK').hide();
                        $('.shadow_site').hide();
                       },
                     3000)
                 } else {
                     $('.subscribe-form-wrapper').html(msg);
                 }
             }
         });

})


    