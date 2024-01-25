localStorage.setItem("WhereIsUser","/Fun/");


var w = document.documentElement.clientWidth || window.innerWidth;
if (w <= 765) {
  document.getElementById("topnav").className = "hidden";
  document.getElementById("mobile_nav_button").className = "mobile_nav_button";
  document.getElementById("fun").style = "margin-top: 10px;"
} else {
  document.getElementById("topnav").className = "topnav desktop";
  document.getElementById("fun").style = "margin-top: 95px;"
}
window.addEventListener('resize', function() {
  const  w = document.documentElement.clientWidth || window.innerWidth;
  if (w <= 765) {
  document.getElementById("topnav").className = "topnav desktop";
  document.getElementById("mobile_nav_button").className = "mobile_nav_button";
  document.getElementById("fun").style = "margin-top: 10px;"
  } else {
  document.getElementById("topnav").className = "topnav desktop desknavloaded";
  document.getElementById("mobile_nav_button").className = "hidden";
 document.getElementById("fun").style = "margin-top: 95px;"
  }
});
var topnav = document.querySelector('#topnav');
topnav.classList.add('desknavloaded');