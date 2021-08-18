// Uma promise pode ter 3 status:
// Pending
// Fulfiled
// Rejected

const doSomethingPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        // did something
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise = new Promise((resolve, reject) => {
    throw new Error('Something went wrong');
    setTimeout(function () {
        // did other thing
        resolve('Second data');
    }, 1000);
});

console.log(doSomethingPromise);
// Promise { <pending> }
doSomethingPromise.then(data1 => console.log(data1));
// First data
doOtherThingPromise.then(data2 => console.log(data2)).catch(error => console.log(error));
// Error: Something went wrong
