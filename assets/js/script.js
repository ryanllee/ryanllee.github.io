$(document).ready(function() {
  var previousLink;
  var tracker=1;

  $("#me img").hover(function() {
      previousLink = $(this).attr("src");
      $(this).attr("src", "https://pbs.twimg.com/profile_images/592787564106506241/OcuzEuXQ.jpg");
      }, function() {
        $(this).attr("src", previousLink);
    });

  $("#me img").click(function() {
    if(tracker == 1) {
      $("#background").attr("src", "assets/img/school1.jpg");
      tracker = 2;
    } else if(tracker == 2) {
      $("#background").attr("src", "assets/img/school2.jpg");
      tracker = 3;
    } else if(tracker == 3) {
      $("#background").attr("src", "assets/img/school3.jpg");
      tracker = 4;
    } else if(tracker == 4) {
      $("#background").attr("src", "assets/img/SatherGate.jpg");
      tracker = 1;
    }
  });

  $("#header").click(function() {
    $("#test1").fadeIn("slow");
    $("#test1 img").fadeIn("slow");
    $("#test2").fadeIn("slow");
    $("#test2 img").fadeIn("slow");
    $("#test3").fadeIn("slow");
    $("#test3 img").fadeIn("slow");
    $("#test4").fadeIn("slow");
    $("#test4 img").fadeIn("slow");
  });

  $("#contentframe").click(function() {
    $("#test1").fadeOut("slow");
    $("#test1 img").fadeOut("slow");
    $("#test2").fadeOut("slow");
    $("#test2 img").fadeOut("slow");
    $("#test3").fadeOut("slow");
    $("#test3 img").fadeOut("slow");
    $("#test4").fadeOut("slow");
    $("#test4 img").fadeOut("slow");
  });

});
