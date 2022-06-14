var navbarOffset = $("#navbar").height();

$(document).on('click', '#navbar a', function(event)
{
	event.preventDefault();
	var hash = $(this.hash);
	var scrollLoc = hash.offset().top - navbarOffset;
	
	/*
	$('html, body').animate({
		scrollTop: scrollLoc
	}, 2000, 'easeInOutExpo');
	*/
});