const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
let activeSlide = 0;

setBgImage();

function setBgImage() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
};
