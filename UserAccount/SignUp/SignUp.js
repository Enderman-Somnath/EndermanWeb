localStorage.setItem("WhereIsUser","/EndermanWeb/UserAccount/SignUp/");
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
  function SignUp(name,username, password) {
    const inputName = document.getElementById("Name").value;
    const inputUsername = document.getElementById("Username").value;
    const inputPassword = document.getElementById("password").value;
    if (inputPassword.length < 6) {
      window.alert("Password should be at least 6 characters long.");
      return;
    }
    if (validateInput(inputName)) {
      console.log("Input is valid");
      if (validateInput(inputUsername)) {
        console.log("Input is valid");
        const encryptionKey = 'EWEBECRYPT';
        const encryptedPassword = encryptText(inputPassword, encryptionKey);
        checkUsernameExists(inputUsername)
      .then((exists) => {
        if (exists) {
          window.alert("The username already exists. Please choose another username.");
        } else {
          firebase.database().ref("/USERS/").child(inputUsername).update({
            name: inputName,
            username: inputUsername,
            password: encryptedPassword,
            badges:"",
          });
          localStorage.setItem("UserPresent",true)
          localStorage.setItem("Name",inputName)
          localStorage.setItem("Username",inputUsername)
          localStorage.setItem("Password",encryptedPassword)
          window.location = "/EndermanWeb/UserAccount/UserInfo/UserInfo.html"
        }
      })
      .catch((error) => {
        window.alert("Sorry, but an error occurred during the creation/checking of the username. Make sure you have entered a valid password/username.");
        console.error("Error: ", error);
      });
      } else {
        console.log("Input contains disallowed symbols");
        window.alert("Please use valid symbols for Username '@','1-9','-','!','+','all letters'")
      }
    } else {
      console.log("Input contains disallowed symbols");
      window.alert("Please use valid symbols for Name '@','1-9','-','!','+','all letters'")
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