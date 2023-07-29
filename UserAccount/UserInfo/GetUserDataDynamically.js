firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      document.getElementById("account").innerHTML = "<i class='bi bi-person-circle'></i> " + "Account";
    } else {
      // No user is signed in
      window.alert("No user is signed in. Please sign in.");
      localStorage.removeItem("UserPresent");
      window.location = "/EndermanWeb/UserAccount/SignIn/";
    }
  });