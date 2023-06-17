UserPresent = localStorage.getItem("UserPresent")
if(UserPresent == "true"){
firebase.database().ref("/USERS/").child(localStorage.getItem("Username")).once('value')
  .then((snapshot) => {
    const userData = snapshot.val();
    document.getElementById("account").innerHTML = "<i class='bi bi-person-circle'></i> " + userData['name'] + userData['badges'];
    localStorage.setItem("UserPresent",true)
    localStorage.setItem("Username",userData['username'])
    localStorage.setItem("Name",userData['name'])
    localStorage.setItem("Password",userData['password'])
  })
  .catch((error) => {
    window.alert("An error occured while fetching account details");
    console.error("Error: ", error);
  });
} else if(UserPresent == null) {
  document.getElementById("account").innerHTML = "<i class='bi bi-person-circle'></i> "+"Sign In";
}