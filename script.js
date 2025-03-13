const _0x3d2c = ['\x70\x65\x72\x6b\x65\x70\x74\x77\x61\x6c'];
(function() {
    console.log('Part 2/5: ' + _0x3d2c[0]);
})();

document.addEventListener('DOMContentLoaded', function() {
    const hiddenDiv = document.createElement('div');
    hiddenDiv.style.display = 'none';
    hiddenDiv.textContent = 'Part 3/5: l4w4y_mu';
    document.body.appendChild(hiddenDiv);
});

localStorage.setItem('secretPart', 'Part 4/5: _092222l0');

const style = document.createElement('style');
style.textContent = `
    .hidden-css::after {
        content: "Part 5/5: 7432912";
        display: none;
    }
`;
document.head.appendChild(style);

const img = new Image();
img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/0SqrwAAAABJRU5ErkJggg==';
img.onload = function() {
    console.log('Image loaded with hidden metadata');
};


document.querySelectorAll('.btns button').forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index === 0) {
            alert('Learn More clicked!');
        } else if (index === 1) {
            alert('Subscribe clicked!');
        }
    });
});

console.log('%c ', `
    font-size: 0;
    padding: 50px 150px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgAB/0SqrwAAAABJRU5ErkJggg==);
`);
