localStorage.setItem("WhereIsUser","/EndermanWeb/ClassicChat/ClassicChatHome/Chat.html");
MessagerUsername = localStorage.getItem("UsernameCCHAT");
firebase.database().ref("/USERS/").child(localStorage.getItem("Username")).once('value')
          .then((snapshot) => {
            const userData = snapshot.val();
            badge = userData['badges'];
          });
autoscrollchat = 1;
function autoscroll(){
    if(autoscrollchat === 1){
        autoscrollchat = 0;
        document.getElementById("autoscroll").className = "btn btn-danger";
        document.getElementById("autoscroll").innerHTML = "Auto Scroll Chat: Off"
    } else if(autoscrollchat === 0){
        autoscrollchat = 1;
        document.getElementById("autoscroll").className = "btn btn-success";
        document.getElementById("autoscroll").innerHTML = "Auto Scroll Chat: On"
    }
}
function send(){
    if(document.getElementById("msg").value == ""){
    }
    else{
      msg = document.getElementById("msg").value;
      const date = new Date();
            const options = {
              timeZone: 'Asia/Kolkata',
            hour12: false,
            };
        const ISTTime = date.toLocaleString('en-US', options);
      firebase.database().ref("/ClassicChat/" + RoomID).push({
            Name: MessagerUsername,
            Message: msg,
            badge: badge,
            time: "<i class='bi bi-clock'></i> " + "<i>" + ISTTime + "</i>",
      });
      document.getElementById("msg").value="";
    }
}
RoomID = localStorage.getItem("RoomID");
const sanitizedName = DOMPurify.sanitize(RoomID);
document.getElementById("ChatID").innerHTML="ChatID: " + RoomID
document.getElementById("ChatViewer").innerHTML = "Loading...";
function getData(){
database.ref("/ClassicChat/"+RoomID).on('value', function(snapshot) { 
        document.getElementById("ChatViewer").innerHTML = null;
        document.getElementById("ChatViewer").innerHTML = "Messages are encrypted --- This the start of the messages";
        const data = snapshot.val();
        snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        if(childKey != "Room(CHATID)" && childKey != "CREATED BY USER"){
            document.getElementById("ChatID").innerHTML="ChatID: " + RoomID
            chatkey = childKey; 
            chatdata = childData;
            console.log(chatkey);
            console.log(chatdata);
            Name = chatdata['Name'];
            Message = chatdata['Message'];
            Badge = chatdata['badge'];
            time = chatdata['time'];
            const sanitizedName = DOMPurify.sanitize(Name);
            const sanitizedMessage = DOMPurify.sanitize(Message);
            ChatUserName = "<div class='message'><h4 class='Name' style='margin-left: 5px; margin-right: 5px; text-align:left;'> " + sanitizedName + Badge + "</h4>";
            ChatUserMessage = "<h4 class='message_h4' style='text-align:left; margin-left: 5px; margin-right: 5px;'>" + sanitizedMessage + "<br> <br>" + time + " IST" + "</h4></div>";
            gap = "<h4 class='gap'></h4> <br>";
            if(Name == MessagerUsername){
                ChatUserName = "<div class='message user_message'><h4 class='Name' style='text-align: right; margin-left: 5px; margin-right: 5px;'> " + sanitizedName + Badge + "</h4>";
                ChatUserMessage = "<h4 class='message_h4' style='text-align: right; margin-left: 5px; margin-right: 5px;'>" + sanitizedMessage + "<br> <br>" + time + " IST" + "</h4></div>";
                gap = "<h4 class='gap'></h4> <br>";
            }
            ChatMessages = ChatUserName + ChatUserMessage;
            document.getElementById("ChatViewer").innerHTML += ChatMessages
            if(document.getElementById("ChatViewer").innerHTML == "") {
                document.getElementById("ChatViewer").innerHTML = "There are no messages";
            }
            if (autoscrollchat === 1){
                const element = document.getElementById("ChatViewer");
                element.scrollTop = element.scrollHeight;
            }
        }
    });
})}
getData();
function copyText() {
        navigator.clipboard.writeText("https://enderman-somnath.github.io/EndermanWeb/ClassicChat/?id="+RoomID+"&link=true")
        .then(function() {
            alert("Text copied to clipboard: " + "https://enderman-somnath.github.io/EndermanWeb/ClassicChat/?id="+RoomID+"&link=true");
        })
        .catch(function(error) {
            console.error("Unable to copy text: ", error);
        });
}
function logout() {
    localStorage.removeItem("UsernameCCHAT");   
    localStorage.removeItem("RoomID");
    window.location = "/EndermanWeb/ClassicChat/";
}
$("#msg").keyup(function(event) {
    if (event.keyCode === 13) {
        send();
    }
});