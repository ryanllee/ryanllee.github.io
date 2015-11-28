$(document).ready(function() {
  var previousLink;

  $("#me img").hover(function() {
      previousLink = $(this).attr("src");
      $(this).attr("src", "https://pbs.twimg.com/profile_images/592787564106506241/OcuzEuXQ.jpg");
      }, function() {
        $(this).attr("src", previousLink);
    }
    );

  $("#header").click(function() {
    $("#test1").css("display", "block")
              .fadeIn("slow");
    $("#test1 img").css("display", "block")
              .fadeIn("slow");
    $("#test2").css("display", "block")
              .fadeIn("slow");
    $("#test2 img").css("display", "block")
              .fadeIn("slow");
    $("#test3").css("display", "block")
              .fadeIn("slow");
    $("#test3 img").css("display", "block")
              .fadeIn("slow");
    $("#test4").css("display", "block")
              .fadeIn("slow");
    $("#test4 img").css("display", "block")
              .fadeIn("slow");
  });


  $("#contentframe").click(function() {
    $("#test1").css("display", "none")
              .fadeOut("slow");
    $("#test1 img").css("display", "none")
              .fadeOut("slow");
    $("#test2").css("display", "none")
              .fadeOut("slow");
    $("#test2 img").css("display", "none")
              .fadeOut("slow");
    $("#test3").css("display", "none")
              .fadeOut("slow");
    $("#test3 img").css("display", "none")
              .fadeOut("slow");
    $("#test4").css("display", "none")
              .fadeOut("slow");
    $("#test4 img").css("display", "none")
              .fadeOut("slow");
  });

});
