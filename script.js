$(".firsti").dblclick(function() {
    $(".stage1").fadeOut();
    $(".stage2").fadeIn();
});

$(".Y").click(function() {
    $(".stage2").fadeOut();
    $(".stage3").fadeIn();
});

$(".lab").dblclick(function() {
    $(".stage3").fadeOut();
    $(".stage4").fadeIn();
});

$(".N").click(function() {
    $(".stage2").fadeOut();
    $(".stage5").fadeIn();
});

$(".lex").click(function() {
    $(".stage5").fadeOut();
    $(".stage6").fadeIn();
});

$(".lexie").click(function() {
    $(".stage6").fadeOut();
    $(".stage7").fadeIn();
});

$(".Y2").click(function() {
    $(".stage7").fadeOut();
    $(".stage8").fadeIn();
});

$(".der").dblclick(function() {
    $(".stage8").fadeOut();
    $(".stage3").fadeIn();
});

$(".N2").click(function() {
    $(".stage7").fadeOut();
    $(".stage9").fadeIn();
});
$(".clock").hover(function() {
    $(".stage9").fadeOut();
    $(".stage10").fadeIn();
});

