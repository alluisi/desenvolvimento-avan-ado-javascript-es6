const simpleFunc1 = async () => {
    return 12345;
};

console.log(simpleFunc1());
// Promise { 12345 }

simpleFunc1().then(data => {
    console.log(data);
});
// 12345

const simpleFunc2 = async () => {
    throw new Error('Oh no!');
    return 12345;
};

simpleFunc2().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
// Error: Oh no!