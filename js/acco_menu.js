let menuAcco = document.querySelector('.menu__list'),
	menuItems = menuAcco.children

menuAcco.addEventListener('click', function (event) {
let target = event.target
	if (!target.classList.contains('menu__item-title')) {
		return
	}

event.preventDefault()
	target = target.parentNode
	if (target.classList.contains('menu__item-active')) {
			target.classList.remove('menu__item-active')
			return
	} else {
			for (var i = 0; i < menuItems.length; i++) {
					menuItems[i].classList.remove('menu__item-active')
					target.classList.add('menu__item-active')
			}
		}
})

$('.cross__menu').click(function(e) {
	e.preventDefault();
  $('.menu__item').removeClass('menu__item-active'); 
});

$(document).on('click', (e) => {
	const $this = $(e.target);
	
	if (!$this.closest('.menu__list').length) {
		$('.menu__item').removeClass('menu__item-active')
	}
});