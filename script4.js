var shown;
var hidden;

$(document).ready(function() {
  // "more" buttons
  $('.button_more').click(function() {
    shown = $(this).siblings('.shownInfo');
    hidden = $(this).siblings('.hiddenInfo');
    $(this).remove();
    shown.remove();
    hidden.css("display", "inline");
  });  

  // ignore this information
  $('.ignore-button').click(function() {
    $(this).parent().remove();
  });
});


