$(document).ready(function(){
//toggle of tools taps
$("#rightNav .nav-link").click(function () { 
    $(this).addClass("active-option");
    $("#rightNav .nav-link").not($(this)).removeClass("active-option");
    let href=$(this).attr("href");
    $(`${href}`).addClass("show");
    $(`${href}`).siblings().removeClass("show");
 });

 $(".elem .nav-link").click(function () { 
    $(this).addClass("active-option");
    $(".elem .nav-link").not($(this)).removeClass("active-option");
    let href=$(this).attr("href");
    $(`${href}`).addClass("show");
    $(`${href}`).siblings().removeClass("show");
 });

 //hide side navs
 $("#hideRightNav").click(function(){
    if($("#main-section").css("width")<"80%"){
        if( $("#rightNav").css("right")=="0px"){
            $("#main-section").css("right","0");
            $("#rightNav").css("right","-20%");
            
         }else{
            $("#main-section").css("right","20%");
            $("#rightNav").css("right","0");
         }
    }else{
        if( $("#rightNav").css("right")=="0px"){
            $("#main-section").css({"right":"0","width":"auto"});
            $("#rightNav").css("right","-20%");
            
         }else{
            
            $("#rightNav").css("right","0");
            $("#main-section").css({"right":"20%","width":"auto"});
         }

    }
 });

 
 $("#hideLeftNav").click(function(){
    if($("#main-section").css("width")<"80%"){
        if( $("#left-side").css("left")=="0px"){
            $("#main-section").css("left","0");
            $("#left-side").css("left","-20%");
         }else{
            $("#main-section").css("left","20%");
            $("#left-side").css("left","0");
         }
    }else{
        if( $("#rightNav").css("right")=="0px"){
            $("#main-section").css({"left":"0","width":"auto"});
            $("#left-side").css("left","-20%");
            
         }else{
            
            $("#left-side").css("left","0");
            $("#main-section").css({"left":"20%","width":"auto"});
         }

    }
    
});

//show responsive website inside editor
$("#mobile").click(function(){
    $("#main-section").css("width","320px");
});

$("#tablet").click(function(){
    $("#main-section").css("width","768px");
});

$("#computer").click(function(){
    if($("#left-side").css("left")=="0px"){
        if($("#rightNav").css("right")=="0px"){
            $("#main-section").css({"right":"20%","left":"20%","width":"60%"});
        }else{
            $("#main-section").css({"right":"0","width":"80%"});
        }
    }else{
        if($("#rightNav").css("right")=="0px"){
            $("#main-section").css({"left":"0","width":"80%"});
            $("#main-section").css();
        }else{
            $("#main-section").css({"right":"0","left":"0","width":"100%"});
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

$("#fullscreen").click(function(){
    if(IsFullScreenCurrently())
        GoOutFullscreen();
    else
        GoInFullscreen($("html").get(0));
});


// ///////////////// sidebar templates //////////////////

    $("#firstTemplate").click(function(){
      $('iframe').attr('src', "jumbotron.html")
    
    });

    ///////   landing page    //////
    $(".landing").click(function(){
        $('iframe').attr('src', "template.html")
    });

    // ////   albums page ///////
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

   
    $(".items a").click(function(){
        $(this).addClass("active-page");
        $(".items a").not($(this)).removeClass("active-page");

    });
    
       
        // $("#ifrm").ready(function(){
        //     let ifrm = document.getElementById('ifrm');
        //         console.log(ifrm)
        //         let win = ifrm.contentWindow; 
        //     // reference to iframe's window
        //     // reference to document in iframe
        //     let doc = ifrm.contentDocument? ifrm.contentDocument: ifrm.contentWindow.document;
        //    $("p").click(function(){
        //     $("#contentTap").html(`
        //     <div class="text-align">
        //     <div><i class="fas fa-align-left"></i></div>
        //     <div><i class="fas fa-align-justify"></i></div>
        //     <div><i class="fas fa-align-right"></i></div>
        //     </div>
        //     <div></div>
        //     `);    
        //    });    
        // });
        
        // doc.innerHTML.addEventListner("click",function(){
        //     $(this).css("border","1px solid #d73e4d");
        //     $("p").not($(this)).css("border","none");
        // // $(this).contents().find('body').html('Hey, I have changed the body content yay!');

    
            
        // });

        // $("iframe .nav-link").click(function(){
        //     window.alert("sd")

        // });
    });
    




  