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


  /** Function for login validation **/
  $("#login_form_button").click(function(){

  		var username_field = $("#input_field_name").val();
  		var password_field = $("#input_field_pw").val();


  		if(username_field.length !=0 && password_field != 0)
  		{
  			//alert("User name can't be blank");
  			
  			$("body").fadeOut(1800);

  		}
  });
});