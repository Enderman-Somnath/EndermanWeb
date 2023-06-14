localStorage.setItem("WhereIsUser","/EndermanWeb/Community/");
// Your web app's Firebase configuration
function getData() {
    firebase.database().ref("/Community/").on('value', function (snapshot) {
          document.getElementById("communityroomsviewer").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                CommRoomNames = childKey;
                if (CommRoomNames != "Community"){
                row = "<h1 class='commrooms' id=" + CommRoomNames + " onclick='RedirectToCommunityRoom(this.id)'>" + CommRoomNames + "</h1>";
                document.getElementById("communityroomsviewer").innerHTML += row;
            }
          });
    });
}
getData();
function RedirectToCommunityRoom(CommRoom){
    console.log("Redirecting to " + CommRoom);
    localStorage.setItem("CommRoom",CommRoom);
    window.open("CommunityRoom/");
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