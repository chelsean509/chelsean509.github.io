$(window).scroll(function()
{
	var scroll = $(window).scrollTop();
	if(scroll > 200){
		$("#navbar").slideDown(400);
	}
	else{
		$("#navbar").slideUp(400);
	}
});