const assert = require('assert');
const Math = require('../src/math');

describe('Math class', function () {
    it('Sum two numbers', function (done) { // não utilizar arrow function para poder chamar o this
        const math = new Math();
        // this.timeout(3000); // para subir o limite de tempo do Mocha

        math.sum(5, 5, (value) => {
            assert.equal(value, 10);
            done();
        });
    });

    it('Multiply tho numbers');
});

// npm run test