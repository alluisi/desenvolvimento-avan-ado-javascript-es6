class Math {
    sum(a, b, callback) {
        setTimeout(() => {
            callback(a + b);
        }, 1500); // limite de 2000 para o Mocha
    }
}

module.exports = Math;