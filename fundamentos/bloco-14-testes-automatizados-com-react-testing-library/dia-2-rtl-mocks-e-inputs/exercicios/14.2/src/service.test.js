import service from './service';

afterEach(() => jest.clearAllMocks());

describe('Testa as funções do arquivo service', () => {
  it('1 - Verifica se a função retona um número aleatório entre 0 e 100', () => {
   service.randomNumber = jest.fn().mockReturnValue(10);
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenLastCalledWith();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  it('2 - Redefine a função randomNumber para que retorne a divisão do primeiro pelo segundo parâmetro', 
  () => {
    service.randomNumber = jest.fn()
      .mockImplementationOnce((first, second) => first/second)
        .mockReturnValue(2);
    expect(service.randomNumber(10,5)).toBe(2);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledWith(10,5);
    expect(service.randomNumber).toHaveBeenLastCalledWith(10,5);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  it('3 - Redefine a função randomNumber para que retorne a multiplicação de 3 parâmetros', 
  () => {
    service.randomNumber = jest.fn()
      .mockImplementation((first, second, third) => first*second*third)
        .mockReturnValue(30);
    expect(service.randomNumber(2,5,3)).toBe(30);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledWith(2,5,3);
    service.randomNumber.mockReset();
    expect(service.randomNumber(1,2,3)).toBe(undefined);
    expect(service.randomNumber).toHaveBeenLastCalledWith(1,2,3);
      service.randomNumber.mockImplementation((param) => param*2)
        .mockReturnValue(10);
    expect(service.randomNumber(5)).toBe(10);
    expect(service.randomNumber).toHaveBeenLastCalledWith(5);
    expect(service.randomNumber).toHaveBeenCalledTimes(2);
  });

  it('4.1 - Testa se a função capitalizeString retorna a string minúscula' , () => {
    service.capitalizeString = jest.fn().mockImplementation((str) => str.toLowerCase())
      .mockReturnValue('lion');
      expect(service.capitalizeString('LION')).toBe('lion');
      expect(service.capitalizeString).toHaveBeenCalled();
      expect(service.capitalizeString).toHaveBeenCalledWith('LION');
      service.capitalizeString.mockReset();
      expect(service.capitalizeString('lion')).toBe(undefined);
      service.capitalizeString.mockImplementation((str) => str.toUpperCase())
        .mockReturnValue('LION');
      expect(service.capitalizeString('lion')).toBe('LION');
  });

  it('4.2 - Testa se a função getFirstChar retorna a última letra da string' , () => {
    service.getFirstChar = jest.fn().mockImplementation((str) => str.charAt(str.length-1))
      .mockReturnValue('p');
    expect(service.getFirstChar('shrimp')).toBe('p');
    expect(service.getFirstChar).toHaveBeenCalled();
    expect(service.getFirstChar).toHaveBeenCalledWith('shrimp');
  });

  it('4.3 - Testa se a função joinTwoStrings retorna três strings concatenadas', () => {
    service.joinTwoStrings = jest.fn().mockImplementation((strOne, strTwo, strThree) => strOne+=strTwo+=strThree)
      .mockReturnValue('yellowblackwhite');
    expect(service.joinTwoStrings('yellow', 'black', 'white')).toBe('yellowblackwhite');
    expect(service.joinTwoStrings).toHaveBeenCalled();
    expect(service.joinTwoStrings).toHaveBeenCalledWith('yellow', 'black', 'white');
  });

  describe('5 - Testa a requisição à API', () => {
    service.fetchDogs = jest.fn();
    afterEach(service.fetchDogs.mockReset);
    
    it('5.1 - Verifica se a requisição deu certo' , async () => {
      service.fetchDogs.mockResolvedValue('success');
      service.fetchDogs();
      expect(service.fetchDogs).toHaveBeenCalled();
      expect(service.fetchDogs).toHaveBeenCalledTimes(1);
      await expect(service.fetchDogs()).resolves.toBe('success');
      expect(service.fetchDogs).toHaveBeenCalledTimes(2);
    });

    it('5.2 - Verifica se a requisição deu errado', async () => {
        service.fetchDogs.mockRejectedValue('failed');
        expect(service.fetchDogs).toHaveBeenCalledTimes(0);
        await expect(service.fetchDogs()).rejects.toMatch('failed');
        expect(service.fetchDogs).toHaveBeenCalledTimes(1);
    });
  });
});