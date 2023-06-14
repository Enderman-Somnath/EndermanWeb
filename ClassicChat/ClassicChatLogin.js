localStorage.setItem("WhereIsUser","/EndermanWeb/ClassicChat/");
// Your web app's Firebase configuration
IsUserPresent = localStorage.getItem("UserPresent");
if (IsUserPresent === null) {
window.alert("Sign in to use ClassicChat");
window.location = "/EndermanWeb/UserAccount/SignIn/";
}
function validateInput(input) {
    // Regular expression pattern to allow specific symbols
    var pattern = /^[a-zA-Z0-9@\-!]+$/;
    
    return pattern.test(input);
  }
  function checkRoomExists(roomID) {
    return firebase
      .database()
      .ref("/ClassicChat/" + roomID)
      .once("value")
      .then((snapshot) => {
        return snapshot.exists();
      });
  }
    function addUser() {
        RoomID = document.getElementById("inputChatID").value;
        checkRoomExists(RoomID)
      .then((exists) => {
        if (exists) {
            if(validateInput(RoomID)){
                document.getElementById("EnterChatID").innerHTML="Joining Room"
                document.getElementById("EnterChatID").onclick = null;
                console.log("Loading room with ChatID: ",RoomID)
                setTimeout(function(){
                localStorage.setItem("RoomID", RoomID);
                localStorage.setItem("UsernameCCHAT", localStorage.getItem("Name"));
                window.location = "/EndermanWeb/ClassicChat/ClassicChatHome/";
              }, 900);
            }
            else{
                alert("Use valid symbols like 'a-z','A-Z','-','+','!','1-9'")
            }
        } else {
            if(validateInput(RoomID)){
                document.getElementById("EnterChatID").innerHTML="Creating Room"
                document.getElementById("EnterChatID").onclick = null;
                console.log("Creating/Loading room with ChatID: ",RoomID)
                firebase.database().ref("/ClassicChat/").child(RoomID).update({
                    "Room(CHATID)" : "Created By ClassicChat",
                    "CREATED BY USER": localStorage.getItem("Username"),
              });
                setTimeout(function(){
                localStorage.setItem("RoomID", RoomID);
                localStorage.setItem("UsernameCCHAT", localStorage.getItem("Name"));
                window.location = "/EndermanWeb/ClassicChat/ClassicChatHome/";
              }, 900);
            }
            else{
                alert("Use valid symbols like 'a-z','A-Z','-','+','!','1-9'")
            }
        }}); 
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

const myKeysValues = window.location.search;
const urlParams = new URLSearchParams(myKeysValues);
const chatid = urlParams.get('id')
console.log(chatid);
const islinktrue = urlParams.get('link')
console.log(islinktrue)
if(islinktrue === "true"){
  checkRoomExists(chatid)
  .then((exists) => {
    if (exists) {
        if(validateInput(chatid)){
            document.getElementById("EnterChatID").innerHTML="Joining Room"
            document.getElementById("EnterChatID").onclick = null;
            console.log("Loading room with ChatID: ",chatid)
            setTimeout(function(){
            localStorage.setItem("RoomID", chatid);
            localStorage.setItem("UsernameCCHAT", localStorage.getItem("Name"));
            window.location = "/EndermanWeb/ClassicChat/ClassicChatHome/";
          }, 900);
        }
        else{
            alert("Use valid symbols like 'a-z','A-Z','-','+','!','1-9'")
        }
    } else {
        if(validateInput(chatid)){
            document.getElementById("EnterChatID").innerHTML="Creating Room"
            document.getElementById("EnterChatID").onclick = null;
            console.log("Creating/Loading room with ChatID: ",chatid)
            firebase.database().ref("/ClassicChat/").child(chatid).update({
                "Room(CHATID)" : "Created By ClassicChat",
                "CREATED BY USER": localStorage.getItem("Username"),
          });
            setTimeout(function(){
            localStorage.setItem("RoomID", chatid);
            localStorage.setItem("UsernameCCHAT", localStorage.getItem("Name"));
            window.location = "/EndermanWeb/ClassicChat/ClassicChatHome/";
          }, 900);
        }
        else{
            alert("Use valid symbols like 'a-z','A-Z','-','+','!','1-9'")
        }
    }}); 
}
function checkforexistingroomoninput(){
  const button = document.getElementById("EnterChatID");
  button.innerHTML = "...";
  checkRoomExists(document.getElementById("inputChatID").value)
  .then((exists) => {
    if (exists) {
      button.innerHTML = "Join Room";
  console.log(document.getElementById("inputChatID").value);
    } else {
      button.innerHTML = "Create Room";
    }

    if(document.getElementById("inputChatID").value == "") {
      button.innerHTML = "Enter Room/Create Room(if new)";
    }
    });
  }