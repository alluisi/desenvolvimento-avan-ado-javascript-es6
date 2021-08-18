const uniqueId1 = Symbol('Hello');
const uniqueId2 = Symbol('Hello');
console.log(uniqueId1 === uniqueId2);
// false

const obj = {
    [uniqueId1]: 'Hello'
}
console.log(obj);
// { [Symbol(Hello)]: 'Hello' }