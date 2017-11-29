$('.burgers__list').slick({
	prevArrow: $('.arrow-left'),
	nextArrow: $('.arrow-right')
});

$('.arrow-left').on('click', (e) => {
	e.preventDefault();
});

$('.arrow-right').on('click', (e) => {
	e.preventDefault();
});