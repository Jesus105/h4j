var nickname

const firebaseConfig = {
   apiKey: "AIzaSyCFfnfp-wMfnGuQH3qPOOB_nIXgmsj-vVI",
   authDomain: "pasfy-34e89.firebaseapp.com",
   databaseURL: "https://pasfy-34e89.firebaseio.com",
   projectId: "pasfy-34e89",
   storageBucket: "pasfy-34e89.appspot.com",
   messagingSenderId: "998546065637",
   appId: "1:998546065637:web:bba6bf16b00a021f0aec0c"
 };

$("#b_start").on("click", () => {

 nickname = $("#nickname").val()
 console.log(nickname)


})

const loadContent = () => {
 
   $("#content-wrapper").load("html/about_us.html");   

}

