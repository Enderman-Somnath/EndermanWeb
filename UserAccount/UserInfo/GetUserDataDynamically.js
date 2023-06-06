UserPresent = localStorage.getItem("UserPresent")
if(UserPresent == "true"){
firebase.database().ref("/USERS/").child(localStorage.getItem("Username")).once('value')
  .then((snapshot) => {
    const userData = snapshot.val();
      document.getElementById("account").innerHTML = "<i class='bi bi-person-circle'></i> " + userData['name'] + userData['badges'];
  })
} else if(UserPresent == null) {
  document.getElementById("account").innerHTML = "<i class='bi bi-person-circle'></i> "+"Sign In";
}