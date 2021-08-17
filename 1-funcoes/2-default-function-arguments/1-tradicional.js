function multiply1(a, b) {
    return a * b;
}

console.log(multiply1(5, 5));
// 25

console.log(multiply1(5));
// NaN

function multiply2(a, b) {
    b = typeof b === 'undefined' ? 1 : b;
    return a * b;
}
console.log(multiply2(5));
// 5