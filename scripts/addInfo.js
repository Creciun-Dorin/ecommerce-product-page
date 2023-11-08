/* Module */
import dataDB from './module/dataBD.js';
import { setStorage, loadProducts } from './module/setStorage.js';


/* Constante */
const btn_down = document.querySelector('.btn_down');
const btn_up = document.querySelector('.btn_up');
const add_to_cart = document.querySelector('.add_to_cart');

/* Variabile */
let counter = 1;
let data;
let numberProds = 0;

/* Evenimente */
window.addEventListener('DOMContentLoaded', addInfo);
btn_down.addEventListener('click', removeCounter);
btn_up.addEventListener('click', addCounter);
add_to_cart.addEventListener('click', addToCart);

/* Functii */
async function addInfo() {
	data = await dataDB();
	document.querySelector('.content-text h1').innerText = data.name;
	document.querySelector('.content-text p').innerText = data.description;
	document.querySelector('.discount').innerText = data.discount + '%';
	document.querySelector('.price').innerText = '$' + data.price.toFixed(2);

	const initialFinalPrice = data.price - (data.price * data.discount / 100);
	document.querySelector('.final_price').innerText = '$' + initialFinalPrice.toFixed(2);
}

// Mareste numarul de produse comandate
function addCounter() {
	if (counter > 0) {
		counter++;
		document.querySelector('.counter').innerText = counter;
		const finalPrice = (data.price * counter) - ((data.price * counter) * data.discount / 100);
		document.querySelector('.final_price').innerText = '$' + finalPrice.toFixed(2);
		document.querySelector('.price').innerText = '$' + (data.price * counter).toFixed(2);
	}
}

// Scade numarul de produse comandate
function removeCounter() {
	if (counter > 1) {
		counter--;
		document.querySelector('.counter').innerText = counter;
		const finalPrice = (data.price * counter) - ((data.price * counter) * data.discount / 100);
		document.querySelector('.final_price').innerText = '$' + finalPrice.toFixed(2);
		document.querySelector('.price').innerText = '$' + (data.price * counter).toFixed(2);
	}
}

// Declansata de buttonul 'ADD TO CART'
function addToCart() {
	const product = {
		url: data.img[0],
		name: data.name,
		counter: counter,
		discount: data.discount,
		price: data.price - (data.price * data.discount / 100)
	}
	const products = JSON.stringify(product);
	// Setam produsul dat in localStorage prin modulul setStorage
	setStorage(products);
	numberProduct();
	loadProducts();
}

// Arata numerele de produse adaugate la moment in cos
function numberProduct() {
	if (document.querySelector('.box_cart').classList.contains('display-none')) {
		document.querySelector('.cart_counter').classList.remove('display-none');
		numberProds++
		document.querySelector('.cart_counter').innerText = numberProds
	}
}

// reseteaza numerele de produse adaugate in cos
function numberProductReset() {
	numberProds = 0;
}
export { numberProductReset }