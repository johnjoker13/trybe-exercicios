const getSuperHero = require('./exercise1.js');

test('Testa se o resultado é um falso positivo, com async/await', async () => {
  const hero = await getSuperHero();
  expect(hero).toBe('Wonder Woman');
});

test('Testa se o retorno da requisição com url alterada, retorna o erro, com async/await', async () => {
    const error = await getSuperHero();
    expect(error).toMatch('erro');
});