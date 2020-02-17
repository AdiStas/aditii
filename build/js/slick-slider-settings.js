$(document).ready(function(){
 	$('.product-groups__list').slick({
 	slidesToShow: 3,
  	slidesToScroll: 1,
  	responsive: [
    	{
      		breakpoint: 660,
      			settings: {
        			slidesToShow: 1,
        			slidesToScroll: 1,
      			}
    	},
    	{
      		breakpoint: 1280,
      			settings: {
        			slidesToShow: 2,
        			slidesToScroll: 1
      			}
    	},
    ]
  });
});