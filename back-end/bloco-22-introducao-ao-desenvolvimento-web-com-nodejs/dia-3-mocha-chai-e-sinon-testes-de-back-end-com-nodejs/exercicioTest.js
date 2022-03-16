const { expect } = require("chai");
const verifyNumber = require("./exercicio");

describe.only("verifyNumber", () => {
  it("O retorno é uma string", () => {
    const resposta = verifyNumber(1);
    expect(resposta).to.be.a("string");
  });

  it("Verifica se o número é neutro", () => {
    const resposta = verifyNumber(0);
    expect(resposta).to.have.string("neutro");
  });

  it("Verifica se o número é positivo", () => {
    const resposta = verifyNumber(1);
    expect(resposta).to.have.string("positivo");
  });

  it("Verifica se o número é negativo", () => {
    const resposta = verifyNumber(-1);
    expect(resposta).to.have.string("negativo");
  });

  it("Verifica se o parâmetro não é um número", () => {
    const resposta = verifyNumber("num");
    expect(resposta).to.have.string("o valor deve ser um número");
  });
});
