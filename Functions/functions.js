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
  const database = firebase.database();
function homeWeb(){
    window.location="/EndermanWeb/"
}
function classicChatWeb(){
    window.location="/EndermanWeb/ClassicChat/"
}
function youtubeWeb(){
    window.location="/EndermanWeb/Youtube/"
}
function community(){
    window.location="/EndermanWeb/Community/"
}
function PopUp(url){
    popupWindow = window.open(url,'popUpWindow','height=600,width=800,');
}
var DEV = document.createElement('div');
DEV.innerHTML = "<div style='position: fixed; background-color: black; bottom: 0; left: 0; width: 100%; height: 3%; text-align: center; color: white;'> <h1 style='font-size: 18px;'> DEV Version - EndermanWEB </h1> </div>";
document.body.appendChild(DEV);

