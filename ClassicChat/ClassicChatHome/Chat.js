localStorage.setItem("WhereIsUser","/EndermanWeb/ClassicChat/ClassicChatHome/Chat.html");
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    usersnamecchat = user.displayName;
    togetbadgeneeduid = user.uid;
    MessagerUsername = usersnamecchat;
    firebase.database().ref("/USERS/").child(togetbadgeneeduid).once('value')
          .then((snapshot) => {
            const userData = snapshot.val();
            badge = userData['badges'];
          });
  } else {
    localStorage.removeItem("UserPresent");
  window.location = "/EndermanWeb/UserAccount/SignIn/";
  }
});
IsUserPresent = localStorage.getItem("UserPresent");
if (IsUserPresent === null) {
window.alert("Sign in to use ClassicChat");
window.location = "/EndermanWeb/UserAccount/SignIn/";
}
function encryptText(text, key) {
    const encrypted = CryptoJS.AES.encrypt(text, key).toString();
    return encrypted;
  }
  function decryptText(encryptedText, key) {
    const decrypted = CryptoJS.AES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
    return decrypted;
  }
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
function generateRandomCharacters(count) {
    var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    var randomCharacters = "";
  
    while (randomCharacters.length < count) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      randomCharacters += characters.charAt(randomIndex);
    }
  
    return randomCharacters;
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
        const encryptionKey = generateRandomCharacters(30);
      firebase.database().ref("/ClassicChat/" + RoomID).push({
            Name: MessagerUsername,
            Message: encryptText(msg,encryptionKey),
            encryptionkey: encryptionKey,
            badge: badge,
            time: "<i class='bi bi-clock'></i> " + "<i>" + ISTTime + "</i>",
      });
      document.getElementById("msg").value="";
    }
}
RoomID = localStorage.getItem("RoomID");
const sanitizedName = DOMPurify.sanitize(RoomID);
document.getElementById("ChatID").innerHTML="ChatID: " + RoomID
database.ref("/ClassicChat/"+RoomID).on('value', function(snapshot) { 
    const data = snapshot.val();
    snapshot.forEach((childSnapshot) => {
    const childKey = childSnapshot.key;
    const childData = childSnapshot.val();
    if(childKey == "CREATEDBYUSER"){
        createdbyuser = childData;
    }
});
});
function getData(){
database.ref("/ClassicChat/"+RoomID).on('value', function(snapshot) { 
        document.getElementById("ChatViewer").innerHTML = null;
        document.getElementById("ChatViewer").innerHTML = "Messages are encrypted --- This the start of the messages. Room created by user: " + createdbyuser;
        const data = snapshot.val();
        snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        document.getElementById("ChatID").innerHTML="ChatID: " + RoomID;
        if(childKey != "Room(CHATID)" && childKey != "CREATEDBYUSER"){
            chatkey = childKey; 
            chatdata = childData;
            Name = chatdata['Name'];
            MessageEncrypted = chatdata['Message'];
            Message = decryptText(MessageEncrypted,chatdata['encryptionkey']);
            Badge = chatdata['badge'];
            time = chatdata['time'];
            const sanitizedName = DOMPurify.sanitize(Name);
            const sanitizedMessage = DOMPurify.sanitize(Message);
            ChatUserName = "<div class='messagedata'><h4 class='name'> " + sanitizedName + Badge + "</h4>";
            ChatUserMessage = "<h4 class='message'>" + sanitizedMessage + "</h4>";
            Time = "<p class='time'>" + time + " IST" + "</p>" + "</div>";
            if(Name == MessagerUsername){
                ChatUserName = "<div class='usermessagedata'><h4 class='userName'> " + sanitizedName + Badge + "</h4>";
                ChatUserMessage = "<h4 class='usermessage'>" + sanitizedMessage + "</h4>";
                Time = "<p class='userTime'>" + time + " IST" + "</p>" + "</div>";
            }
            ChatMessages = ChatUserName + ChatUserMessage + Time;
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