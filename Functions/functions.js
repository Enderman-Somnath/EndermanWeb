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

  var secretPassword = "My1People2In3This4Website5Are6The7Best9";

  // Check secret password before performing any operations
  function checkSecretPassword() {
    database.ref('/secrets/websiteSecret').once('value')
      .then(function(snapshot) {
        var storedSecret = snapshot.val();
        if (storedSecret === secretPassword) {
        }
      })
  }
  
  // Call the function to check the secret password
  checkSecretPassword();
  
function homeWeb(){
    window.location="/"
}
function classicChatWeb(){
    window.location="/ClassicChat/"
}
function youtubeWeb(){
    window.location="/Youtube/"
}
function PopUp(url){
    popupWindow = window.open(url,'popUpWindow','height=600,width=800,');
}

function FunWeb(){
    window.location="/Fun/"
}

mobilenav = false
mobilenavid = document.querySelector("#topnav_mobile")
mobilenavbuttonid = document.querySelector("#mobile_nav_button")
function showorhidemobilenav(){
  if(mobilenav == false){
      mobilenavid.style.display = "block";
      setTimeout(function(){mobilenavid.style.opacity = 1;},200);
      mobilenav = true;
      mobilenavbuttonid.innerHTML = "<i class='bi bi-x-lg'></i> Close";
  }
  else if(mobilenav == true){
    setTimeout(function(){mobilenavid.style.display = "none";},200);
    mobilenavid.style.opacity = 0;
    mobilenav = false;
    mobilenavbuttonid.innerHTML = "<i class='bi bi-list'></i> Navigation";
  }
}

const contextmenu = document.querySelector("#context-menu")

document.addEventListener("contextmenu",e =>{
    contextmenu.style.opacity=0
    contextmenu.style.display = "none";
    e.preventDefault();
    contextmenu.style.top =  e.clientY + "px";
    contextmenu.style.left = e.clientX + "px";
    contextmenu.style.display = "block";
    setTimeout(function(){;contextmenu.style.opacity = 1;},200)
});

document.addEventListener("click", () => {contextmenu.style.opacity=0;setTimeout(function(){contextmenu.style.display = "none"},200); });
