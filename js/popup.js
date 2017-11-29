$('.burger__comp').on('click', function(e) {
	e.preventDefault();
	$(this).toggleClass('burger__comp-active');
    $(this).children('.burger__comp-active');  
})

$('.order-form').on('submit', function(e) {
	e.preventDefault();
	$('.form__modal').addClass('form__modal-active');
})

$('.form-close').on('click', function(e) {
	e.preventDefault();
	$('.form__modal').removeClass('form__modal-active');
})

$('.review__more-link').on('click', function(e) {
	e.preventDefault();
	$('.overlay__container').addClass('overlay__container-active');
	$('.review__overlay').addClass('review__overlay-active');
	$('body').addClass('disabled-onepage-scroll');
	$('body').addClass('disabled-onepage-scroll-reviews');
})

$('.review__close').on('click', function(e) {
	e.preventDefault();
	$('.overlay__container').removeClass('overlay__container-active');
	$('.review__overlay').removeClass('review__overlay-active');
	$('body').removeClass('disabled-onepage-scroll');
	$('body').removeClass('disabled-onepage-scroll-reviews');	
})