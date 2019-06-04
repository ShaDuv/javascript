$(function() {
  // $("").click(function(){
  //   $("#cat1").toggle();
  //   $("#cat-1").toggle();
  // });
  // $("#cat1").click(function(){
  //   $("#cat1").toggle("#cat2");
  //   // $("#cat1").toggle();
  // });

  $("#cat1").click(function() {
    $("#cat2").removeClass();
    $("#cat2").addClass("kitty-show");
    $("#cat1").removeClass();
    $("#cat1").addClass("kitty-hide");
  });


  
});
