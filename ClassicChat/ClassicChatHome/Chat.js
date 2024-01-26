localStorage.setItem("WhereIsUser","/ClassicChat/ClassicChatHome/Chat.html");
firebase.auth().onAuthStateChanged((user) => {
if (user) {
  thisuseruid = user.uid;
  thisuserdisplayname = user.displayName;
} else {
  body = document.querySelector("body");
  body.innerHTML = "<div style='color:white; text-align: center; background-color: rgba(0, 0, 0, 0.514); border-radius: 20px; padding: 10px; padding-top:auto; padding-bottom:auto; width: 100%; height: 100%;  word-break:break-all; overflow:auto;'>" +
  "<h1 style='font-size: medium;'>" + "Login!" + "</h1>" +
  "<p>" + "Login to your account to continue" + "</p>" +
  "<button style='background-color: rgb(12, 99, 199); color: white; border: 0px; border-radius: 10px; padding: 20px;' id='LOGIN'>" + "Login now" + "</button></div>"
  document.getElementById("LOGIN").onclick = function(){window.location="/UserAccount/SignIn/"}
  localStorage.removeItem("UserPresent");
}
});
RoomID=localStorage.getItem("RoomID")
function copyText() {
  navigator.clipboard.writeText("https://endermanweb.pages.dev/ClassicChat/?id="+RoomID+"&link=true")
  .then(function() {
      alert("RoomID link copied to clipboard");
  })
  .catch(function(error) {
      console.error("Unable to copy text: ", error);
  });
}
function logout() {
localStorage.removeItem("UsernameCCHAT");   
localStorage.removeItem("RoomID");
window.location = "/ClassicChat/";
}
// Function to encrypt text
function encryptText(plaintext, key) {
  const encrypted = CryptoJS.AES.encrypt(plaintext, key).toString();
  return encrypted;
}

// Function to decrypt text
function decryptText(ciphertext, key) {
  try {
      const decrypted = CryptoJS.AES.decrypt(ciphertext, key);
      // Ensure that the decrypted data is valid UTF-8
      const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
      return decryptedText;
  } catch (error) {
      console.error("Error decrypting text:", error);
      return null; // Handle decryption error gracefully
  }
}

showothervar = 0
other = document.querySelector("#other")
function showother(){
  if (showothervar == 0){
    other.classList="";
    setTimeout(function(){;other.style.opacity = 1;},200);
    showothervar=1;
  }
  else if (showothervar == 1){
    other.style.opacity = 0;
    setTimeout(function(){;other.classList="hidden";},200);
    showothervar=0;
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
  var formattedDateTime;
  function send() {
    encryptionkey = generateRandomCharacters(100);
    formattedDateTime = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    msgInput = document.getElementById("msg");
    msgValue = msgInput.value.trim();
    if (msgValue === "") {
        return;
    } else if (msgValue !== "") {
        // Assuming RoomID is obtained from somewhere, ensure it is a string
        const sanitizedRoomID = String(RoomID);

        // Construct the database reference using the sanitized RoomID
        database.ref(`/ClassicChat/${sanitizedRoomID}/`).push({
            username: thisuseruid,
            name: thisuserdisplayname,
            message: encryptText(msgValue, encryptionkey),
            time: `<i class='bi bi-clock' title='The time is always IST at all places'></i> <i>${formattedDateTime} IST</i>`,
            encryptionkey: encryptionkey
        })
        .then(() => {
            setTimeout(function(){
                msgInput.value = "";
            },10)
        })
        .catch((error) => {
            console.error('Error pushing data:', error);
        });
    }
}
firebase.database().ref("/ClassicChat/").child(RoomID).once('value')
.then((snapshot) => {
    const userData = snapshot.val();
    const roomIDElements = document.querySelectorAll('#RoomID');
    roomIDElements.forEach(element => {
    element.innerHTML = RoomID;
    });
    const CreatedByElements = document.querySelectorAll('#CreatedBy');
    CreatedByElements.forEach(element => {
    element.removeChild(element.firstChild);
    element.innerHTML = "Created By: " + userData['CREATEDBYUSER'];
      });
        });
                        

        let maxVisibleMessages = 20;

        function updateMessageVisibility(messages) {
            const chatViewer = document.getElementById("ChatViewer");
        
            for (let i = 0; i < messages.length; i++) {
                if (i >= messages.length - maxVisibleMessages) {
                    messages[i].classList.add("visible");
                } else {
                    messages[i].classList.remove("visible");
                }
            }
        }
        
        function getData() {
            const chatViewer = document.getElementById("ChatViewer");
            startvar = 0
        
            firebase.database().ref(`/ClassicChat/${RoomID}/`).on('child_added', function(childSnapshot) {
                const data = childSnapshot.val();
                const encryptionKey = data.encryptionkey;
                const message = data.message;
                const name = data.name;
                const time = data.time;
                const username = data.username;
        
                if (username) {
                    let chatHTML = '';
                    if (username == thisuseruid) {
                        chatHTML = `
                            <div class='usermessagedata'>
                                <h1 class='userName'>${name}</h1>
                                <p class='usermessage'>${decryptText(message, encryptionKey)}</p>
                                <p class='userTime'>${time}</p>
                            </div>
                        `;
                    } else if (username != thisuseruid) {
                        chatHTML = `
                            <div class='messagedata'>
                                <h1 class='name'>${name}</h1>
                                <p class='message'>${decryptText(message, encryptionKey)}</p>
                                <p class='time'>${time}</p>
                            </div>
                        `;
                    }

                    if(startvar === 0){
                        chatViewer.innerHTML=""
                        startvar = 1
                    }
                    chatViewer.innerHTML += chatHTML;
                    const messages = chatViewer.getElementsByClassName("messagedata");
                    updateMessageVisibility(messages); // Update message visibility after adding a new message
                    chatViewer.scrollTop = chatViewer.scrollHeight; // Scroll to the bottom
                }
            });
        }
        
        // Call the function to fetch and display messages
        getData();
        

/* if (chatViewer.innerHTML === "") {
  chatViewer.innerHTML = "There are no messages";
} */
/*getData();*/

$("#msg").keyup(function(event) {
    if (event.keyCode === 13) {
        send();
    }
});
