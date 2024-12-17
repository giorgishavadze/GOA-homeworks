const myArray = [10, 20, 30, 40, 50]
let count = 0
for (let i in myArray) {
    count++
}

console.log("ლისტის სიგრძე არის:", count)



// ლისტი, რომელიც შეიცავს ინტეჯერებს;
const integerArray = [1, 2, 3, 4, 5]

// ლისტი, რომელიც შეიცავს სტრინგებს;
const stringArray = ["apple", "banana", "cherry"]

// toString() მეთოდის გამოყენება ინტეჯერების ლისტზე;
const integerArrayAsString = integerArray.toString()
// toString() გარდაქმნის ლისტს სტრინგად, ელემენტები გამიჯნულია მძიმით;

// toString() მეთოდის გამოყენება სტრინგების ლისტზე;
const stringArrayAsString = stringArray.toString()
// იგივე ფუნქციონალი სტრინგების ლისტზე - ელემენტები გაერთიანებულია მძიმით;

console.log(integerArrayAsString)
console.log(stringArrayAsString)



const phoneNumberArray = ["000", "000", "000"];

// join() მეთოდის გამოყენება ტირეთი ელემენტების დასაკავშირებლად
const formattedPhoneNumber = phoneNumberArray.join("-");

console.log(formattedPhoneNumber)



// ლისტის განსაზღვრა
const myArray1 = [10, 20, 30, 40, 50]

// pop() მეთოდის გამოყენება
const removedElement = myArray.pop()
// pop() ამოიღებს ბოლო ელემენტს (50) და შეინახავს მას ცვლადში removedElement

console.log("ამოღებული ელემენტი არის:", removedElement) // ამოღებული ელემენტი: 50
console.log("განახლებული მასივი არის:", myArray1) // განახლებული მასივი: [10, 20, 30, 40]



// ლისტის განსაზღვრა
const myArray2 = [10, 20, 30];

// push() მეთოდის გამოყენება ახალი ელემენტების დასამატებლად
myArray.push(40); // ამატებს 40-ს ლისტის ბოლოს
myArray.push(50); // ამატებს 50-ს ლისტის ბოლოს

console.log("განახლებული ლისტი არის:", myArray); // განახლებული ლისტი: [10, 20, 30, 40, 50]
console.log("ლისტის სიგრძე არის:", myArray.length); // ლისტის სიგრძე: 5



// ლისტის განსაზღვრა
let myArray3 = [20, 30, 40];

// unshift() მეთოდის გამოყენება
myArray.unshift(10); 
// unshift() ამატებს ელემენტს (ან ელემენტებს) მასივის დასაწყისში
// განახლებული მასივი: [10, 20, 30, 40]

// shift() მეთოდის გამოყენება
const removedElement1 = myArray.shift(); 
// shift() ამოიღებს და დააბრუნებს მასივის პირველ ელემენტს
// განახლებული მასივი: [20, 30, 40]

console.log("ამოღებული ელემენტი არის:", removedElement); // 10
console.log("განახლებული მასივი არის:", myArray); // [20, 30, 40]