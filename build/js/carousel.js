'use strict';

var productGroupsSection = document.querySelector('.product-groups');

var btnPrev = productGroupsSection.querySelector('.btn-arrow--prev');
var btnNext = productGroupsSection.querySelector('.btn-arrow--next');

var productGroupsList = productGroupsSection.querySelector('.product-groups__list');
var productItems = productGroupsSection.querySelectorAll('.product-groups__item'); 
var productItem = productGroupsSection.querySelector('.product-groups__item'); 
var movePosition = 0;


btnNext.addEventListener('click', function() {
	var productItemWidth = productItem.offsetWidth; // получаем ширину дисплея
	movePosition = movePosition - productItemWidth; // двигаем слайд на ширину дисплея
	if (movePosition < -productItemWidth * (productItems.length - 1)) {
		movePosition = 0; // если слайдер дошел до конца массива слайдов, то обнуляем позицию
	}
	productGroupsList.style.left = movePosition + "px";
	// у элемента обязательно должно быть position: absolute, fixed или relative, иначе код не применится; 
});

btnPrev.addEventListener('click', function() {
	var productItemWidth = productItem.offsetWidth;
	if (movePosition < 0) {
		movePosition = movePosition + productItemWidth;
	} else if (movePosition === 0) {
		movePosition = -productItemWidth * (productItems.length - 1);
	}
	productGroupsList.style.left = movePosition + "px";
});