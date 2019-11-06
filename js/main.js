var nickname

$("#b_start").on("click", () => {

 nickname = $("#nickname").val()


})

const loadContent = () => {
 
   $("#content-wrapper").load("html/about_us.html");   

}

