$(document).ready(function(){
	slideshow();
	$('#crossfade li').hide().filter(':first').show();
	setInterval(slideshow,9000);
});

function slideshow(){
	$('#crossfade li:first').fadeOut('slow').next().fadeIn('slow').end().appendTo('#crossfade');

}

