$(document).ready(function(){
 	$('.product-groups__list').slick({
 	slidesToShow: 3,
  	slidesToScroll: 3,
  	responsive: [
    	{
      		breakpoint: 660,
      			settings: {
        			slidesToShow: 1,
        			slidesToScroll: 1,
        			infinite: true,
      			}
    	},
    	{
      		breakpoint: 1280,
      			settings: {
        			slidesToShow: 2,
        			slidesToScroll: 2
      			}
    	},
    ]
  });
});