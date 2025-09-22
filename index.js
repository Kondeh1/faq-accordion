$(".answer").hide();

$(".plus").click(function () {
  var targetAnswer = $(this).closest(".question").next(".answer");

  $(".answer").not(targetAnswer).slideUp();

  $(".plus").not(this).attr("src", "./assets/images/icon-plus.svg");

  targetAnswer.slideToggle();

  if ($(this).attr("src") === "./assets/images/icon-plus.svg") {
    $(this).attr("src", "./assets/images/icon-minus.svg");
    $(".answer").css("visibility", "visible");
  } else {
    $(this).attr("src", "./assets/images/icon-plus.svg");
  }
});

$(".q").mouseover(function () {
  $(this).addClass("question-color");
});

$(".q").mouseleave(function () {
  $(this).removeClass("question-color");
});
