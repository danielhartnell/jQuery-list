$(function() {
	$(".no-things").show();
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

$(function() {
	$(".add-things form").submit(function(event) {
	  var thing = $("input#thing").val();

	  $("ul#thing-entry").prepend("<li>" + thing + "</li>");
	  $("input#thing").val('');
	  event.preventDefault();
	})
})