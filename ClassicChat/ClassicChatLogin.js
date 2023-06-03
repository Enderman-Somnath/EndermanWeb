localStorage.setItem("WhereIsUser","/EndermanWeb/ClassicChat/ClassicChatLogin.html");
// Your web app's Firebase configuration
IsUserPresent = localStorage.getItem("UserPresent");
if (IsUserPresent === null) {
window.alert("Sign in to use ClassicChat");
window.location = "/EndermanWeb/UserAccount/SignIn/SignIn.html";
}
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
    function addUser() {
        if(document.getElementById("inputChatID").value == ""){
            window.alert("Cant Use Blank ChatID");
        }
        else{
        document.getElementById("EnterChatID").innerHTML="Please Wait"
        document.getElementById("EnterChatID").disabled = true;
        RoomID = document.getElementById("inputChatID").value;
        setTimeout(function(){
            firebase.database().ref("/ClassicChat/").child(RoomID).update({
                "Room(CHATID)" : "Created By ClassicChat"
          });
          setTimeout(function(){
        localStorage.setItem("RoomID", RoomID);
        localStorage.setItem("UsernameCCHAT", localStorage.getItem("Name"));
        window.location = "/EndermanWeb/ClassicChat/ClassicChatHome/Chat.html";
          }, 900);
        }, 2000)
        }
        
        
  }

  var w = document.documentElement.clientWidth || window.innerWidth;
  if (w <= 480) {
    document.getElementById("topnav").className = "hidden";
    document.getElementById("mobile_nav_button").className = "mobile_nav_button";
    document.getElementById("CLASSICCHAT").style = "margin-top: 10px;"
} else {
    document.getElementById("topnav").className = "topnav desktop";
    document.getElementById("CLASSICCHAT").style = "margin-top: 75px;"
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
$("#inputChatID").keyup(function(event) {
    if (event.keyCode === 13) {
        addUser();
    }
});