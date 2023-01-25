const hamburger = document.querySelector('.hamburger-menu');
const links = document.querySelector('.links-wrapper');

hamburger.addEventListener('click', () => {
    links.classList.toggle('active');
    hamburger.classList.toggle('active');
})

const upArrow = document.querySelector('.up-arrow');
const downArrow = document.querySelector('.down-arrow');
const slide = document.querySelector('.slider');
const carousel = document.querySelector('.carousel');

var direction = -1;

upArrow.addEventListener('click', () => {
    if (direction === -1) {
        slide.appendChild(slide.firstElementChild);
        direction = 1;
    }
    
    carousel.style.alignItems = 'flex-end';
    slide.style.transform = 'translateY(33.316%)';

})

downArrow.addEventListener('click', () => {
    if(direction === 1){
        direction = -1;
    
        slide.prepend(slide.lastElementChild);
    }
    
    carousel.style.alignItems = 'flex-start';
    slide.style.transform = 'translateY(-33.316%)';
})

slide.addEventListener('transitionend', () => {
    if (direction === -1) {
        slide.appendChild(slide.firstElementChild);
        
    }else if (direction === 1) {
        slide.prepend(slide.lastElementChild);
        
    }
    
    slide.style.transition = 'none';
    slide.style.transform = 'translateY(0%)';
    setTimeout(() => {
        slide.style.transition = 'all 0.5s ease-in-out 0s';
    })
    
})