$(document).ready(function() {
  var previousLink;

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
  
});
