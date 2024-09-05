 $('.counter-count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
      
      //chnage count up speed here
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


 // add active class
 $(document).ready(function(){
  $('.participation-fee-row .add-class .radio-container').click(function(){
    $('.participation-fee-row .add-class .radio-container').removeClass("active");
    $(this).addClass("active");
    });
});

