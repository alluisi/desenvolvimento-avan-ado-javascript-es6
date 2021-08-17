const prop2 = 'ES6';

const obj1 = {
    prop1: 'Digital Innovation One',
    prop2
};
console.log(obj1);
// { prop1: 'Digital Innovation One', prop2: 'ES6' }

function method1() {
    console.log('method called');
}

const obj2 = {
    method1
};
obj2.method1();
// method called

const obj3 = {
    sum: function (a, b) {
        return a + b;
    }
};
console.log(obj3.sum(1, 5));
// 6

const obj4 = {
    sum(a, b) {
        return a + b;
    }
};
console.log(obj4.sum(1, 5));
// 6

const propName = 'Alessandra';
const obj5 = {
    [propName + 'Lamas']: 'Luisi'
};
console.log(obj5);
// { AlessandraLamas: 'Luisi' }