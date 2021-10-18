// Verifique se a importação do arquivo correto está sendo feita.
const getPokemonDetails = require('./exercicio9.js');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    // Escreva aqui seu código
    const expectedError = new Error('Não temos esse pokémon para você :(');
      function callback(error, result) {
        expect(error).toEqual(expectedError);
        done();
      }
      getPokemonDetails((pokemon) => pokemon.name === 'Metapod', callback);
  });


  it('retorna um pokemon que existe no banco de dados', (done) => {
    // Escreva aqui seu código
    const expectedString = `Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun`;
    function callback(err, result) {
      expect(result).toBe(expectedString);
      done();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Squirtle', callback)
  });
});