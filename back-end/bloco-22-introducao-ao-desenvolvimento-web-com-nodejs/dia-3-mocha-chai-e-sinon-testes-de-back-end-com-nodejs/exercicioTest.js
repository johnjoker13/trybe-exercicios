const { expect } = require("chai");
const fs = require("fs");
const sinon = require("sinon");
const verifyNumber = require("./exercicio");
const writeOnDocument = require("./exercicio4");

describe("Teste funcoes", () => {
  describe("verifyNumber", () => {
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

  describe.only("exercicio4", () => {
    before(() => {
      sinon.stub(fs, "writeFileSync");
    });

    after(() => {
      fs.writeFileSync.restore();
    });

    describe("a resposta", () => {
      it("é uma string", () => {
        const resposta = writeOnDocument("./arquivo.txt", "olá mundo");
        expect(resposta).to.be.a("string");
      });

      it("é igual a 'ok'", () => {
        const resposta = writeOnDocument("./arquivo.txt", "olá mundo");
        expect(resposta).to.be.equal("ok");
      });
    });
  });
});
