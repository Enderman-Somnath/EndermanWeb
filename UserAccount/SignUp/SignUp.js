localStorage.setItem("WhereIsUser","/EndermanWeb/UserAccount/SignUp/");
function validateInput(input) {
  const regex = /^[a-zA-Z0-9@+\-]+$/;
  return regex.test(input);
}

function SignUp() {
  const inputEmail = document.getElementById('Email').value;
  const inputPassword = document.getElementById('password').value;
  const inputName = document.getElementById("Name").value;
  if (inputPassword.length < 6) {
    window.alert("Password should be at least 6 characters long.");
    return;
  }

  if (!validateInput(inputName)) {
    window.alert("Please use valid symbols for Name: '@', '1-9','-',, '+', all letters");
    return;
  }
  const auth = firebase.auth();
  checkEmailExists(inputEmail)
    .then((exists) => {
      if (exists) {
        window.alert("The email already exists. Please choose another email.");
      } else {
        auth.createUserWithEmailAndPassword(inputEmail, inputPassword)
          .then((userCredential) => {
            const user = userCredential.user;
            const displayName = document.getElementById("Name").value;
            firebase.auth().onAuthStateChanged((user) => {
              const displayName = document.getElementById("Name").value;
              if(user){
                user.updateProfile({
                  displayName: displayName
                }).then(() => {
                  // Send email verification
                  user.sendEmailVerification()
                    .then(() => {
                      window.alert("Verification email sent. Please check your email to verify your account.");
                      window.location = "Verify/";
                    })
              }); 
              }else if(!user){
                window.alert("ERROR OCCURED")
              }
            })
            .catch((error) => {
              window.alert("Failed to update user profile. Please try again later.");
              console.error("Error updating user profile:", error);
            });
          })
          .catch((error) => {
            window.alert("An error occurred during user creation. Make sure you have entered a valid email/password.");
            console.error("Error creating user:", error);
          });
      }
    })
    .catch((error) => {
      window.alert("An error occurred during the creation/checking of the email. Make sure you have entered a valid email.");
      console.error("Error: ", error);
    });
}
function checkEmailExists(email) {
  return firebase.auth().fetchProvidersForEmail(email)
    .then((providers) => {
      return providers.length > 0;
    })
    .catch((error) => {
      console.error("Error checking email existence:", error);
      throw error;
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