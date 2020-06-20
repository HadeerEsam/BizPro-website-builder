

let users;
let numberOfUsers=-1;

// check localstorage empty or not 
if(localStorage.getItem("users") == null&& localStorage.getItem("numberOfUsers")==null){

   users = [];
   numberOfUsers=-1;

}else{

   users = JSON.parse(localStorage.getItem("users"));
}


$("#signup-btn").click(function () { 
    if( ($("#username").val()!="") && ($("#password").val()!="") ){

        let exist = false;

        //checking if the username is already existed
        
        for(let i = 0; i < users.length; i++){
    
            if(users[i].userName == $("#username").val().trim())
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
        }
        else{
        
            //exists
            $("#existed").css("display" , "block");
    
        }
       
    }else{
        window.alert("Fields are empty!!!");
    }
});


function addUser() {

    let userInfo = {

        userName : $("#username").val().trim() ,
        userEmail : $("#email").val() ,
        userPassword :$("#password").val()

    }
    
    users.push(userInfo);
    localStorage.setItem("users" , JSON.stringify(users));
}


// end of registration page code










