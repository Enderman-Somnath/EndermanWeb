localStorage.setItem("WhereIsUser","/EndermanWeb/UserAccount/UserInfo/");
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
    window.alert("No user is signed in. Please sign in.");
    localStorage.removeItem("UserPresent");
    window.location = "/EndermanWeb/UserAccount/SignIn/";
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
      window.location = "/EndermanWeb/UserAccount/SignIn/";
    })
    .catch((error) => {
      console.error("Error signing out:", error);
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