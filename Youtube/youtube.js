localStorage.setItem("WhereIsUser","/EndermanWeb/Youtube/youtube.html");
var w = document.documentElement.clientWidth || window.innerWidth;
if (w <= 480) {
    document.getElementById("topnav").className = "hidden";
    document.getElementById("mobile_nav_button").className = "mobile_nav_button";
    document.getElementById("youtube").style = "margin-top: 10px;"
} else {
    document.getElementById("topnav").className = "topnav desktop";
    document.getElementById("youtube").style = "margin-top: 75px;"
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