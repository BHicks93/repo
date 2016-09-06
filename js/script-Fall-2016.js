$(document).ready(function() {

	$(window).resize(function() {
    	$('#top').width($(this).width());
	}).resize();
	
	$('body').mousemove(function(event) {
	$('#top').css({
            "height": event.pageY
        });
	});
});