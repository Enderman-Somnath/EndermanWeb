localStorage.setItem("WhereIsUser","/EndermanWeb/");
  function getData() {
    firebase.database().ref("/UpdatesENDERMANWEBSHOW/").on('value', function(snapshot) {
        try {
            document.getElementById("Updates").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();

                if (childKey !== "Updates") {
                    firebase_message_id = childKey;
                    message_data = childData;

                    // Start code
                    Name = message_data['Name'];
                    message = message_data['message'];
                    name_with_tag = "<div class='message'><h4 class='Name' style='margin-left: 5px; margin-right: 5px; text-align:left;'> By: " + Name + "</h4>";
                    message_with_tag = "<h4 class='message_h4' style='text-align:left; margin-left: 5px; margin-right: 5px;'>" + message + "</h4></div>";
                    gap = "<h4 class='gap'></h4> <br>";
                    row = name_with_tag + message_with_tag + "<br>";
                    document.getElementById("Updates").innerHTML += row;
                    // End code

                    const element = document.getElementById("Updates");
                    element.scrollTop = element.scrollHeight;
                }
            });
        } catch (error) {
        
        }
    }, function(error) {
        console.error("Firebase data retrieval failed:", error);
        localStorage.setItem("ErrorINFO","Firebase data retrieval failed")
        document.getElementById("Updates").innerHTML = "<iframe style='height: 100%; width:100%;' src='/EndermanWeb/AllErrorManager'></iframe>"
    });
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    document.getElementById("account").innerHTML = "<i class='bi bi-person-circle'></i> " + "Account";
    getData();
  } else {
    // No user is signed in
    URLLOGIN = "UserAccount/"
    document.getElementById("account").innerHTML = "<i class='bi bi-person-circle'></i> " + "Login";
    document.getElementById("Updates").innerHTML="<div style='color:white; text-align: center; background-color: rgba(0, 0, 0, 0.514); border-radius: 20px; padding: 10px; width: fit-content; height: fit-content;'>" +
    "<h1 style='font-size: medium;'>" + "Login!" + "</h1>" +
    "<p>" + "Login to your account to check updates" + "</p>" +
    "<button style='background-color: rgb(12, 99, 199); color: white; border: 0px; border-radius: 10px; padding: 10px;' id='LOGIN'>" + "Login now" + "</button>"
    document.getElementById("LOGIN").onclick = function(){window.location="UserAccount/SignIn/"}
  }});

var w = document.documentElement.clientWidth || window.innerWidth;
if (w <= 765) {
  document.getElementById("topnav").className = "hidden";
  document.getElementById("mobile_nav_button").className = "mobile_nav_button";
  document.getElementById("home").style = "margin-top: 10px;"
} else {
  document.getElementById("topnav").className = "topnav desktop";
  document.getElementById("home").style = "margin-top: 95px;"
}
window.addEventListener('resize', function() {
  const  w = document.documentElement.clientWidth || window.innerWidth;
  if (w <= 765) {
  document.getElementById("topnav").className = "topnav desktop";
  document.getElementById("mobile_nav_button").className = "mobile_nav_button";
  document.getElementById("home").style = "margin-top: 10px;"
  } else {
  document.getElementById("topnav").className = "topnav desktop desknavloaded";
  document.getElementById("mobile_nav_button").className = "hidden";
  document.getElementById("home").style = "margin-top: 95px;"
  }
});
var topnav = document.querySelector('#topnav');
topnav.classList.add('desknavloaded');

