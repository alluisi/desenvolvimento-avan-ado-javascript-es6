const doSomethingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function () {
            // did something
            resolve('First data');
        }, 1000);
    });

const doOtherThingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function () {
            // did other thing
            resolve('Second data');
        }, 1000);
    });

Promise.all([doSomethingPromise(), doOtherThingPromise()]).then((data) => {
    console.log(data);
});
// [ 'First data', 'Second data' ]

Promise.all([doSomethingPromise(), doOtherThingPromise()]).then((data) => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch(err => {
    console.log(err);
});
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