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
$("#sg_1").on("click", () => {

 window.location.href = "questions2.html";

})
$("#sg_2").on("click", () => {

 window.location.href = "questions3.html";

})
$("#sg_3").on("click", () => {

 window.location.href = "questions4.html";

})
$("#sg_4").on("click", () => {

 window.location.href = "result.html";

})

const loadContent = () => {
 
   $("#content-wrapper").load("html/about_us.html");   

}

