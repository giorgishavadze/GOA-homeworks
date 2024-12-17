function calculate() {
    const number1 = parseFloat(document.getElementById('number1').value)
    const number2 = parseFloat(document.getElementById('number2').value)
    const operation = document.getElementById('operation');
    
    let result

    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById('result').textContent = "შეიყვანეთ რიცხვები!"
        return
    }

    if (operation === "მიმატება") {
        result = number1 + number2
        document.getElementById('result').textContent = `შედეგი: ${number1} + ${number2} = ${result}`
    } else if (operation === "გამოკლება") {
        result = number1 - number2
        document.getElementById('result').textContent = `შედეგი: ${number1} - ${number2} = ${result}`
    } else {
        document.getElementById('result').textContent = "შეცდომა: მიუღებელი ოპერაცია!"
    }
}
//es meore//