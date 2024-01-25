localStorage.setItem("WhereIsUser","/UserAccount/SignUp/");
function validateInput(input) {
  const regex = /^[a-zA-Z0-9@+\-]+$/;
  return regex.test(input);
}
function validateEmail(email) {
  const allowedCharacters = /^[a-zA-Z0-9.@]+$/;
  console.log(allowedCharacters.test(email))
  return allowedCharacters.test(email);
}
function SignUp() {
  const inputEmail = document.getElementById('Email').value;
  const inputPassword = document.getElementById('password').value;
  const inputName = document.getElementById('Name').value;
  if (inputPassword.length < 6) {
    window.alert('Password should be at least 6 characters long.');
    return;
  }

  if (!validateInput(inputName)) {
    document.getElementById("ERRORDIV").classList=""
      document.getElementById("ERRORDIV").innerText="Please use valid symbols for Name: '@', '1-9', '-', '+', all letters";
      setTimeout(function(){
        document.getElementById("ERRORDIV").classList="hidden"
      },5000);
    document.getElementById("signUP").onclick = function() {SignUp()};
    document.getElementById("signUP").innerText = "Sign Up";
    document.getElementById("signUP").style.cursor = "pointer";
    return;
  }
  const auth = firebase.auth();
  document.getElementById("signUP").onclick = null;
  document.getElementById("signUP").innerText = "Creating User...";
  document.getElementById("signUP").style.cursor = "not-allowed";
  auth.createUserWithEmailAndPassword(inputEmail, inputPassword)
    .then(() => {
      // Listen for changes in the user's authentication state
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          // User is authenticated
          unsubscribe(); // Unsubscribe from further state changes

          // Update user display name
          user.updateProfile({
            displayName: inputName,
          })
            .then(() => {
              // Send email verification
              user.sendEmailVerification()
                .then(() => {
                  window.alert('Verification email sent. Please check your email to verify your account.');
                  window.location = 'Verify/';
                })
                .catch((error) => {
                  window.alert('Failed to send verification email. Please try again later.');
                  console.error('Error sending verification email:', error);
                  document.getElementById("signUP").onclick = function() {SignUp()};
                  document.getElementById("signUP").innerText = "Sign Up";
                  document.getElementById("signUP").style.cursor = "pointer";
                });
            })
            .catch((error) => {
              window.alert('Failed to update user profile. Please try again later.');
              console.error('Error updating user profile:', error);
              document.getElementById("signUP").onclick = function() {SignUp()};
              document.getElementById("signUP").innerText = "Sign Up";
              document.getElementById("signUP").style.cursor = "pointer";
            });
        }
      });
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        window.alert('The email already exists. Please choose another email.');
      } else {
        window.alert('An error occurred during user creation. Make sure you have entered a valid email/password.');
        console.error('Error creating user:', error);
      }
    });
}



function checkEmailExists(email) {
  return firebase.auth.fetchSignInMethodsForEmail(email)
    .then((signInMethods) => {
      return signInMethods.length > 0;
    })
    .catch((error) => {
      console.error("Error checking email existence:", error);
      throw error;
    });
}
$("#password").keyup(function(event) {
  if (event.keyCode === 13) {
    SignUp();
  }
});