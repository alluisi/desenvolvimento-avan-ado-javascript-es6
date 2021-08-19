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

    it.only('Multiply tho numbers', function () { // only para executar apenas esse teste
        const math = new Math();

        assert.equal(math.multiply(5, 5), 25);
    });

    /*
    it.skip('Multiply tho numbers', function () { // skip para não executar esse teste
        const math = new Math();

        assert.equal(math.multiply(5, 5), 25);
    });
    */
});

// npm run test