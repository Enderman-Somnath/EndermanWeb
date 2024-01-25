localStorage.setItem("WhereIsUser","/UserAccount/SignIn/");
function signInWithEmailPassword() {
  const email = document.getElementById("Email").value;
  const password = document.getElementById("password").value;
  document.getElementById("SignIN").onlick = null;
  document.getElementById("SignIN").style.backgroundColor = "#003f92";
  document.getElementById("SignIN").innerText = "Signing in...";
  document.getElementById("SignIN").style.cursor = "not-allowed";
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User sign-in successful
      const user = userCredential.user;
      console.log("User signed in:", user);

      // Set UserPresent in local storage
      localStorage.setItem("UserPresent", true);

      // Redirect to user account page
      window.location = "/UserAccount";
    })
    .catch((error) => {
      // User sign-in failed
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById("SignIN").onclick = function() {signInWithEmailPassword()};
      document.getElementById("SignIN").style.backgroundColor = "#006eff";
      document.getElementById("SignIN").innerText = "Sign In";
      document.getElementById("SignIN").style.cursor = "pointer";
      console.error("Error signing in:", errorMessage);
      // Handle specific error cases
      if (errorCode === "auth/wrong-password") {
        document.getElementById("ERRORDIV").classList=""
        document.getElementById("ERRORDIV").innerText="Incorrect password. Please try again.";
        return
      } else if (errorCode === "auth/user-not-found" || errorCode === "auth/invalid-email") {
        document.getElementById("ERRORDIV").classList=""
        document.getElementById("ERRORDIV").innerText="The email address entered is not valid or the user does not exist. Please check your email or create a new account.";
        return
      } else {
        document.getElementById("ERRORDIV").classList=""
        document.getElementById("ERRORDIV").innerText=errorMessage;
        return
      }
    });
}
function resetPassword() {
  const email = prompt("Please type your email to send password reset email.");
  if(email == null) {
    document.getElementById("ERRORDIV").classList=""
    document.getElementById("ERRORDIV").innerText="Password rest not sent due to no email";
    return
  }
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      document.getElementById("ERRORDIV").classList=""
      document.getElementById("ERRORDIV").innerText="Password reset email sent. Please check your email to reset your password.";
    })
    .catch((error) => {
      document.getElementById("ERRORDIV").classList=""
      document.getElementById("ERRORDIV").innerText="Failed to send password reset email. Please make sure that the email is valid and it exists on this website";
      console.error("Error sending password reset email:", error);
    });
}
$("#password").keyup(function(event) {
  if (event.keyCode === 13) {
    signInWithEmailPassword();
  }
});