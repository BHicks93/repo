$(document).ready(function() {
	$( "#project1, #project2, #project3, #project4, #project5, #project6, #project7, #project8" ).hover(
		function() {
  			$(".text", this).css( "color", "white" );
  			$(".overlap-box", this).css( "background", "white" );
  		}, function() { 
  			$(".text", this).css( "color", "transparent" );
  			$(".overlap-box", this).css( "background", "transparent" );
  		}
	);

	$( "#side-bar, .side-name" )
		.click(function() {
			$(".projects").addClass('projects-left');
			$("#side-bar").css( "width", "400px" );
			$("nav").addClass('show');
			$(".project-list").addClass('show');
			$(".close").addClass('show');
			$(".side-name").removeClass('show');
	});
	$( ".close, .projects" )
		.click(function() {
			$(".projects").removeClass('projects-left');
			$("#side-bar").css( "width", "40px" );
			$("nav").removeClass('show');
			$(".project-list").removeClass('show');
			$(".side-name").addClass('show');
			$(".close").addClass('hide');
	});
	$( "#info-trigger" ).on( "click", function() {
		$(".info-page").toggleClass('show'); 
	});
	$( "#index-wrapper" ).css( "width", $( window ).width() );
	$( window ).resize(function() {
	  $( "#index-wrapper" ).css( "width", $( window ).width() );
	});
});