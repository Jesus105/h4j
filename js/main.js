var nickname

$("#b_start").on("click", () => {

 nickname = $("#nickname").val()
 window.location.href = "http://stackoverflow.com";

})

const loadContent = () => {
 
   $("#content-wrapper").load("html/about_us.html");   

}

