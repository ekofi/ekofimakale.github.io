$(document).ready(function() {
  var $overlay = $("#substack-popup-overlay");
  if ($overlay.length === 0) {
    return;
  }

  setTimeout(function() {
    $overlay.css("display", "flex").hide().fadeIn(200);
  }, 5000);

  $("#substack-popup-close, #substack-popup-overlay").on("click", function(event) {
    if (event.target.id === "substack-popup-overlay" || event.target.id === "substack-popup-close") {
      $overlay.fadeOut(200);
    }
  });

  $("#substack-popup").on("click", function(event) {
    event.stopPropagation();
  });
});
