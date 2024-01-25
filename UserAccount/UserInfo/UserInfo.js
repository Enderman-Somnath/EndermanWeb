localStorage.setItem("WhereIsUser","/UserAccount/UserInfo/");
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    const nameElement = document.getElementById("Name");
    const emailElement = document.getElementById("Email");
    const uidElement = document.getElementById("uid");
    // Set user info in the labels
    nameElement.textContent = "Name: " + user.displayName;
    emailElement.textContent = "Email: " + user.email;
    uidElement.textContent = "User UID: " + user.uid;
    firebase.database().ref("/USERS/").child(user.uid).once('value')
          .then((snapshot) => {
            const userData = snapshot.val();
            nameElement.innerHTML += ",  Badges: " +  userData['badges']  + " <button class='btn btn-primary' onclick='updateDisplayName()'> Change Name </button>";
          });
  } else {
    // No user is signed in
    body = document.querySelector("body");
      body.innerHTML = "<div style='color:white; text-align: center; background-color: rgba(0, 0, 0, 0.514); border-radius: 20px; padding: 10px; padding-top:auto; padding-bottom:auto; width: 100%; height: 100%;  word-break:break-all; overflow:auto;'>" +
      "<h1 style='font-size: medium;'>" + "Login!" + "</h1>" +
      "<p>" + "Login to your account to continue" + "</p>" +
      "<button style='background-color: rgb(12, 99, 199); color: white; border: 0px; border-radius: 10px; padding: 20px;' id='LOGIN'>" + "Login now" + "</button></div>"
      document.getElementById("LOGIN").onclick = function(){window.location="/UserAccount/SignIn/"}
      localStorage.removeItem("UserPresent");
  }
});
function validateInput(input) {
  const regex = /^[a-zA-Z0-9@+\-]+$/;
  return regex.test(input);
}
function updateDisplayName() {
  const displayName = prompt("Please enter your new name you want");
  if(displayName == null){
    window.alert("Name is not changed");
    return
  }
  if(validateInput(displayName)){
    const user = firebase.auth().currentUser;
  user.updateProfile({
    displayName: displayName
  })
    .then(() => {
      window.alert("Display name updated successfully.");
    })
    .catch((error) => {
      window.alert("Failed to update display name. Please try again later.");
      console.error("Error updating display name:", error);
    });
  } else {
    alert("Use valid symbols for name such as @,+,-");
  }
}

function resetPassword() {
  const user = firebase.auth().currentUser;
  const email = user.email;
  firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
      window.alert("Password reset email sent. Please check your email to reset your password.");
    })
    .catch((error) => {
      window.alert("Failed to send password reset email. Please make sure the email is valid and try again.");
      console.error("Error sending password reset email:", error);
    });
}
function signout() {
  const confirmed = window.confirm("Are you sure you want to sign out?");
  if (!confirmed) {
    return;
  }
  firebase.auth().signOut()
    .then(() => {
      localStorage.removeItem("UserPresent");
      localStorage.clear();
      window.alert("Signed out successfully!");
      window.location = "/UserAccount/SignIn/";
    })
    .catch((error) => {
      console.error("Error signing out:", error);
    });
}
