$(document).ready(function() {
  var formStatus = false;
  var $topiclist = $(".topiclist");
  var $favorite = $(".favoritetoggle");
  var $all = $(".alltoggle");

  //Form add item
  var $form = $("form").on("submit", function(e) {
    if (!$("#url").val() || !$("#title").val()) {
      e.preventDefault();
      alert("Please fill in empty fields");
    } else {
      e.preventDefault();
      var $li = $("<li>");
      var $icon = $("<span>").addClass("glyphicon glyphicon-star-empty");
      var $topictext = $("<a>").attr("href", $("#url").val())
                          .addClass("topic-text")
                          .text($("#title").val());
      var $link = $("<span>").addClass("anchor").text("(" + $("#url").val() + ")");

      // $topictext.text($("#title").val());
      $li.append($icon).append($topictext).append($link);
      $topiclist.append($li);
      $form.trigger("reset");
      }
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
  });

  //Toggle favorite
  $favorite.on("click", function() {
    $(".glyphicon").each(function() {
      if (this.className === "glyphicon glyphicon-star-empty") {
        $(this).parent().toggleClass("hide-all");
      }
    });
    $favorite.toggleClass("hide-all");
    $all.toggleClass("hide-all");
  });

  //Toggle all
  $all.on("click", function() {
    $(".glyphicon").each(function() {
      $(this).parent().removeClass("hide-all");
    });
    $favorite.toggleClass("hide-all");
    $all.toggleClass("hide-all");
  });

  //Togle filter on links
  $topiclist.on("click", ".anchor", function(event) {
      $(".anchor").filter(function(ind, value) {
          return $(value).text() !== $(event.target).text();
          })
          .parent().addClass("hide-all");

      $all.toggleClass("hide-all");
  });
});
