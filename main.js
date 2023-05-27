// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAJgNXiQ7j0-Jly8hwtkhnSSuKPgQhZj0",
  authDomain: "classicchat-cfb87.firebaseapp.com",
  databaseURL: "https://classicchat-cfb87-default-rtdb.firebaseio.com",
  projectId: "classicchat-cfb87",
  storageBucket: "classicchat-cfb87.appspot.com",
  messagingSenderId: "481166683980",
  appId: "1:481166683980:web:a865253f257369395329e9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/UpdatesENDERMANWEBSHOW/").on('value', function(snapshot) { document.getElementById("ChatViewer").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "Updates") {
  firebase_message_id = childKey;
  message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
Name = message_data['Name'];
message = message_data['message'];
name_with_tag = "<div class='message'><h4 class='Name' style='margin-left: 5px; margin-right: 5px; text-align:left;'> By: " + Name + "</h4>";
message_with_tag = "<h4 class='message_h4' style='text-align:left; margin-left: 5px; margin-right: 5px;'>" + message + "</h4></div>";
gap = "<h4 class='gap'></h4> <br>";
row = name_with_tag + message_with_tag + "<br>";
document.getElementById("ChatViewer").innerHTML += row;
//End code
const element = document.getElementById("ChatViewer");
  element.scrollTop = element.scrollHeight;
} });  }); }
getData();

var w = document.documentElement.clientWidth || window.innerWidth;
if (w <= 480) {
  document.getElementById("topnav").className = "hidden";
  document.getElementById("centerandgapontop").className = "";
  document.getElementById("mobile_nav_button").className = "mobile_nav_button";
} else {
  document.getElementById("topnav").className = "topnav desktop";
  document.getElementById("centerandgapontop").className = "gapLabel";
}
mobilenav = false
function showorhidemobilenav(){
  if(mobilenav == false){
      document.getElementById("topnav_mobile").className = "mobile_nav";
      mobilenav = true;
  }
  else if(mobilenav == true){
      document.getElementById("topnav_mobile").className = "mobile_nav hidden";
      mobilenav = false;
  }
}
