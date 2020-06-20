// welcome page

$(".startnow").attr("href" , "login.html" );

$(window).scroll(function () {

    let stunningFromTop = $(".stunning-templates").offset().top;
    let dragAndDrobFromTop = $(".drag-drop").offset().top;
    let MobileFromTop = $(".mobile").offset().top;
    let distanceFromTop = $(window).scrollTop();

    if(distanceFromTop >= stunningFromTop - 400){

        $(".stunning-templates h3").animate({marginLeft : "0px"} , 1300);
        $(".stunning-templates p").animate({marginLeft: "0px"} , 1600);
        $(".stunning-templates a").animate({marginLeft: "0px"} , 1900);
        $(".stunning-templates img").fadeIn(1900);

    }

    if(distanceFromTop >= dragAndDrobFromTop - 400){

        $(".drag-drop h3").animate({marginLeft : "0px"} , 1300);
        $(".drag-drop p").animate({marginLeft: "0px"} , 1600);
        $(".drag-drop a").animate({marginLeft: "0px"} , 1900);
        $(".drag-drop img").fadeIn(2000);

    }

    if(distanceFromTop >= MobileFromTop - 400){

        $(".mobile h3").animate({marginLeft : "0px"} , 1300);
        $(".mobile p").animate({marginLeft: "0px"} , 1600);
        $(".mobile a").animate({marginLeft: "0px"} , 1900);
        $(".mobile img").fadeIn(2000);

    }

})



// end of welcome page
