const doSomethingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function () {
            // did something
            resolve('First data');
        }, 1500);
    });

const doOtherThingPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(function () {
            // did other thing
            resolve('Second data');
        }, 1000);
    });

Promise.race([doSomethingPromise(), doOtherThingPromise()]).then((data) => {
    console.log(data);
});
// A promisse que resolver primeiro é que irá retornar o valor