$(document).ready(function(){
	//all jQuery code goes here
	console.log("Hi there buddy");
	
	//$('selector').function(actions you want to happen);
		//jQuary + css selector + action
	$('img').mouseover(function(){
		$('#discription-type').show( 10 );
	});
	$('img').mouseout(function(){
		$("#discription-type").hide( 10 );
	});
	
});