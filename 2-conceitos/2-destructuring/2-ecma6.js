const [apple, banana, orange, [tomato]] = ['Apple', 'Banana', 'Orange', ['Tomato']];
console.log(tomato);

const obj = {
    name1: 'Alessandra',
    props: {
        age: 40,
        favoriteColors: ['black', 'blue']
    }
}
const { name1 } = obj;
console.log(name1);
const { name1: name2 } = obj;
console.log(name2);
const { props: { age, favoriteColors: [color1, color2] } } = obj;
console.log(age);
console.log(color1);
console.log(color2);

const arr2 = [{ name3: 'Apple', type: 'fruit' }];
const [{ name3 }] = arr2;
console.log(name3);

function sum([a, b]) {
    return a + b;
}
console.log(sum([5, 5]));