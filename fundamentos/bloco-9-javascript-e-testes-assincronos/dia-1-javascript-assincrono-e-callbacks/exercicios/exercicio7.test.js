const uppercase = require("./exercicio7.js");

const testStr = 'hello'

test('Testano uppercase, Transforma string em Uppercase', (done) => {
    uppercase(testStr, (result) => {
    try {
        expect(result).toBe('HELLO');
        done();
      } catch (error) {
        done(error);
      }
    });
});