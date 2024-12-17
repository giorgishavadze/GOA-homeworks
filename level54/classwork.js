function nums(a, b) {
    if (a > b) {
        return true;
    } else {
        return false;
    }
}
console.log(nums(10, 5))

function num(start, end, number) {
    return number >= start && number <= end;
}
console.log(num(0, 10, 5))

function word(word1, word2) {
    if (word1.length >= 2 && word2.length >= 2) {
        return word1[0] === word2[0] && word1[1] === word2[1];
    } else {
        return false;
    }
}
console.log(word("horse", "home"))
console.log(word("horse", "porshe"))

function words(input) {
    if (typeof input === "string") {
        return input.length;
    } else if (typeof input === "number") {
        return input > 100;
    } else if (typeof input === "boolean") {
        return !input;
    } else {
        return "unsupported type";
    }
}

console.log(words("hello"))
console.log(words(150))
console.log(words(50))
console.log(words(true))
console.log(words(false))
console.log(checkInput([1, 2, 3]))