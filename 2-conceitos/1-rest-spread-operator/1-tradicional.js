function sum1(a, b) {
    console.log(arguments);
    // [Arguments] { '0': 5, '1': 5, '2': 5, '3': 2, '4': 3 }
    return a + b;
}
console.log(sum1(5, 5, 5, 2, 3));
// 10

function sum2(a, b) {
    let value = 0;
    for (let i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }
    return value;
}
console.log(sum2(5, 5, 5, 2, 3));
// 20