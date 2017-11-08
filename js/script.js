$(document).ready(function() {
	$( "#trigger" ).on( "click", function() {
		$(".info-page").toggleClass("show-info-page", 1000, "easeOutSine");
	});
	$( "#trigger" ).on( "click", function() {
		$("menu-icon").toggleClass("rotateBack", 1000, "easeInOutQuint");
	});
});
