const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();

        if (now - prev > delay) {
            prev = now;

            return func(...args);
        }
    }
};
document.querySelector("#center")
.addEventListener("mousemove",throttleFunction((dets) => {
        var div = document.createElement("div");
        div.classList.add("imagediv");
        div.style.left = dets.clientX+'px';
        div.style.top = dets.clientY+'px';

        var img = document.createElement("img");
        img.setAttribute("src","https://plus.unsplash.com/premium_photo-1664391859117-39b8ac442b94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8");
        div.appendChild(img);
        document.body.appendChild(div);

        gsap.to(img,{
            y : "0%",
            delay :.9,
            duration :.9,
            ease : Power1
        });
        gsap.to(img,{
            y : "100%",
            delay :.9,
            duration :.9,
            ease : Power4
        });

        setTimeout(function(){
            div.remove();
        },2000);

    }, 300));