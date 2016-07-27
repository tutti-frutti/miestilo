$('.main-nav__toogle').click(function(){
   $('.main-nav').slideToggle(); 
//    $('.main-nav__items-left').slideToggle();
//    $('.main-nav__items-right').slideToggle();
});

$(document).ready(function() {
		$(".fancybox")
            .attr('rel', 'gallery')
            .fancybox({
                padding : 0,
                width   : '320',
        });
	});

$(document).ready(function() {
	$('.fancybox-media').fancybox({
		openEffect  : 'none',
		closeEffect : 'none',
        autoScale   : 'true',
//        width       : 'max',
//        height      : '320',
		helpers : {
			media : {}
		}
	});
});

$(document).ready(function() {
	$(".various").fancybox({
		maxWidth	: 388,
		maxHeight	: 550,
		fitToView	: true, //адаптирует pop-up к размеру окна
//		width		: '70%',
//		height		: '70%',
        autoHeight  : true,
//        autoWidth   : true,
//		autoSize	: true,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});