$(function(){
	/*slider*/
	 var slider_items = $('.slider ul > li');
		var slider_buttons = $('.gecis ul li');
	
	slider_items.hide();
	slider_items.filter(':eq(0)').fadeIn(700);
	slider_buttons.filter(':first').addClass('active');
	slider_buttons.on('click', function(e){
		var indexitem = $(this).index();
		slider_items.fadeOut(700);
		slider_items.filter(':eq(' + indexitem + ')').fadeIn(700);
		slider_buttons.removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	
});