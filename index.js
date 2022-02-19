$(document).ready(function () {
    $("#list-items").html(localStorage.getItem("listItems"));

    $(".add-items").submit(function(event){
        event.preventDefault();

        var item = $("#todo-list-item").val();

        if (item) {
        $("#list-items").append("<li><input class = 'checkbox' type='checkbox'/>"+ item +  "<a class='remove'>Click To Remove</a><hr></li>")
        localStorage.setItem("listItems",$("#list-items").html());
        
        $("#todo-list-item").val("");
        } 

    });

    document.querySelector("#btnLearn").addEventListener("click", event => {
        location.href = "https://www.linkedin.com/in/anshobrii/";
    })

    
    //  $(".checkbox").change(function(){
    //      console.log("checkbox checked!");
    //  })

    $(document).on("change", ".checkbox", function() {
        if($(this).attr("checked")){ 
                $(this).removeAttr("checked");
        } else{
             $(this).attr("checked","checked");
        }
       
        $(this).parent().toggleClass("completed");
        localStorage.setItem("listItems",$("#list-items").html());

    });


    $(document).on("click",".remove", function(){
        $(this).parent().remove();
        localStorage.setItem("listItems",$("#list-items").html());
    });

});
//Add animation if someone add something like dance song or any activity then that relable 
// animation pop to the screen
//Add fadein and fadeout to the todo item when deleted or added 
