var istatus = document.querySelector("h5");
var btn = document.querySelector("#add");

var cheak = 0;

btn.addEventListener("click",function(){
    if(cheak == 0)
        {
            istatus.innerHTML = "Friends"
            istatus.style.color = "green"
            btn.innerHTML="Remove Friend"
            cheak = 1;
        }
        else{
            istatus.innerHTML = "Stranger"
            istatus.style.color = "red"
            btn.innerHTML="Add Friend"
            cheak = 0;
        }
});


