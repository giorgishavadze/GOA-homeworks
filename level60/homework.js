function checkNumber(number) {
    if (number % 2 === 0 && number > 10) {
        console.log("number is odd and its greater then 10")
    } else {
        console.log("please enter valid number")
    }
}
//მაგ
checkNumber(12)
checkNumber(7)
checkNumber(10)



function checkNumber(number) {
    if (number % 2 !== 0 && number < 5) {
        console.log("number is even and its lesser then 5")
    } else {
        console.log("please enter valid number")
    }
}
//მაგ
checkNumber(3)
checkNumber(7)
checkNumber(5)


function checkNumber(number) {
    if (number > 20 || number < 5) {
        console.log("number is greater then 20 or lesser then 5")
    } else {
        console.log("please enter valid number")
    }
}
//მაგ
checkNumber(25)
checkNumber(3)
checkNumber(20)
checkNumber(5)



function checkNumber(number) {
    if (!(number > 10 || number < 5)) {
        console.log("The number isn't greater than 10 nor less than 5")
    } else {
        console.log("number is greater than 10 or less than 5")
    }
}

checkNumber(7)
checkNumber(12)
checkNumber(3)



const age = prompt("please enter your age:")

if (age >= 18) {
    console.log("you are an adult.")
} else {
    console.log("you are a minor.")
}



const age1 = prompt("please enter your age:");
const hasParentalConsent = prompt("do you have parental consent? (yes/no)").toLowerCase()

if (age >= 18) {
    console.log("you can use this service.")
}else if (age1 < 18 && hasParentalConsent === "yes") {
    console.log("you can use this service.")
} else {
    console.log("you cannot use this service.")
}



const side1 = parseFloat(prompt("enter the length of the first side:"))
const side2 = parseFloat(prompt("enter the length of the second side:"))
const side3 = parseFloat(prompt("enter the length of the third side:"))

if (side1 > 0 && side2 > 0 && side3 > 0 &&
    side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    console.log("ეს სამი გვერდი შეიძლება წარმოადგენდეს სამკუთხედს.")
} else {
    console.log("ეს სამი გვერდი არ წარმოადგენს სამკუთხედს.")
}