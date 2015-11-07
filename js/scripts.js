$(function() {

  // Set initial div visibility
  $(".welcome").show();
  $(".todo-items").hide();
  $(".confirm-remove").hide();

  // Switch div visibility once user is specified
  // Make sure that preventDefault() is enabled for submit
  $(".welcome form").submit(function(event) {
    var username = $("input#username").val();

    $(".username").text(username);
    $(".welcome").hide();
    $(".todo-items").show();
    event.preventDefault();
  });

  // Addend new item to ul
  // Add logic to remove item on click
  $(".todo-items form").submit(function(event) {
    var listItem = $("input#item").val();

    $("ul#add-item").prepend("<li>" + "<a href='#' class='thing-object'>" + listItem + "</a>" + "</li>");
    $("input#item").val('');

    $("li").hover(function() {
      $(this).addClass(".active");
    });

    $("li").click(function() {
      $(this).remove();
    });
    event.preventDefault();
  });
});
