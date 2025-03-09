const button = document.querySelector('.change-color');
const colorText = document.querySelector('span.color');

button.addEventListener('click', function() {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    colorText.textContent = randomColor;
});