let activeSection;

// fade in choosen setting section
$(".menue .nav-link").click(function () { 
    let href=$(this).attr("href");
    activeSection=href;
    $(href).fadeIn(700);
    $(href).siblings().css("display","none");
    $(this).addClass("active");
    $(".menue .nav-link").not($(this)).removeClass("active");;
});

//show section according to size of browser
$(window).resize(function () {
    let bodyWidth=$("html,body").outerWidth();
    // console.log(bodyWidth)
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


let users;
let numberOfUsers=-1;

// check localstorage empty or not 
if(localStorage.getItem("users") == null&& localStorage.getItem("numberOfUsers")==null){

   users = [];
   numberOfUsers=-1;

}else{

   users = JSON.parse(localStorage.getItem("users"));
}


//getting user info
let enteredUser;
function userInfo(){
     enteredUser=Number(localStorage.getItem("numberOfUsers"));
    $("#userName-settings").val(users[enteredUser].userName);
    $("#email-settings").val(users[enteredUser].userEmail);
    $("#password-settings").val(users[enteredUser].userPassword);
    $("#Name").text(users[enteredUser].userName);
    $("#userEmail").text(users[enteredUser].userEmail);
}
userInfo();

//update and save user info
$("#updateBtn").click(function () { 
    users[enteredUser].userName= $("#userName-settings").val();
    users[enteredUser].userEmail= $("#email-settings").val();
    users[enteredUser].userPassword=$("#password-settings").val();
    localStorage.setItem("users" , JSON.stringify(users));
});






