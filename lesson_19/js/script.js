

document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.top-header__icon')) {
		document.documentElement.classList.toggle('menu-open');
	}
})