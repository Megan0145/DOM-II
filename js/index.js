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

//Increase font sizes of all paragraphs
const pars = Array.from(document.querySelectorAll('p'));
let parSize = 1.6;

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

document.addEventListener('keydown', (e) => {
    if(e.code === 'ArrowUp') {
        parSize += 0.5;
        pars.forEach((par) => {par.style.fontSize = parSize + 'rem'});
    } else if (e.code === 'ArrowDown') {
        parSize -= 0.5;
        pars.forEach((par) => {par.style.fontSize = parSize + 'rem'});
    }
});

