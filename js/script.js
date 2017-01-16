$(document).ready(function() {
	$( "#project1, #project2, #project3, #project4, #project5, #project6, #project7, #project8" ).hover(
		function() {
  			$(".text", this).css({ "color": "white", "text-shadow": "0 0 25px #000"});
  			$(".overlap-box", this).css( "background", "white" );
  		}, function() { 
  			$(".text", this).css({"color": "transparent", "text-shadow": "none"});
  			$(".overlap-box", this).css("background", "transparent" );
  		}
	);
	$( ".close, .projects" )
		.click(function() {
			$(".projects").removeClass('projects-left');
			$("#side-bar").css( "width", "40px" );
			$("nav").removeClass('show');
			$(".project-list").removeClass('show');
			$(".side-name").addClass('show');
			$(".close").addClass('hide');
	});
	$( "#side-bar, .side-name" )
		.click(function() {
			$(".projects").addClass('projects-left');
			$("#side-bar").css( "width", "400px" );
			$("nav").addClass('show');
			$(".project-list").addClass('show');
			$(".side-name").removeClass('show');
			$(".close").removeClass('hide');
			$(".close").addClass('show');
	});
	$( ".close-p" )
		.click(function() {
			$("#side-bar-p").css( "width", "40px" );
			$("nav").removeClass('show');
			$(".project-list").removeClass('show');
			$(".side-name-p").removeClass('hide');
			$(".side-name-p").addClass('show');
			$(".close-p").addClass('hide');
	});
	$( "#side-bar-p, .side-name-p" )
		.click(function() {
			$("#side-bar-p").css( "width", "400px" );
			$("nav").addClass('show');
			$(".project-list").addClass('show');
			$(".side-name-p").addClass('hide');
			$(".close-p").removeClass('hide');
			$(".close-p").addClass('show');
	});
	$( "#info-trigger" ).on( "click", function() {
		$(".info-page").toggleClass('show'); 
	});
	$( "#menu-trigger" ).on( "click", function() {
		$(".mobile-menu").toggleClass('show'); 
		$(".menu-close").toggleClass('show');
		$(".proj-ham").toggleClass('hide');
	});
	$( "#index-wrapper" ).css( "width", $( window ).width() );
	$( window ).resize(function() {
	  $( "#index-wrapper" ).css( "width", $( window ).width() );
	});
});