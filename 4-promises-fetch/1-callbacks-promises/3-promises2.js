const doSomethingPromise1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        // did something
        resolve('First data');
    }, 1000);
});

const doOtherThingPromise1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        // did other thing
        resolve('Second data');
    }, 1000);
});

doSomethingPromise1.then(data1 => {
    console.log(data1);
    return doOtherThingPromise1;
}).then(data2 => console.log(data2)).catch();
// First data
// Second data

const doSomethingPromise2 = () =>
    new Promise((resolve, reject) => {
        setTimeout(function () {
            // did something
            resolve('First data');
        }, 1000);
    });


const doOtherThingPromise2 = () =>
    new Promise((resolve, reject) => {
        setTimeout(function () {
            // did other thing
            resolve('Second data');
        }, 1000);
    });


doSomethingPromise2().then(data1 => {
    console.log(data1);
    return doOtherThingPromise2();
}).then(data2 => console.log(data2)).catch(error => console.log('Ops', error));
// First data
// Second data

doSomethingPromise2().then(data1 => {
    console.log(data1.split(''));
    return doOtherThingPromise2();
}).then(data2 => console.log(data2.split(''))).catch(error => console.log('Ops', error));
/*
[
  'F', 'i', 'r', 's',
  't', ' ', 'd', 'a',
  't', 'a'
]
[
  'S', 'e', 'c', 'o',
  'n', 'd', ' ', 'd',
  'a', 't', 'a'
]
*/