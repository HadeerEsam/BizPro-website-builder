// welcome page

$(".startnow").attr("href" , "login.html" );

$(window).scroll(function () {

    let stunningFromTop = $(".stunning-templates").offset().top;
    let dragAndDrobFromTop = $(".drag-drop").offset().top;
    let MobileFromTop = $(".mobile").offset().top;
    let distanceFromTop = $(window).scrollTop();

    if(distanceFromTop >stunningFromTop - 400){
        $(".stunning-templates .details-left").animate({left : "0"} , 1000);
        $(".stunning-templates img").fadeIn(1200);

    }

    if(distanceFromTop > dragAndDrobFromTop - 400){
        $(".drag-drop .details-right").animate({right : "0"} , 1000);
        $(".drag-drop img").fadeIn(1200);
    }

    if(distanceFromTop > MobileFromTop - 400){
        $(".mobile .details-left").animate({left : "0"} , 1000);
        $(".mobile img").fadeIn(1200);

    }

});



// end of welcome page
