$(document).ready(function(){

  
	$("#title").hide().fadeIn(2000);
	$("#subtext").hide().fadeIn(2900);
	$("#login_button").hide().fadeIn(2000);

  $("#login_button").click(function(){

	  	$("div#slide_div").animate({ "height": "toggle", "opacity": "toggle"}, 600);
	  	$("#login_button").hide();
  });
 	
  $("#register_form_button").click(function(){
	  	
	  	$("div#slide_div").animate({ "height": "toggle", "opacity": "toggle"}, 600,function(){
	  	$("div#register_content").animate({ "height": "toggle", "opacity": "toggle"}, 600);
	  	});

	  	$("#login_button").hide();
  });



});