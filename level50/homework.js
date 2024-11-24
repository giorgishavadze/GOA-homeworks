// script.js
document.getElementById('addText').addEventListener('click', () => {
    const textInput = document.getElementById('textInput').value;
    const textDisplay = document.getElementById('box');
    textDisplay.textContent = textInput;
});

document.getElementById('changeColor').addEventListener('click', () => {
    const colorInput = document.getElementById('colorInput').value;
    const textDisplay = document.getElementById('box');
    textDisplay.style.color = colorInput;
});

document.getElementById('changeSize').addEventListener('click', () => {
    const sizeInput = document.getElementById('sizeInput').value;
    const textDisplay = document.getElementById('box');
    textDisplay.style.fontSize = sizeInput;
});