

 let users;
 let numberOfUsers=-1;
 
if(localStorage.getItem("users") == null&& localStorage.getItem("numberOfUsers")==null){

    users = [];
    numberOfUsers=-1;

}else{

    users = JSON.parse(localStorage.getItem("users"));
}

// start of login page code

 $("#login").click(function(){

    let rightPassword = false;
    let rightUsername = false;
    let indexOfRight;

    for(let i = 0; i < users.length; i++){

        if(users[i].userName == $("#username-input").val().trim()){

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


