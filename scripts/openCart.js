/* Module */
import { loadProducts } from './module/setStorage.js';
import { numberProductReset } from './addInfo.js';


/* Constante */
const btn_card = document.querySelector('.btn_card');
const box_cart = document.querySelector('.box_cart');


/* variabile */
let checkCart = false;
let stopFlood = false;

/* Evenimente */
btn_card.addEventListener('click', checkOpenCart);


/* Functii */

function checkOpenCart() {
	if (!stopFlood) {
		stopFlood = true;
		setTimeout(() => {
			stopFlood = false;
		}, 1000);

		if (!checkCart) {
			box_cart.classList.remove('display-none');
			box_cart.classList.add('animate__bounceIn');
			loadProducts();
			numberProductReset();
		} else {
			box_cart.classList.add('animate__bounceOut');
		}
	}
}

export { checkOpenCart }


// Parcurgem pasii urmatori dupa efectuarea animatiei
box_cart.addEventListener('animationend', () => {
	if (box_cart.classList.contains('animate__bounceIn')) {
		checkCart = true;
		box_cart.classList.remove('animate__bounceIn');
		document.querySelector('.cart_counter').classList.add('display-none');
	} else if (box_cart.classList.contains('animate__bounceOut')) {
		checkCart = false;
		box_cart.classList.remove('animate__bounceOut');
		box_cart.classList.add('display-none');
		// Stergem elementele din cos la inchidere
		const item = document.querySelectorAll('.item');
		item.forEach((element) => {
			element.remove();
		})
	}
});



