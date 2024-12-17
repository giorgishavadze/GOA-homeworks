const number1 = parseFloat(prompt("შეიყვანეთ პირველი რიცხვი:"))
const number2 = parseFloat(prompt("შეიყვანეთ მეორე რიცხვი:"))
const operation = prompt("აირჩიეთ ოპერაცია (მიმატება ან გამოკლება):")

if (!isNaN(number1) && !isNaN(number2)) {
    if (operation === "მიმატება") {
        const result = number1 + number2
        alert(`შედეგი: ${number1} + ${number2} = ${result}`)
    } else if (operation === "გამოკლება") {
        const result = number1 - number2
        alert(`შედეგი: ${number1} - ${number2} = ${result}`)
    } else {
        alert("შეცდომა: მიუღებელი ოპერაცია!")
    }
} else {
    alert("შეცდომა: შეიყვანეთ მხოლოდ რიცხვები!")
}
//es pirveli davalebaa//