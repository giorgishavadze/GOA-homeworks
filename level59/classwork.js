//ა)(A&&!B)||(B&&!A) = true//
//ბ)(B&&C)&&(A||B) = false//
//გ)(A&&!C)||(B&&!A)||(B&&!C) = true//




const N = parseInt(prompt("enter the number of elements in the array: "), 10)

if (isNaN(N) || N <= 0) {
    console.log("please enter a valid number.")
} else {
    const array = []
    
    for (let i = 0; i < N; i++) {
        const num = parseFloat(prompt(`enter number ${i + 1}: `))
        if (!isNaN(num)) {
            array.push(num)
        } else {
            console.log("please enter a valid number.")
            i--
        }
    }

    console.log("final array:", array)
}





const a = parseInt(prompt("Enter the first number (a): "));
const b = parseInt(prompt("Enter the second number (b): "));

if (!isNaN(a) && !isNaN(b)) {
    const first = Math.min(a, b)
    const second = Math.max(a, b)
    const result = []
    for (let i = second; i >= first; i--) {
        result.push(i)
    }
    console.log(result)
} else {
    console.log("please enter a valid number.")
}