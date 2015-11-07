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

    $("ul#add-item").prepend("<li><span class='remove-item'>" + listItem + "</span></li>");
    $("input#item").val('');

    $("li").click(function() {
      $(this).remove();
    });
    event.preventDefault();
  });
});
