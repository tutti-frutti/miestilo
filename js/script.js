$('.main-nav__toogle').click(function(){
   $('.main-nav').slideToggle(); 
//    $('.main-nav__items-left').slideToggle();
//    $('.main-nav__items-right').slideToggle();
});

$(document).ready(function() {
		$(".fancybox").fancybox();
	});

$(document).ready(function() {
	$(".fancybox").fancybox({
		openEffect	: 'fade',
		closeEffect	: 'none'
	});
});