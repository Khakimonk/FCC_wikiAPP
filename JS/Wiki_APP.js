var $inputBox = $('#userSearch');

var $searchToggle = $('#searchToggle');

$(document).ready(function() {
  $inputBox.animate({width: "toggle", opacity: "toggle"}, 800).removeClass('showInput');
   $searchToggle.click(function(event) {
    $inputBox.animate({width: "toggle", opacity: "toggle"}, 800).addClass('showInput');
  });
});
