var nickname

$("#b_start").on("click", () => {

 nickname = $("#nickname").val()
 window.location.href = "select_level.html";

})

$("#b_go").on("click", () => {

 window.location.href = "Spafy.html";

})

$("#b_sp").on("click", () => {

 window.location.href = "questions.html";

})

const loadContent = () => {
 
   $("#content-wrapper").load("html/about_us.html");   

}

