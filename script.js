const hamburger = document.querySelector('.hamburger-menu');
const links = document.querySelector('.links-wrapper');

hamburger.addEventListener('click', () => {
    links.classList.toggle('active');
    hamburger.classList.toggle('active');
})

const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');
const slide = document.querySelector('.slider');
const carousel = document.querySelector('.carousel');

var direction = -1;
var directionFlag = window.innerWidth >= 800 ? 1 : -1; 

// Check for window size and change slider direction
window.addEventListener("resize", () => {
    directionFlag = window.innerWidth >= 800 ? 1 : -1;
})


prevArrow.addEventListener('click', () => {
    if (direction === -1) {
        slide.appendChild(slide.firstElementChild);
        direction = 1;
    }
    
    carousel.style.alignItems = 'flex-end';
    carousel.style.justifyContent = 'flex-end';

    console.log(directionFlag);
    if(directionFlag === -1){
        slide.style.transform = 'translateY(33.316%)';
    }else {
        slide.style.transform = 'translateX(33.316%)'
    }
        

})

nextArrow.addEventListener('click', () => {
    if(direction === 1){
        direction = -1;
    
        slide.prepend(slide.lastElementChild);
    }
    
    carousel.style.alignItems = 'flex-start';
    carousel.style.justifyContent = 'flex-start';

    if(directionFlag === -1){
        slide.style.transform = 'translateY(-33.316%)';
    }else {
        slide.style.transform = 'translateX(-33.316%)'
    }
})

slide.addEventListener('transitionend', () => {
    if (direction === -1) {
        slide.appendChild(slide.firstElementChild);
        
    }else if (direction === 1) {
        slide.prepend(slide.lastElementChild);
        
    }
    
    slide.style.transition = 'none';
    if(directionFlag === -1){
        slide.style.transform = 'translateY(0%)';
    }else {
        slide.style.transform = 'translateX(0%)';
    }
    
    setTimeout(() => {
        slide.style.transition = 'all 0.5s ease-in-out 0s';
    })
    
})


