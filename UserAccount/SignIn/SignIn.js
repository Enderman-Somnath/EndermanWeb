localStorage.setItem("WhereIsUser","/EndermanWeb/UserAccount/SignIn/");
function signInWithEmailPassword() {
  const email = document.getElementById("Email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User sign-in successful
      const user = userCredential.user;
      console.log("User signed in:", user);

      // Set UserPresent in local storage
      localStorage.setItem("UserPresent", true);

      // Redirect to user account page
      window.location = "/EndermanWeb/UserAccount";
    })
    .catch((error) => {
      // User sign-in failed
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error signing in:", errorMessage);

      // Handle specific error cases
      if (errorCode === "auth/wrong-password") {
        window.alert("Incorrect password. Please try again.");
      } else if (errorCode === "auth/user-not-found" || errorCode === "auth/invalid-email") {
        window.alert("The email address entered is not valid or the user does not exist. Please check your email or create a new account.");
      } else {
        window.alert(errorMessage);
      }
    });
}
function resetPassword() {
  const email = prompt("Please type your email to send password reset email.");
  if(email == null) {
    alert("Password reset not sent");
    return
  }
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      window.alert("Password reset email sent. Please check your email to reset your password.");
    })
    .catch((error) => {
      window.alert("Failed to send password reset email. Please make sure the email is valid and it exists on the website");
      console.error("Error sending password reset email:", error);
    });
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