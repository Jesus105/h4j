 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB9-pAYtZiBCe5b0lFt5A3vZefx7KVuhA0",
    authDomain: "database-bd891.firebaseapp.com",
    databaseURL: "https://database-bd891.firebaseio.com",
    projectId: "database-bd891",
    storageBucket: "database-bd891.appspot.com",
    messagingSenderId: "582638644199",
    appId: "1:582638644199:web:6e900390662f47e0f7ab42"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var productsRef = database.ref('/nickname')

var dbContent;
var nickName;


$("#b_start").on( "click",() =>{
   print("Hola");
  });