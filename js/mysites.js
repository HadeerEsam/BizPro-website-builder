$(".designer").click(function(){

    $("#inspiring-websites").css("display" , "none");
    $("#showcase").css("display" , "block");
    $(".designer>p").addClass("active");
    $(".websites>p").removeClass("active");
})

$(".websites").click(function(){

    $("#showcase").css("display" , "none");
    $("#inspiring-websites").css("display" , "block");
    $(".websites>p").addClass("active");
    $(".designer>p").removeClass("active");

})
