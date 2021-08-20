class Math {
    sum(a, b, callback) {
        setTimeout(() => {
            callback(a + b);
        }, 1500); // limite de 2000 para o Mocha
    }
    multiply(a, b) {
        return a * b;
    }
    printSum(req, res, a, b) {
        res.load('index', a + b);
    }
}

module.exports = Math;