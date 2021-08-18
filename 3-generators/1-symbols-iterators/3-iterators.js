const arr = [1, 2, 3, 4];

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                i++;
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

/*
const it = obj[Symbol.iterator]();
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

for (let value of obj) {
    console.log(value);
}
/*
1
2
3
4
*/

const arr2 = [...obj];
console.log(arr2);
// [ 1, 2, 3, 4 ]