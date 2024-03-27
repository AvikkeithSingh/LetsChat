
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCBT2bNvRnOeGmQmN8hia_cjDoljaeYhW0",
      authDomain: "kwitter-15e65.firebaseapp.com",
      databaseURL: "https://kwitter-15e65-default-rtdb.firebaseio.com",
      projectId: "kwitter-15e65",
      storageBucket: "kwitter-15e65.appspot.com",
      messagingSenderId: "528222082437",
      appId: "1:528222082437:web:766972652e6511d47120ec"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
