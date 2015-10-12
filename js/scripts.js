$(function() {

  // Set initial div visibility
  $(".no-things-container").show();
  $(".add-things-container").hide();
  $(".confirm-remove").hide();

  // Switch div visibility once user is specified
  // Make sure that preventDefault() is enabled for submit
  $(".no-things-container form").submit(function(event) {
    var username = $("input#username").val();

    $(".username").text(username);
    $(".no-things-container").hide();
    $(".add-things-container").show();
    event.preventDefault();
  });
  
  // Addend new thing to ul
  // Add logic to remove thing on click
  $(".add-things-container form").submit(function(event) {
    var thing = $("input#thing").val();

    $("ul#thing-entry").prepend("<li>" + "<a href='#' class='thing-object'>" + thing + "</a>" + "</li>");
    $("input#thing").val('');

    $("li").hover(function() {
      $(this).addClass(".active");
    });

    $("li").click(function() {
      $(this).remove();
    });
    event.preventDefault();
  });
});
