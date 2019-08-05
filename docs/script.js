"use strict";

(function () {
	var
			list = [],
			elList = document.querySelector('#list'),
			elButton = document.querySelector('#add-task'),
			elInput = document.querySelector('#new-task');

	elButton.addEventListener('click', function () {
		var value = elInput.value;

		if(value.length < 1) {
			return;
		}

		list.push(value);
		elInput.value = '';

		console.log(list);
	})

})();
