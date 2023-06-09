localStorage.setItem("WhereIsUser","/EndermanWeb/Community/community.html");
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

  firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/Community/").on('value', function (snapshot) {
          document.getElementById("CommunityRoomsViewer").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                CommRoomNames = childKey;
                if (CommRoomNames != "Community"){
                console.log("Community Rooms: " + CommRoomNames);
                row = "<div class='room_name' style='overflow:auto; background-color:#333; cursor:pointer; padding: 15px; text-align: center; color:white; margin-top: 5px; border-radius:20px;' id=" + CommRoomNames + " onclick='RedirectToCommunityRoom(this.id)'>" + CommRoomNames + "</div>";
                document.getElementById("CommunityRoomsViewer").innerHTML += row;
            }
          });
    });
}

function RedirectToCommunityRoom(CommRoom){
    console.log("Redirecting to " + CommRoom);
    localStorage.setItem("CommRoom",CommRoom);
    window.open("CommunityRoom/communityroom.html");
}
var w = document.documentElement.clientWidth || window.innerWidth;
if (w <= 480) {
  document.getElementById("topnav").className = "hidden";
  document.getElementById("mobile_nav_button").className = "mobile_nav_button";
  document.getElementById("community").style = "margin-top: 10px;"
  document.getElementById("communitycreate").style = "margin-top: 10px;"
} else {
  document.getElementById("topnav").className = "topnav desktop";
  document.getElementById("community").style = "margin-top: 75px;"
  document.getElementById("communitycreate").style = "margin-top: 10px;"
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