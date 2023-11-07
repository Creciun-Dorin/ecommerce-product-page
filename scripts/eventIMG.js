/* Module */
import dataDB from './module/dataBD.js';

/* Constante */
const slider_img = document.querySelector('.slider_img');
const slider_img_big = document.querySelector('.slider_img_big');
const button_img = document.querySelector('.button_img');
const move_right_big = document.querySelector('.move_right_big');
const move_left_big = document.querySelector('.move_left_big');
const move_right = document.querySelector('.move_right');
const move_left = document.querySelector('.move_left');
const show_big_image = document.querySelector('.showBigImage');

/* Variabile */
let sliderBig = 0;
let sliderMobile = 0;

/* Evenimente */
window.addEventListener('DOMContentLoaded', showImg);
move_left_big.addEventListener('click', moveLeftBig);
move_right_big.addEventListener('click', moveRightBig);
move_left.addEventListener('click', moveLeft);
move_right.addEventListener('click', moveRight);
slider_img.addEventListener('click', showBigImage);

/* Functii */
async function showImg() {
	const data = await dataDB();
	// Adaugam imaginile produsului
	data.img.forEach((element) => {
		const newImg = document.createElement('img');
		newImg.src = element;
		const newImgCopy = newImg.cloneNode(true);
		const newImgCopyBig = newImg.cloneNode(true);

		button_img.appendChild(newImg);
		slider_img.appendChild(newImgCopy);
		slider_img_big.appendChild(newImgCopyBig);
	})
	const button_img_element = document.querySelectorAll('.button_img img');
	const sliderStep = 595;
	let slider = 0;
	button_img_element.forEach((element, index) => {
		element.addEventListener('mouseenter', () => {
			slider = index * sliderStep;
			slider_img.style.left = -slider + 'px';
		});
	});
}

function moveLeftBig() {
	if (sliderBig > 0) {
		sliderBig -= 800;
		slider_img_big.style.left = -sliderBig + 'px'; 
	}
}

function moveRightBig() {
	if (sliderBig < 2400) {
		sliderBig += 800;
		slider_img_big.style.left = -sliderBig + 'px';
	}
}

function showBigImage() {
	if(window.innerWidth > 768){
		show_big_image.classList.remove('display-none');
		document.body.style.overflow = 'hidden';
		show_big_image.classList.add('animate__flipInX')
		document.querySelector('.button-close').addEventListener('click', () => {
			show_big_image.classList.remove('animate__flipInX')
			show_big_image.classList.add('animate__flipOutX')
			setTimeout(() => {
				document.body.style.overflow = 'auto';
				show_big_image.classList.add('display-none');
				show_big_image.classList.remove('animate__flipOutX')
			}, 750)
		})
	}
}

function moveLeft() {
	if (sliderMobile > 0) {
		sliderMobile -= window.innerWidth + 150;
		slider_img.style.left = -sliderMobile + 'px'; 
	}
}

function moveRight() {
	if (sliderMobile < (window.innerWidth + 150) * 3) {
		sliderMobile += window.innerWidth + 150;
		slider_img.style.left = -sliderMobile + 'px';
	}
}
