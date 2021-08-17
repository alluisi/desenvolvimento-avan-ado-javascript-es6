function randomNumber() {
    return Math.random() * 10;
}

function multiply(a, b = randomNumber()) {
    return a * b;
}

console.log(multiply(5, 5));
// 25

console.log(multiply(5));
// ?