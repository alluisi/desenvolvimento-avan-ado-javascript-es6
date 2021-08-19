const assert = require('assert');
const Math = require('../src/math');

let valueHook = 0;

describe('Math class', function () {
    // hooks: before, beforeEach, after, afterEach
    beforeEach(function () {
        valueHook = 0;
    });

    it('Sum two numbers', function (done) { // não utilizar arrow function para poder chamar o this
        const math = new Math();
        // this.timeout(3000); // para subir o limite de tempo do Mocha

        valueHook = 5;

        math.sum(valueHook, 5, (value) => {
            assert.equal(value, 10);
            done();
        });
    });

    /*
    it.only('Multiply tho numbers', function () { // only para executar apenas esse teste
        const math = new Math();

        assert.equal(math.multiply(5, 5), 25);
    });

    it.skip('Multiply tho numbers', function () { // skip para não executar esse teste
        const math = new Math();

        assert.equal(math.multiply(5, 5), 25);
    });
    */

    it('Multiply tho numbers', function () {
        const math = new Math();

        assert.equal(math.multiply(valueHook, 5), 0);
    });
});

// npm run test