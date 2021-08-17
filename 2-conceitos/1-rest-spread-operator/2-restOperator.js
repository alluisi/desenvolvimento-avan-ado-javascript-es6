function sum1(...rest) {
    console.log(rest);
    // [ 5, 5, 5, 2, 3 ]
    return rest.reduce((acc, value) => acc + value, 0);
}
console.log(sum1(5, 5, 5, 2, 3));
// 20

function sum2(a, b, ...rest) {
    console.log(rest);
    // [ 5, 2, 3 ]
    return a + b + rest.reduce((acc, value) => acc + value, 0);
}
console.log(sum2(5, 5, 5, 2, 3));
// 20