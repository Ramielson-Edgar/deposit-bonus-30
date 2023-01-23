$(function() {
    var owl = $('.deposit-30-slide'),

        owlOptions = {
          loop: false,
			    margin: 30,
			    smartSpeed: 700,
			    nav: false,
			    items: 1
        };

    if ( $(window).width() < 575 ) {
        var owlActive = owl.owlCarousel(owlOptions);
    } else {
        owl.addClass('off');
    }

    $(window).resize(function() {
        if ( $(window).width() < 575 ) {
            if ( $('.deposit-30-slide').hasClass('off') ) {
                var owlActive = owl.owlCarousel(owlOptions);
                owl.removeClass('off');
            }
        } else {
            if ( !$('.deposit-30-slide').hasClass('off') ) {
                owl.addClass('off').trigger('destroy.owl.carousel');
                owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
            }
        }
    });
});