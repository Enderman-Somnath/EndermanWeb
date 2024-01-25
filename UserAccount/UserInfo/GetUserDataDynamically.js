firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      document.getElementById("account").innerHTML = "<i class='bi bi-person-circle'></i> " + "Account";
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