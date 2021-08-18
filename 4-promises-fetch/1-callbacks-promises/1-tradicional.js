function doSomething(callback) {
    setTimeout(function () {
        // did something
        callback('First data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function () {
        // did other thing
        callback('Second data');
    }, 1000);
}

function doAll1() {
    doSomething(function (data1) {
        const processedData1 = data1.split('');

        doOtherThing(function (data2) {
            const processedData2 = data2.split('');

            setTimeout(function () {
                console.log(processedData1, processedData2);
            }, 1000);
        });
    });
}
doAll1();
/*
[
  'F', 'i', 'r', 's',
  't', ' ', 'd', 'a',
  't', 'a'
] [
  'S', 'e', 'c', 'o',
  'n', 'd', ' ', 'd',
  'a', 't', 'a'
]
*/

function doAll2() {
    try {
        doSomething(function (data1) {
            const processedData1 = data1.split('');

            try {
                doOtherThing(function (data2) {
                    const processedData2 = data2.split('');

                    try {
                        setTimeout(function () {
                            console.log(processedData1, processedData2);
                        }, 1000);
                    } catch (err) {
                        // handle error
                    }
                });
            } catch (err) {
                // handle error
            }
        });
    } catch (err) {
        // handle error
    }
}