$('.team__title').on('click', (e) => {
	e.preventDefault()

	const $this = $(e.target)
	const item = $this.closest('.team__member')
	const container = $this.closest('.team__list')
	const items = container.find('.team__member')
	const content = item.find('.team__member-text')

	if (!item.hasClass('team__member-active')) {

		items.removeClass('team__member-active')
		item.addClass('team__member-active')
		content.slideDown()

	} else {

		item.removeClass('team__member-active')
		content.slideUp()

	}
});