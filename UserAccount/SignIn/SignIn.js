function checkUsernameExists(username) {
  return firebase
    .database()
    .ref("/USERS/" + username)
    .once("value")
    .then((snapshot) => {
      return snapshot.exists();
    });
}
function encryptText(text, key) {
  const encrypted = CryptoJS.AES.encrypt(text, key).toString();
  return encrypted;
}
function decryptText(encryptedText, key) {
  const decrypted = CryptoJS.AES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
  return decrypted;
}
function validateInput(input) {
  // Regular expression pattern to allow specific symbols
  var pattern = /^[a-zA-Z0-9@\-!]+$/;
  
  return pattern.test(input);
}
function Login(username, password) {
  const inputUsername = document.getElementById("Username").value;
  const inputPassword = document.getElementById("password").value;
  if(validateInput(inputUsername)){
    checkUsernameExists(inputUsername)
    .then((exists) => {
      if (!exists) {
        window.alert("The username does not exist. Please enter a valid username.");
      } else {
        firebase.database().ref("/USERS/").child(inputUsername).once('value')
          .then((snapshot) => {
            const userData = snapshot.val();
            const encryptedPassword = userData.password;
            const encryptionKey = userData.encryptionkey;
            const decryptedPassword = decryptText(encryptedPassword, encryptionKey);
            if (inputPassword === decryptedPassword) {
              localStorage.setItem("UserPresent",true)
              localStorage.setItem("Username",inputUsername)
              localStorage.setItem("Password",encryptedPassword)
              localStorage.setItem("Name",userData['name'])
              window.location = "/EndermanWeb/UserAccount/UserInfo/"
            } else {
              window.alert("Incorrect password. Please try again.");
            }
          })
          .catch((error) => {
            window.alert("An error occurred while retrieving user data. Please try again later.");
            console.error("Error: ", error);
          });
      }
    })
    .catch((error) => {
      window.alert("Sorry, but an error occurred during the username check. Please try again later.");
      console.error("Error: ", error);
    });   
  } else {
    alert("Use valid symbols like 'a-z','A-Z','-','+','!','1-9'")
  }
}

  


var w = document.documentElement.clientWidth || window.innerWidth;
    if (w <= 480) {
    document.getElementById("topnav").className = "hidden";
    document.getElementById("mobile_nav_button").className = "mobile_nav_button";
    } else {
    document.getElementById("topnav").className = "topnav desktop";
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