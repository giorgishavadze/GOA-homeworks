let N = parseInt(prompt("please enter number:"))

let list = [];

alert("enter " + N + " number:");
for (let i = 0; i < N; i++) {
    let num = parseInt(prompt(`number ${i+1}:`))
    list.push(num);
}

alert(list)

let a = parseInt(prompt("enter first num (a):"))
let b = parseInt(prompt("enter second num (b):"))

let result = ""
if (a > b) {
    for (let i = a; i >= b; i--) {
        result += i + " "
    }
} else {
    for (let i = b; i >= a; i--) {
        result += i + " "
    }
}

alert("reversed num: " + result)



let clickCount = 0;

function changeText() {
    clickCount++;

    if (clickCount === 1) {
        document.getElementById("p1").innerText = "გამარჯობა";
    } else if (clickCount === 2) {
        document.getElementById("p2").innerText = "გამარჯობა";
    } else if (clickCount === 3) {
        document.getElementById("p3").innerText = "გამარჯობა";
    } else if (clickCount === 4) {
        document.getElementById("p1").innerText = "ნახვამდის";
    } else if (clickCount === 5) {
        document.getElementById("p2").innerText = "ნახვამდის";
    } else if (clickCount === 6) {
        document.getElementById("p3").innerText = "ნახვამდის";
        clickCount = 0;
    }
}



function logButton(buttonNumber) {
    document.getElementById("output").innerText = "button " + buttonNumber;
}