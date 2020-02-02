var productGroupsSection = document.querySelector('.product-groups');

var btnPrev = productGroupsSection.querySelector('.btn-arrow--prev');
var btnNext = productGroupsSection.querySelector('.btn-arrow--next');

var productGroupsList = productGroupsSection.querySelector('.product-groups__list');
var productItems = productGroupsSection.querySelectorAll('.product-groups__item'); 
var i = 0;

btnNext.addEventListener('click', function() {
	productGroupsList.style.transform = 'translateX('+(-320)+'px)';
});

btnPrev.addEventListener('click', function() {
	productGroupsList.style.transform = 'translateX('+(320)+'px)';
}); 

