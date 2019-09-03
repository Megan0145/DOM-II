let blocks = Array.from(document.querySelector('.blocks').children);

blocks.forEach((block) => {
    block.addEventListener('click', (e) => {
        blocks[0] = e.target;
    });
});