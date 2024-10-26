let number = 0;
const numberDisplay = document.getElementById('numberDisplay');
const increaseButton = document.getElementById('increaseNumber');
function increaseNumber() {
    number += 1;
    numberDisplay.innerText = `რიცხვი: ${number}`;
}
increaseButton.addEventListener('click', increaseNumber);