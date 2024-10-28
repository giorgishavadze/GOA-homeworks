const username = prompt("გთხოვთ შეიყვანოთ თქვენი სახელი:");
document.write("<h2>გამარჯობა, " + username + "!</h2>");

let currentNumber = 0;

function updateResult() {
    document.getElementById('result').innerText = currentNumber;
}

function add() {
    const inputNumber = parseInt(document.getElementById('numberInput').value);
    currentNumber += inputNumber;
    updateResult();
}

function subtract() {
    const inputNumber = parseInt(document.getElementById('numberInput').value);
    currentNumber -= inputNumber;
    updateResult();
}

function multiply() {
    const inputNumber = parseInt(document.getElementById('numberInput').value);
    currentNumber *= inputNumber;
    updateResult();
}
//parseInt გარდაქმნის მის პირველ არგუმენტს string-ად, აანალიზებს ამ string-ს და აბრუნებს integer-ს