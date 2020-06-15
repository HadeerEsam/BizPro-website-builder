
let activeSection;

// fade in choosen setting section
$(".menue .nav-link").click(function () { 
    let href=$(this).attr("href");
    activeSection=href;
    $(href).fadeIn(700);
    $(href).siblings().css("display","none");
});

$(window).resize(function () {
    let bodyWidth=$("html,body").outerWidth();
    console.log(bodyWidth)
    if(bodyWidth>750){

        //show the choosen section before and hide the others
        $(activeSection).css("display","block");    
        $(activeSection).siblings().css("display","none");
    }
    else{
        //show all sections in mobile size
        $(".main-settings").children().css("display","block");
    }
});