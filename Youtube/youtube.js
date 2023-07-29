localStorage.setItem("WhereIsUser","/EndermanWeb/Youtube/");
setTimeout(function(){
    database.ref("/Youtube/").on('value', function(snapshot) { 
        const data = snapshot.val();
        snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
            document.getElementById("youtube").innerHTML = childData
            if(document.getElementById("youtube").innerHTML == "") {
                document.getElementById("youtube").innerHTML = "<h1 style='color:white; padding: 5px;'>There are no channels here :(</h1>";
            }
            document.getElementById("youtube").classList.remove("loadingAnimationSkeleton")
    });
    })
},3000);

var w = document.documentElement.clientWidth || window.innerWidth;
if (w <= 765) {
    document.getElementById("topnav").className = "hidden";
    document.getElementById("mobile_nav_button").className = "mobile_nav_button";
    document.getElementById("youtube").style = "margin-top: 10px;"
} else {
    document.getElementById("topnav").className = "topnav desktop";
    document.getElementById("youtube").style = "margin-top: 95px;"
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
window.addEventListener('resize', function() {
    const w = document.documentElement.clientWidth || window.innerWidth;
    if (w <= 765) {
    document.getElementById("topnav").className = "topnav desktop";
    document.getElementById("mobile_nav_button").className = "mobile_nav_button";
    document.getElementById("youtube").style = "margin-top: 10px;"
    } else {
    document.getElementById("topnav").className = "topnav desktop desknavloaded";
    document.getElementById("mobile_nav_button").className = "hidden";
    document.getElementById("youtube").style = "margin-top: 95px;"
    }
 });
 var topnav = document.querySelector('#topnav');
topnav.classList.add('desknavloaded');