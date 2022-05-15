$(document).ready(function () {
    'use strict';
    
// sticky header
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });
	
	$(() => {
		if ($('header').hasClass('sticky'))
			$('#nav-placeholder').show();
		else
			$('#nav-placeholder').hide();

		$('#nav-placeholder').height($('header').height() + 'px');
	});

	$(window).on('scroll', () => {
		if ($('header').hasClass('sticky'))
			$('#nav-placeholder').show();
		else
			$('#nav-placeholder').hide();
	});

    
// Mobile Nav toggle
    $('header nav .bars').click(function () {
        $(this).next('header nav .links-list').slideToggle();
		$(this).children('.nav-btn').toggleClass('on');
        $(this).parents('header nav').toggleClass('active');
    });
    
    
//    scroll top btn
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });
    $('#scroll-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });
	
// quantity plus/minus
	// Plus
	$('.quantity .plus-btn').click(function (e) {
		e.preventDefault();
		let quantityInput = $(this).prev('.quantity-input');
		let getVal = quantityInput.val();
		getVal ++;
		quantityInput.val(getVal);
	});
	// Sub
	$('.quantity .minus-btn').click(function (e) {
		e.preventDefault();
		let quantityInput = $(this).next('.quantity-input');
		let getVal = quantityInput.val();
		if(getVal > 1) { getVal -- }
		quantityInput.val(getVal);
	});

// credit card info show
	$('.checkout-section .checkout-form .payment-check').click(function () {
		if($('#credit-payment').is(':checked')) {
			$('#credit-card-info').slideDown();
		} else {
			$('#credit-card-info').slideUp();
		}
	});
	
// price range
	try {
		$(".js-range-slider").ionRangeSlider();
	} catch {}
    
// Product Details Slider
	$('.pdetails-largeimages').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		nextArrow: '.product-details-area .slider-btn.next',
        prevArrow: '.product-details-area .slider-btn.prev',
		fade: true,
		asNavFor: '.pdetails-thumbs'
	});

	$('.pdetails-thumbs').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.pdetails-largeimages',
		arrows: false,
		dots: false,
		focusOnSelect: true,
		vertical: false
	});    


});

