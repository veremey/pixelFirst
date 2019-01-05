
$(function(){
	createSticky($(".header"));
});

$(document).ready(function(){
	/* --- video ---*/
	if(detectmob()){
		if($(".video__video").length){
			setTimeout(function(){
				$(".video__img").addClass('is-mobile');
				$(".video__video").addClass('is-mobile');
				$(".video__video").eq(0).play();
			}, 1000);
		}
	}
	/*-----------------------------------------------------------*/

		/* --- about ---*/
	if($('.carusel').length){
		$('.carusel').slick({
			infinite: true,
			dots: true,
			autoplay: true,
			arrows: false,
			customPaging: function(slider, i) {
				var thumb = $(slider.$slides[i]).find('.carusel__content').html();
				return '<span class="carusel__dot carusel__dot_'+i+'">'+thumb+'</span>';
			},
			slidesToShow: 1,
			slidesToScroll: 1
		});
	}

	$('.carusel__dot').click(function() {
		$('html, body').animate({
			scrollTop: 0}
			, 400)
	});
	/*-----------------------------------------------------------*/
		/* --- game ---*/
	$('.square__slider_item').height($('.square__slider').height());
	if($('.square__slider').length){
		$('.square__slider').slick({
			infinite: true,
			dots: true,
			autoplay: true,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
		});
	}
	/*-----------------------------------------------------------*/

	$('.trigger').on('touchstart', function(){
		$(this).toggleClass('is-active');
	});

	$('.js-tab').on('touchstart click', function(e) {
		e.preventDefault();
		var tabItem = $(this).attr('href');

		$(this).parents('.js-tab-parent').find('.js-tab').removeClass('is-active');
		$(this).addClass('is-active');

		$(this).parents('.js-tab-parent').find('.js-tab_section').removeClass('is-active');
		$(this).parents('.js-tab-parent').find('.' + tabItem).addClass('is-active');

	});

	$('.vitaemo__input, .vitaemo__text').on('input', function () {
	   var $this = $(this);

	   if( $this.val().length > 0 ) {
	     $this.parent('.vitaemo__field').addClass('has-content');
	   } else {
	     $this.parent('.vitaemo__field').removeClass('has-content');
	   }
	 });



});

function createSticky(sticky) {

	if (typeof sticky !== "undefined") {
		var pos = sticky.offset().top + 20,
				win = $(window);

		win.on("scroll", function() {
		win.scrollTop() >= pos ? sticky.addClass("fixed") : sticky.removeClass("fixed");
		});
	}
}


function detectmob()
{
	if( navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i)
	){
	    return true;
	}
	else {
	    return false;
	}
}