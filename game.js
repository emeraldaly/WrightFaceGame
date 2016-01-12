document.ready(function(){

  var counter = 0;
  $("td img").addClass("img-responsive");
  $(".img").attr("disabled", true);

  $(".img-responsive").on("click", function(){
    if($(this).attr("disabled")){
      return;
    } else{
      $(this).removeClass("on").addClass("off").attr("disabled", true);
      countup();
    }
  });

  function countup() {
    counter = counter + 1;
  }


  $('#startButton').on('click', function () {
    counter = 0;
    $(".img-responsive").attr("disabled", false).removeClass("off").addClass("on");
    setTimeout(function countAndGive(){
      $(".modal-body").empty();
      $(".modal-body").append("<p>You clicked " + scoreCounter + "comedians.</p>");
      $("#resultModal").modal("show");
    }, 20000);
  });

});






