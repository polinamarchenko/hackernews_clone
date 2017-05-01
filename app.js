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
    $form.trigger("reset");
  });

  //Form slider
  var $lisubmit = $(".formtoggle").on("click", function() {
    if (!formStatus) {
      formStatus = true;
      $(".submitform").slideDown(300);
    } else {
      formStatus = false;
      $(".submitform").slideUp(300);
    }
  });

  //Toggle Icon code

  $topiclist.on("click", ".glyphicon", function(event) {
    $(event.target).toggleClass("glyphicon-star-empty");
    $(event.target).toggleClass("glyphicon-star");
  })

  var $favorite = $(".favoritetoggle");
  $favorite.on("click", function() {
    $(".glyphicon").each(function() {
      if (this.className === "glyphicon glyphicon-star-empty") {
        $(this).parent().toggleClass("hide-all");
      }
    })
  });
});