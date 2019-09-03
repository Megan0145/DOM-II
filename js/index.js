// Your code goes here

//Nav links change bg color on moueover, revert back to original on mouseout
const navLinks = Array.from(document.querySelectorAll('nav a'));
navLinks.forEach((link) => {
    link.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = '#17a2b8';
        e.target.style.color = 'white';
        e.target.style.padding = '2rem';
    });
    link.addEventListener('mouseout', (e) => {
        e.target.removeAttribute('style');
    })
});

//Change image source of intro image on keydown
const introImg = document.querySelector('#introImg');
const imgSources = ['img/intro-img-0.jpg', 'img/intro-img-1.jpg', 'img/intro-img-2.jpg','img/intro-img-3.jpg' ];
const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');

let i = 0;
rightArrow.addEventListener('click', () => {
    if(i < imgSources.length-1){
        i++;
        introImg.src = imgSources[i];
    } else {
        i=0;
        introImg.src = imgSources[i];
    }
});

leftArrow.addEventListener('click', () => {
    if(i > 0){
        i--;
        introImg.src = imgSources[i];
    } else {
        i = imgSources.length-1;
        introImg.src = imgSources[i];
    }
});