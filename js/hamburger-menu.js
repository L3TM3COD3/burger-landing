const strokes = document.querySelectorAll('.hamburger__line');
const hamburger = document.querySelector('.hamburger');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const body = document.querySelector('body');

function transform(e) {
	e.preventDefault();
	strokes[0].classList.toggle('hamburger__line_top-js');
	strokes[1].classList.toggle('hamburger__line_hide-js');
	strokes[2].classList.toggle('hamburger__line_bottom-js');
	hamburgerMenu.classList.toggle('hamburger-menu__active');
	body.classList.toggle('disabled-onepage-scroll');
	body.classList.toggle('body-active-menu');
}

hamburger.addEventListener("click", transform);

$('.nav__link').click(function(e){  
	e.preventDefault();
	$('.hamburger-menu').removeClass('hamburger-menu__active');
	$('body').removeClass('disabled-onepage-scroll');
	body.classList.remove('body-active-menu');
	
	strokes[0].classList.remove('hamburger__line_top-js');
	strokes[1].classList.remove('hamburger__line_hide-js');
	strokes[2].classList.remove('hamburger__line_bottom-js');
});