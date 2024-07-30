var rect = document.querySelector("#center");

rect.addEventListener("mousemove",function(dets){
    var rectangleLocation = rect.getBoundingClientRect();//this function can give us selected elements location in propertis like left,right,bottom,...
    var insiderectval = dets.clientX - rectangleLocation.left;//we use it properti left

    if(insiderectval < rectangleLocation.width/2){
        var redColor = gsap.utils.mapRange(0,rectangleLocation.width/2,255,0,insiderectval);
        gsap.to(rect,{
            backgroundColor:`rgb(${redColor},0,0)`,
            ease: Power4,
        });
    }else{
            var blueColor = gsap.utils.mapRange(rectangleLocation.width/2,rectangleLocation.width,0,255,insiderectval);
            gsap.to(rect,{
                backgroundColor:`rgb(0,0,${blueColor})`,
                ease: Power4,
            });
    }
});
rect.addEventListener("mouseleave",function(dets){
    gsap.to(rect,{
        backgroundColor:"white"
    });
});

