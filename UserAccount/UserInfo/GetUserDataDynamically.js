firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      document.getElementById("account").innerHTML = "<i class='bi bi-person'></i> " + user.displayName;
      firebase.database().ref("/USERS/").child(user.uid).once('value')
            .then((snapshot) => {
              const userData = snapshot.val();
              document.getElementById("account").innerHTML += userData['badges'];
            });
    } else {
      // No user is signed in
      window.alert("No user is signed in. Please sign in.");
      localStorage.removeItem("UserPresent");
      window.location = "/EndermanWeb/UserAccount/SignIn/";
    }
  });