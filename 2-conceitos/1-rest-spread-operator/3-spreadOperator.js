const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum1 = (...rest) => {
    return multiply.apply(undefined, rest);
}
console.log(sum1(5, 5, 5, 2, 3));
// 750

const sum2 = (...rest) => {
    return multiply(...rest);
}
console.log(sum2(5, 5, 5, 2, 3));
// 750


// STRINGS
const str = 'Digital Innovation One';
function logArgs1(...args) {
    console.log(args);
    /*
        [
            'D', 'i', 'g', 'i', 't',
            'a', 'l', ' ', 'I', 'n',
            'n', 'o', 'v', 'a', 't',
            'i', 'o', 'n', ' ', 'O',
            'n', 'e'
        ]
    */
}
logArgs1(...str);

// ARRAYS
const arr1 = [1, 2, 3, 4];
function logArgs2(a, b, c) {
    console.log(a, b, c);
    // 1 2 3
}
logArgs2(...arr1);

// CONCATENAR ARRAYS
const arr2 = [...arr1, 5, 6, 7];
console.log(arr2);
// [ 1, 2, 3, 4, 5, 6, 7 ]

// OBJETOS LITERAIS
const obj1 = {
    test1: 123
};
const obj2 = {
    ...obj1,
    test2: 'hello'
}
console.log(obj2);
// { test1: 123, test2: 'hello' }