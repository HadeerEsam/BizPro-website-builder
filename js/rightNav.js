$(".btn").click(function(){
    $(this).css("border" , "1px solid #d73e4d");
    
})



parent.$(".btn").trigger(function(){
    $("#contentTap").append('<span class="text-danger"> Html Button </span>');
});
