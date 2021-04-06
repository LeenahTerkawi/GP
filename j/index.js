  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
     apiKey: "AIzaSyBIi1E_reXf93KHwjcJsQlagGLALmb2WYU",
     authDomain: "css-hero.firebaseapp.com",
     databaseURL: "https://css-hero-default-rtdb.firebaseio.com",
     projectId: "css-hero",
     storageBucket: "css-hero.appspot.com",
     messagingSenderId: "184690434253",
     appId: "1:184690434253:web:c35f8768d6636581774984",
     measurementId: "G-L8PWLQ5P48"
   };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   firebase.analytics();


   firebase.auth.Auth.Persistence.LOCAL;

   $('#btn-login').click(function()
   {
        var email = $("#email").val();
        var password = $("#password").val();

        if (email != "" && password != ""){

             var result = firebase.auth().signInWithEmailAndPassword(email, password);

             result.catch(function(error){
                  var errorCode = error.code;
                  var errorMassage = error.massage;

                  console.log(errorCode);
                  console.log(errorMassage);
                  window.alert("Message : " + errorMassage);
             });
        }else{

             window.alert("please fill out all fieldes.");
        }
   });