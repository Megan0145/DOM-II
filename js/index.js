// Your code goes here
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