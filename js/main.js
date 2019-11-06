var nickname

$("#b_start").on("click", () => {

 nickname = $("#nickname").val()
 window.location.href = "select_level.html";

})

const loadContent = () => {
 
   $("#content-wrapper").load("html/about_us.html");   

}

