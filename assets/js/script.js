$(document).ready(function() {
  var previousLink;

  $("#me img").hover(function() {
      previousLink = $(this).attr("src");
      $(this).attr("src", "https://pbs.twimg.com/profile_images/592787564106506241/OcuzEuXQ.jpg");
      }, function() {
        $(this).attr("src", previousLink);
    }
    );

  $("#carousel-next").click(function() {
    var currentmargin = parseInt($('#carousel').css('margin-left').replace("px", "")); 
    if(currentmargin == -1920) {
      return false;
    }
    else {
      $("#carousel").css("margin-left", currentmargin-960);
    }
  });

  $("#carousel-prev").click(function() {
    var currentmargin1 = parseInt($('#carousel').css('margin-left').replace("px", "")); 
    if(currentmargin1 == 0) {
      return false;
    }
    else {
      $("#carousel").css("margin-left", currentmargin1+960);
    }
  });

  $("#ContactMe").click(function() {
    var contact = 1200;
    $(window).scrollTop(contact);
  });
  
});
