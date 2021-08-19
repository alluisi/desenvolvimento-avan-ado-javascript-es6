const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345);
    }, 1000);
});

const simpleFunc1 = async () => {
    const data = await asyncTimer();
    return data;
};

simpleFunc1().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
// 12345

const simpleFunc2 = async () => {
    const data = await asyncTimer();
    console.log(data);
    const dataJSON = await fetch('../1-fetch/1-data.json').then(resStream => resStream.json());
    return dataJSON;
};

const simpleFunc3 = async () => {
    const data = await Promise.all([
        asyncTimer(),
        fetch('../1-fetch/1-data.json').then(resStream => resStream.json())
    ])
    return data;
};