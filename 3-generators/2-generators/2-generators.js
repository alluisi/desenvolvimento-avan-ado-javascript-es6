function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}
const it = naturalNumbers();

console.log(it.next());
// { value: 0, done: false }
console.log(it.next());
// { value: 1, done: false }
console.log(it.next());
// { value: 2, done: false }
console.log(it.next());
// { value: 3, done: false }

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (let i = 0; i < this.values.length; i++) {
            yield this.values[i]
        };
    }
};
for (let value of obj) {
    console.log(value);
}
/*
1
2
3
4
*/