function hello1() {
    console.log('Hello');
    console.log('from');
    console.log('function!');
}
hello1();
/*
Hello
from
function!
*/

function* hello2() {
    console.log('Hello');
    yield;

    console.log('from');
    yield 2;

    console.log('function!');
}
const it1 = hello2();
console.log(it1.next());
// Hello
// { value: undefined, done: false }
console.log(it1.next());
// from
// { value: 2, done: false }
console.log(it1.next());
// function!
// { value: undefined, done: true }


function* hello3() {
    console.log('Hello');
    yield 1;

    console.log('from');
    const value = yield 2;

    console.log(value);
}
const it2 = hello3();
console.log(it2.next());
// Hello
// { value: 1, done: false }
console.log(it2.next());
// from
// { value: 2, done: false }
console.log(it2.next('outside!'));
// outside!
// { value: undefined, done: true }