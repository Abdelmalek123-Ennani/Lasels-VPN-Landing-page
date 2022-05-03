

// variables

const btnLeft = document.querySelector(".left-right .left");
const btnRight = document.querySelector(".left-right .right");
const tesTimonialContainer =  document.querySelector(".testimonial");
const cardWidth = document.querySelector(".testimonial .card").clientWidth;

// navbat
const navBtn = document.querySelector(".navbar .open-close i");
const navElements = document.querySelector(".navbar nav");


const points = document.querySelectorAll(".dotes .dote");
let pointIndex = 0;

btnLeft.addEventListener('click' , () => {
   

    if ( pointIndex != 0 ) pointIndex--; 

    points.forEach((e)  => {
        if ( e.classList.contains("active"))  e.classList.remove("active");
    }) 

    points[pointIndex].classList.add("active")

    tesTimonialContainer.scrollTo({
        behavior : "smooth",
        left : tesTimonialContainer.scrollLeft > 0 ? tesTimonialContainer.scrollLeft - parseInt(cardWidth) : 0
    })


})

btnRight.addEventListener('click' , () => {
    tesTimonialContainer.scrollTo({
        behavior : "smooth",
        left : tesTimonialContainer.scrollLeft + parseInt(cardWidth)
    });
    
    if ( pointIndex == 3 ) pointIndex = 3;
    else pointIndex++;

    points.forEach((e)  => {
        if ( e.classList.contains("active"))  e.classList.remove("active");
    }) 

    points[pointIndex].classList.add("active")

})



points.forEach((btn , idx) => {
    btn.addEventListener('click' , () => {

        
    tesTimonialContainer.scrollTo({
        behavior : "smooth",
        left :  (cardWidth * idx)
    });
    
        pointIndex = idx;
        points.forEach((e)  => {
            if ( e.classList.contains("active"))  e.classList.remove("active");
        }) 
        points[pointIndex].classList.add("active")
    });


})


// toggle navbar 

navBtn.addEventListener('click' , (e) => {

    if ( navElements.style.height == "0px" ) {
        navElements.style.height = "auto"
        navElements.querySelector("ul").style.display = "block"
        navBtn.classList.remove('fa-bars');
        navBtn.classList.add('fa-xmark');
    } else {
        navElements.style.height = "0px"
        navElements.querySelector("ul").style.display = "none"
        navBtn.classList.remove('fa-xmark');
        navBtn.classList.add('fa-bars');
    }

})  



window.addEventListener("resize" , (e) => {
    console.log(document.body.clientWidth)
})