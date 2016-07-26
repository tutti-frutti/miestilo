$('.main-nav__toogle').click(function(){
   $('.main-nav').slideToggle(); 
//    $('.main-nav__items-left').slideToggle();
//    $('.main-nav__items-right').slideToggle();
});

$(document).ready(function() {
		$(".fancybox")
            .attr('rel', 'gallery')
            .fancybox({
                padding : 0
        });
	});

$(document).ready(function() {
	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
		helpers : {
			media : {}
		}
	});
});