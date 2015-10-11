$(function() {
  	$(".add-things").hide();
});

$(function() {
  $(".no-things form").submit(function(event) {
  	var username = $("input#username").val();
  	
  	$(".username").text(username);
  	$(".no-things").hide();
  	$(".add-things").fadeIn();
  	event.preventDefault();
  });
});