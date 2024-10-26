function add(a, b) {
    return a + b;
}

function doubleAdd(a, b) {
    const firstSum = add(a, a);
    const secondSum = add(b, b);
    return firstSum + secondSum;
}

const result = doubleAdd(5, 10);
console.log(result);