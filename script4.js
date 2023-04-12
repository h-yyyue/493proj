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
    $(this).parent().hide();
  });
  // ignore recommendation panel
  $('.ignore-button-recommend').click(function() {
    $(this).parent().hide();
  });  
  // "more information" button
  $('.moreinfo').click(function() {
    $("section").show();
        
  });  
});


