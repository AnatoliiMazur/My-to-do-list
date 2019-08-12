"use strict";

(function () {
	let
			list = [
				{
					content: 'dsfa',
					color: 'red'
				},
				{
					content: 'dsfasgdf',
					color: 'green'
				},
				{
					content: 'dsdfdfg',
					color: 'yellow'
				}
			],
			elList = document.querySelector('#list'),
			elButton = document.querySelector('#add-task'),
			elInput = document.querySelector('#new-task'),
			elInputColor = document.querySelector('#color-task');

	// Functions
	function addItem() {
		let value = elInput.value;

		if (value.length < 1) {
			return;
		}

		list.push({
			content: value,
			color: elInputColor.value
		});
		elInput.value = '';
		renderList();
		saveToLocalStorage()
	}

	function addItemInDOM(item, index) {
		let
				elLi = document.createElement('li'),
				elButton = document.createElement('button');

		elButton.innerHTML = 'x';

		elButton.addEventListener('click', function () {
			removeItem(index)
		});

		elLi.innerHTML = item.content;
		elLi.setAttribute('data-index', index);
		elList.appendChild(elLi);

		elLi.appendChild(elButton);

		console.log(item.color);

		if( item.color ) {
			elLi.style.color = item.color;
		}
	}

	function removeItem(index) {
		list.splice(index, 1);
		renderList();
		saveToLocalStorage();
	}

	function renderList() {
		elList.innerHTML = '';
		for (let i = 0; i < list.length; i++) {
			addItemInDOM(list[i], i)
		}
	}

	function saveToLocalStorage() {
		localStorage.setItem("kraken_items", JSON.stringify(list));
	}

	renderList();

	elButton.addEventListener('click', addItem);

})();
