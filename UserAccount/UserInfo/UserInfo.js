localStorage.setItem("WhereIsUser","/EndermanWeb/UserAccount/UserInfo/UserInfo.html");
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
function signout() {
    var result = window.confirm("Do you want to sign out?");
    
    if (result) {
        localStorage.removeItem("UserPresent");
        localStorage.removeItem("Password");
        localStorage.removeItem("Username");
        localStorage.removeItem("Name");
        window.alert("Signed out successfully");
        window.location = "/EndermanWeb/UserAccount/SignIn/SignIn.html";
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
    decryptedPassword = decryptText(encryptedPassword, "EWEBECRYPT");
    setTimeout(function(){
      document.getElementById("Name").innerHTML += userData['name'];
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
passhown = 0;
function showpass(){
  if(passhown === 0){
    var userInput = prompt("Type Password to decrypt and show");
    if(userInput === decryptedPassword){
      document.getElementById("password").innerHTML = "Password: " + decryptedPassword + " <button class='btn btn-primary' onclick='showpass()'>Show Password</button>";
      passhown = 1;
    } else if(userInput !== decryptedPassword){
      alert("Wrong Password");
    }
} else if(passhown === 1){
  document.getElementById("password").innerHTML = "Password State: ENCRYPTED <button class='btn btn-primary' onclick='showpass()'>Show Password</button>"
}
}

