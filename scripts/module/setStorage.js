

const setStorage = (product) => {
	const storage = JSON.parse(localStorage.getItem('produse')) || [];
	storage.push(product);
	localStorage.setItem('produse', JSON.stringify(storage));
}

export { setStorage };

const loadProducts = () => {
	removeProdcts();
	const produse = JSON.parse(localStorage.getItem('produse'));

	if (produse !== null && produse.length !== 0) {
		document.querySelector('.main_cart_message').classList.add('display-none');
		document.querySelector('.footer_cart').classList.remove('display-none');


		produse.forEach((element, index) => {
			const data = JSON.parse(element)
			const item = document.createElement('div');
			item.classList.add('item');
			const img = document.createElement('img');
			img.src = data.url;
			item.appendChild(img);
			const text_grup_item = document.createElement('div');
			text_grup_item.classList.add('text-grup-item');
			item.appendChild(text_grup_item);
			const name = document.createElement('h5');
			name.innerText = data.name;
			text_grup_item.appendChild(name);
			const text_grup_content = document.createElement('div');
			text_grup_content.classList.add('text-grup-content');
			text_grup_item.appendChild(text_grup_content);
			const priceItem = document.createElement('span');
			priceItem.classList.add('price-item');
			priceItem.innerText = '$' + data.price + ' x ';
			console.log(data.price)
			text_grup_content.appendChild(priceItem);
			const counterItem = document.createElement('span');
			counterItem.classList.add('counter-item');
			counterItem.innerText = data.counter;
			text_grup_content.appendChild(counterItem);

			const finalPriceItem = document.createElement('span');
			finalPriceItem.classList.add('finall-price-item');
			finalPriceItem.innerText = '$' + ((data.price * data.counter) - ((data.price * data.counter) * data.discount / 100)).toFixed(2);

			const button = document.createElement('button');
			button.setAttribute('index-button', index)
			button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.625V1.75C0 1.33438 0.334375 1 0.75 1H4.25L4.54375 0.415625C4.66875 0.159375 4.92812 0 5.2125 0H8.78438C9.06875 0 9.32812 0.159375 9.45625 0.415625L9.75 1H13.25C13.6656 1 14 1.33438 14 1.75V2.625C14 2.83125 13.8313 3 13.625 3H0.375C0.16875 3 0 2.83125 0 2.625ZM13 4.375V14.5C13 15.3281 12.3281 16 11.5 16H2.5C1.67188 16 1 15.3281 1 14.5V4.375C1 4.16875 1.16875 4 1.375 4H12.625C12.8313 4 13 4.16875 13 4.375ZM4 6C4.275 6 4.5 6.225 4.5 6.5V13.5C4.5 13.775 4.275 14 4 14C3.725 14 3.5 13.775 3.5 13.5V6.5C3.5 6.225 3.725 6 4 6ZM7.5 6.5C7.5 6.225 7.275 6 7 6C6.725 6 6.5 6.225 6.5 6.5V13.5C6.5 13.775 6.725 14 7 14C7.275 14 7.5 13.775 7.5 13.5V6.5ZM10 6C10.275 6 10.5 6.225 10.5 6.5V13.5C10.5 13.775 10.275 14 10 14C9.725 14 9.5 13.775 9.5 13.5V6.5C9.5 6.225 9.725 6 10 6Z" fill="#C3CAD9"/>
			<mask id="mask0_0_632" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="16">
			  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.625V1.75C0 1.33438 0.334375 1 0.75 1H4.25L4.54375 0.415625C4.66875 0.159375 4.92812 0 5.2125 0H8.78438C9.06875 0 9.32812 0.159375 9.45625 0.415625L9.75 1H13.25C13.6656 1 14 1.33438 14 1.75V2.625C14 2.83125 13.8313 3 13.625 3H0.375C0.16875 3 0 2.83125 0 2.625ZM13 4.375V14.5C13 15.3281 12.3281 16 11.5 16H2.5C1.67188 16 1 15.3281 1 14.5V4.375C1 4.16875 1.16875 4 1.375 4H12.625C12.8313 4 13 4.16875 13 4.375ZM4 6C4.275 6 4.5 6.225 4.5 6.5V13.5C4.5 13.775 4.275 14 4 14C3.725 14 3.5 13.775 3.5 13.5V6.5C3.5 6.225 3.725 6 4 6ZM7.5 6.5C7.5 6.225 7.275 6 7 6C6.725 6 6.5 6.225 6.5 6.5V13.5C6.5 13.775 6.725 14 7 14C7.275 14 7.5 13.775 7.5 13.5V6.5ZM10 6C10.275 6 10.5 6.225 10.5 6.5V13.5C10.5 13.775 10.275 14 10 14C9.725 14 9.5 13.775 9.5 13.5V6.5C9.5 6.225 9.725 6 10 6Z" fill="white"/>
			</mask>
			<g mask="url(#mask0_0_632)">
			</g>
		  </svg>`
			item.appendChild(button);
			text_grup_content.appendChild(finalPriceItem);

			const main_cart = document.querySelector('.main_cart');
			main_cart.appendChild(item);

			button.addEventListener('click', () => {
				produse.splice(index, 1);
				localStorage.setItem('produse', JSON.stringify(produse));
				removeProdcts();
				loadProducts();
			});
		}
		)
	}
	else {
		document.querySelector('.main_cart_message').classList.remove('display-none');
		document.querySelector('.footer_cart').classList.add('display-none');
	}
}
export { loadProducts };


function removeProdcts() {
	const item = document.querySelectorAll('.item');
	item.forEach((element) => {
		element.remove();
	})
}





















/* 
		produse.forEach((element, index) => {
			const data = JSON.parse(element)
			const item = document.createElement('div');
			item.classList.add('item');
			const img = document.createElement('img');
			img.src = data.url;
			item.appendChild(img);
			const text_grup_item = document.createElement('div');
			text_grup_item.classList.add('text-grup-item');
			item.appendChild(text_grup_item);
			const name = document.createElement('h5');
			name.innerText = data.name;
			text_grup_item.appendChild(name);
			const text_grup_content = document.createElement('div');
			text_grup_content.classList.add('text-grup-content');
			text_grup_item.appendChild(text_grup_content);
			const priceItem = document.createElement('span');
			priceItem.classList.add('price-item');
			priceItem.innerText = '$' + data.price + ' x ';
			console.log(data.price)
			text_grup_content.appendChild(priceItem);
			const counterItem = document.createElement('span');
			counterItem.classList.add('counter-item');
			counterItem.innerText = data.counter;
			text_grup_content.appendChild(counterItem);

			const finalPriceItem = document.createElement('span');
			finalPriceItem.classList.add('finall-price-item');
			finalPriceItem.innerText = '$' + ((data.price * data.counter) - ((data.price * data.counter) * data.discount / 100)).toFixed(2);

			const button = document.createElement('button');
			button.setAttribute('index-button', index)
			button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.625V1.75C0 1.33438 0.334375 1 0.75 1H4.25L4.54375 0.415625C4.66875 0.159375 4.92812 0 5.2125 0H8.78438C9.06875 0 9.32812 0.159375 9.45625 0.415625L9.75 1H13.25C13.6656 1 14 1.33438 14 1.75V2.625C14 2.83125 13.8313 3 13.625 3H0.375C0.16875 3 0 2.83125 0 2.625ZM13 4.375V14.5C13 15.3281 12.3281 16 11.5 16H2.5C1.67188 16 1 15.3281 1 14.5V4.375C1 4.16875 1.16875 4 1.375 4H12.625C12.8313 4 13 4.16875 13 4.375ZM4 6C4.275 6 4.5 6.225 4.5 6.5V13.5C4.5 13.775 4.275 14 4 14C3.725 14 3.5 13.775 3.5 13.5V6.5C3.5 6.225 3.725 6 4 6ZM7.5 6.5C7.5 6.225 7.275 6 7 6C6.725 6 6.5 6.225 6.5 6.5V13.5C6.5 13.775 6.725 14 7 14C7.275 14 7.5 13.775 7.5 13.5V6.5ZM10 6C10.275 6 10.5 6.225 10.5 6.5V13.5C10.5 13.775 10.275 14 10 14C9.725 14 9.5 13.775 9.5 13.5V6.5C9.5 6.225 9.725 6 10 6Z" fill="#C3CAD9"/>
			<mask id="mask0_0_632" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="16">
			  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.625V1.75C0 1.33438 0.334375 1 0.75 1H4.25L4.54375 0.415625C4.66875 0.159375 4.92812 0 5.2125 0H8.78438C9.06875 0 9.32812 0.159375 9.45625 0.415625L9.75 1H13.25C13.6656 1 14 1.33438 14 1.75V2.625C14 2.83125 13.8313 3 13.625 3H0.375C0.16875 3 0 2.83125 0 2.625ZM13 4.375V14.5C13 15.3281 12.3281 16 11.5 16H2.5C1.67188 16 1 15.3281 1 14.5V4.375C1 4.16875 1.16875 4 1.375 4H12.625C12.8313 4 13 4.16875 13 4.375ZM4 6C4.275 6 4.5 6.225 4.5 6.5V13.5C4.5 13.775 4.275 14 4 14C3.725 14 3.5 13.775 3.5 13.5V6.5C3.5 6.225 3.725 6 4 6ZM7.5 6.5C7.5 6.225 7.275 6 7 6C6.725 6 6.5 6.225 6.5 6.5V13.5C6.5 13.775 6.725 14 7 14C7.275 14 7.5 13.775 7.5 13.5V6.5ZM10 6C10.275 6 10.5 6.225 10.5 6.5V13.5C10.5 13.775 10.275 14 10 14C9.725 14 9.5 13.775 9.5 13.5V6.5C9.5 6.225 9.725 6 10 6Z" fill="white"/>
			</mask>
			<g mask="url(#mask0_0_632)">
			</g>
		  </svg>`
			item.appendChild(button);
			text_grup_content.appendChild(finalPriceItem);

			const main_cart = document.querySelector('.main_cart');
			main_cart.appendChild(item);

			button.addEventListener('click', () => {
				produse.splice(index, 1);
				localStorage.setItem('produse', JSON.stringify(produse));
				
			});

		}) */