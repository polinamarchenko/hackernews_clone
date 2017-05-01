$(document).ready(function() {
  var formStatus = false;
  var $topiclist = $(".topiclist");
  var $form = $("form").on("submit", function(e) {
    e.preventDefault();
    var $li = $("<li>");
    var $icon = $("<span>").addClass("glyphicon glyphicon-star-empty");
    var $topictext = $("<span>").addClass("topic-text");
    $topictext.text($("#title").val() + " (" + $("#url").val() + ")");
    $li.append($icon).append($topictext);
    $topiclist.append($li);
  });

  var $lisubmit = $(".formtoggle").on("click", function() {
    if (!formStatus) {
      formStatus = true;
      $(".submitform").slideDown(300);
    } else {
      formStatus = false;
      $(".submitform").slideUp(300);
    }
  });
});
