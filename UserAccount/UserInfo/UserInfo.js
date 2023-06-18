localStorage.setItem("WhereIsUser","/EndermanWeb/UserAccount/UserInfo/");
function signout() {
    var result = window.confirm("Do you want to sign out?");
    
    if (result) {
        localStorage.removeItem("UserPresent");
        localStorage.removeItem("Password");
        localStorage.removeItem("Username");
        localStorage.removeItem("Name");
        window.alert("Signed out successfully");
        window.location = "/EndermanWeb/UserAccount/SignIn/";
    } else {
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
  function encryptText(text, key) {
    const encrypted = CryptoJS.AES.encrypt(text, key).toString();
    return encrypted;
  }
  function decryptText(encryptedText, key) {
    const decrypted = CryptoJS.AES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
    return decrypted;
  }
  firebase.database().ref("/USERS/").child(localStorage.getItem("Username")).once('value')
  .then((snapshot) => {
    const userData = snapshot.val();
    const encryptedPassword = userData.password;
    localStorage.setItem("UserPresent",true)
    localStorage.setItem("Username",userData['username'])
    localStorage.setItem("Password",encryptedPassword)
    localStorage.setItem("Name",userData['name'])
    decryptedPassword = decryptText(encryptedPassword,userData['encryptionkey']);
    setTimeout(function(){
      document.getElementById("Name").innerHTML += userData['name'] + ", Badges:" + userData['badges'];
      setTimeout(function(){
        document.getElementById("Username").innerHTML += userData['username'];
        setTimeout(function(){
          document.getElementById("loading-animation").className = "hidden"
        },500)
      },1000)
    },1000)
  })
  .catch((error) => {
    window.alert("An error occurred while retrieving user data. Please try again later.");
    console.error("Error: ", error);
  });
function showpass(){
  var userInput = prompt("Type Password to decrypt and show");
    if(userInput === decryptedPassword){
      document.getElementById("password").innerHTML = "Password: " + decryptedPassword;
    } else if(userInput !== decryptedPassword){
      alert("Wrong Password");
    }
}

