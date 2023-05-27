function signout() {
    var result = window.confirm("Do you want to sign out?");
    
    if (result) {
        localStorage.removeItem("UserPresent");
        localStorage.removeItem("Password");
        localStorage.removeItem("Username");
        localStorage.removeItem("Name");
        window.alert("Signed out successfully");
        window.location = "/EndermanWeb/UserAccount/SignIn/SignIn.html";
    } else {
    }
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
  