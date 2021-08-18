const arr1 = ['Apple', 'Banana', 'Orange', ['Tomato']];
const apple = arr1[0];
const banana = arr1[1];
const orange = arr1[2];
const tomato = arr1[3][0];
console.log(tomato);

const obj = {
    name1: 'Alessandra',
    props: {
        age: 40
    }
}
const name2 = obj.name1;
console.log(name2);
const age1 = obj.props.age;
console.log(age1);

const arr2 = [{ name3: 'Apple', type: 'fruit' }];
const fruit1 = arr2[0].name3;
console.log(fruit1);

function sum(arr3) {
    const a = arr3[0];
    const b = arr3[1];
    return a + b;
}
console.log(sum([5, 5]));