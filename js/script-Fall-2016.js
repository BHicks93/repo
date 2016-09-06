var box=$(".box");
var boxCenter=[box.offset().left+box.width()/2, box.offset().top+box.height()/2];

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