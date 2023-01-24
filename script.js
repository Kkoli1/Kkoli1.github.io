const hamburger = document.querySelector('.hamburger-menu');
const links = document.querySelector('.links-wrapper');

hamburger.addEventListener('click', () => {
    links.classList.toggle('active');
    hamburger.classList.toggle('active');
})


var w = screen.width;
console.log(w);

const slider = document.querySelector(".slider");
console.log(slider.clientHeight);