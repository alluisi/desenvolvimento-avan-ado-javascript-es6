const uniqueId = Symbol('Hello');

Symbol.iterator
Symbol.split
Symbol.toStringTag

const obj = {
    [Symbol.iterator]() {

    }
}

const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator]();
/*
console.log(it.next());
// { value: 1, done: false }
console.log(it.next());
// { value: 2, done: false }
console.log(it.next());
// { value: 3, done: false }
console.log(it.next());
// { value: 4, done: false }
console.log(it.next());
// { value: undefined, done: true }
*/

while (true) {
    let { value, done } = it.next();
    if (done) {
        break;
    }
    console.log(value);
}
/*
1
2
3
4
*/

for (let value of arr) {
    console.log(value);
}
/*
1
2
3
4
*/