// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBorX47v0vrPv198X_hlzEMEmpRxhMd-zs",
      authDomain: "kwitter-1b798.firebaseapp.com",
      databaseURL: "https://kwitter-1b798-default-rtdb.firebaseio.com",
      projectId: "kwitter-1b798",
      storageBucket: "kwitter-1b798.appspot.com",
      messagingSenderId: "599563909226",
      appId: "1:599563909226:web:6ddb254a0e81f19e777213"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("User_Name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name+ "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
