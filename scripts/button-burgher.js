/* Constante */
const button_menu = document.querySelector('.button-menu');
const button_menu_item = document.querySelectorAll('.button-menu-item');
const menu = document.querySelector('#menu');

/* Variabile */
let openMenu = false;

/* Evenimente */
button_menu.addEventListener('click', menuMobile);


/* Functii */
function menuMobile() {
	if (!openMenu) {
		button_menu_item.forEach((element) => {
			element.classList.add('active');
		});
		menu.classList.remove('desktop-menu');
		menu.classList.add('mobile-menu');
		document.body.style.overflow = 'hidden';
		document.body.classList.add('active');
		if (menu.classList.contains('mobile-menu')) {
			setTimeout(() => {
				menu.classList.add('active');
				openMenu = true;
			}, 1)
		}
	} else {
		menu.classList.remove('active');
		setTimeout(() => {
			button_menu_item.forEach((element) => {
				element.classList.remove('active');
			});
			menu.classList.add('desktop-menu');
			menu.classList.remove('mobile-menu');
			document.body.style.overflow = 'auto';
			document.body.classList.remove('active');
			openMenu = false;
		}, 300)
	}
}