

 let users;
 let numberOfUsers=-1;
 
if(localStorage.getItem("users") == null&& localStorage.getItem("numberOfUsers")==null){

    users = [];
    numberOfUsers=-1;

}else{

    users = JSON.parse(localStorage.getItem("users"));
}

$(".startnow").attr("href" , "login.html" );

// welcome page



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


// start of login page code

 $("#login").click(function(){

    let rightPassword = false;
    let rightUsername = false;
    let indexOfRight;

    for(let i = 0; i < users.length; i++){

        if(users[i].userName == $("#username-input").val()){

            indexOfRight = i;
            rightUsername = true;
            
            break;
        }

    }

    if(rightUsername == true){

        //username is right

        //hide wrong username paragraph if appeared
        $("#wrong-username").css("display" , "none");

        if(users[indexOfRight].userPassword == $("#password-input").val() ){

            // password is right and user name is right

            //hide wrong password paragraph if appeared
            $("#wrong-password").css("display" , "none");

            // go to home page 
            $("#login-link").attr("href","mySites.html");
            numberOfUsers=indexOfRight;
           localStorage.setItem("numberOfUsers",JSON.stringify(numberOfUsers));                      

        }else{

            //password is wrong but username is right
            $("#wrong-password").css("display" , "block");
            console.log("password is wrong");

        }

    }else{

        //username is wrong
        $("#wrong-username").css("display" , "block");
    }
})

// end of login page code


// start of registration page code

$("#signup-btn").click(function () { 

    let exist = false;

    //checking if the username is already existed

    for(let i = 0; i < users.length; i++){

        if(users[i].userName == $("#username").val())
        {
            exist = true;
            break;
        }

    }

    if(exist == false){

        //does not exist

        // to hide exist paragraph if appeared
        $("#existed").css("display" , "none");

        if($("#password").val() == $("#repeated-password").val()){

            // to hide missmatch paragraph if appeared
            $("#password-missmatch").css("display" , "none");
            addUser();
            
            numberOfUsers=users.length-1;
           localStorage.setItem("numberOfUsers",JSON.stringify(numberOfUsers));                      

           $("#sign-up").attr("href","mySites.html");


        }else{

            // to show missmatch paragraph
            $("#password-missmatch").css("display" , "block");

        }

    }else{

        //exists
        $("#existed").css("display" , "block");

    }
});


function addUser() {

    let userInfo = {

        userName : $("#username").val() ,
        userEmail : $("#email").val() ,
        userPassword :$("#password").val()

    }
    
    users.push(userInfo);
    localStorage.setItem("users" , JSON.stringify(users));
}


// end of registration page code


//start of account setting page
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

$("#updateBtn").click(function () { 
    users[enteredUser].userName= $("#userName-settings").val();
    users[enteredUser].userEmail= $("#email-settings").val();
    users[enteredUser].userPassword=$("#password-settings").val();
    localStorage.setItem("users" , JSON.stringify(users));
});
//end of account setting page








