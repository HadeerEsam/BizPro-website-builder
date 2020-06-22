$(document).ready(function(){


//show responsive website inside editor
//mobile size
$("#mobile").click(function(){
    $("#main-section").css("width","320px");
});
//tablet size
$("#tablet").click(function(){
    $("#main-section").css("width","768px");
});

$("#computer").click(function(){
    if($("#left-side").css("left")=="0px"){
        if($("#rightNav").css("right")=="0px"){
            $("#main-section").css({"right":"20%","left":"20%","width":"auto"});
        }else{
            $("#main-section").css({"right":"0","width":"auto"});
        }
    }else{
        if($("#rightNav").css("right")=="0px"){
            $("#main-section").css({"left":"0","width":"auto"});
            $("#main-section").css();
        }else{
            $("#main-section").css({"right":"0","left":"0","width":"auto"});
        }
    }
});


//Enter full screen

/* Get into full screen */
function GoInFullscreen(element) {
	if(element.requestFullscreen)
		element.requestFullscreen();
	else if(element.mozRequestFullScreen)
		element.mozRequestFullScreen();
	else if(element.webkitRequestFullscreen)
		element.webkitRequestFullscreen();
	else if(element.msRequestFullscreen)
		element.msRequestFullscreen();
}

/* Get out of full screen */
function GoOutFullscreen() {
	if(document.exitFullscreen)
		document.exitFullscreen();
	else if(document.mozCancelFullScreen)
		document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	else if(document.msExitFullscreen)
		document.msExitFullscreen();
}

/* Is currently in full screen or not */
function IsFullScreenCurrently() {
	var full_screen_element = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || null;
	
	// If no element is in full-screen
	if(full_screen_element === null)
		return false;
	else
		return true;
}
//full screen button function
$("#fullscreen").click(function(){
    if(IsFullScreenCurrently())
        GoOutFullscreen();
    else
        GoInFullscreen($("html").get(0));
});


// ///////////////// dropDown templates //////////////////

    ///////   jumbotron      ///////
    $("#firstTemplate").click(function(){
      $('iframe').attr('src', "jumbotron.html")
    
    });

    ///////   landing page    
    $(".landing").click(function(){
        $('iframe').attr('src', "template.html")
    });

    // ////   albums page 
    $("#album-template").click(function(){
        $('iframe').attr('src', "content.html");
    });  

    ///////  E-commerce(pricing) template
    $("#pricing-template").click(function(){
        $('iframe').attr('src', "pricing template.html");
    });  


    // scroll to top
    $("#btnUp").click(function(){
   
        $("html,body").animate({scrollTop:"0"} , 2000);
    });

   // color active template name
    $(".items a").click(function(){
        $(this).addClass("active-page");
        $(".items a").not($(this)).removeClass("active-page");

    });
    
       
        // documentation of editor 

        $("#help").click(function(){
            $("#support").css("display","block");
        });
        $("#close").click(function(){
            $("#support").css("display","none");
        });
    });
    




  