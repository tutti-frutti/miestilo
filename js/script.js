$('.main-nav__toogle').click(function(){
   $('.main-nav').slideToggle(); 
//    $('.main-nav__items-left').slideToggle();
//    $('.main-nav__items-right').slideToggle();
});

$(document).ready(function() {   //скрипт для фотографий
		$(".fancybox")
            .attr('rel', 'gallery')
            .fancybox({
                padding : 3,
                width   : '320',
                closeBtn: false,
        });
	});

$(document).ready(function() {
	$('.fancybox-media').fancybox({   //скрипт для видео youtube
		openEffect  : 'none',
		closeEffect : 'none',
        autoScale   : true,
        padding     : 3,
//        width       : 'max',
//        height      : '320',
		helpers : {
			media : {}
		}
	});
});

$(document).ready(function() {   // скрипт для pop-up
	$(".various").fancybox({
		maxWidth	: 388,
		maxHeight	: 550,
		fitToView	: true, //адаптирует pop-up к размеру окна
//		width		: '70%',
//		height		: '70%',
        autoHeight  : true,
//      autoWidth   : true,
//		autoSize	: true,
        padding     : 3,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
});