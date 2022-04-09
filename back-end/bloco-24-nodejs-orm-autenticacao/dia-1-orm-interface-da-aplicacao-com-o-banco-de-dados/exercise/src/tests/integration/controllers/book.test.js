const chai = require('chai');
const { stub } = require('sinon');
const chaiHttp = require('chai-http');
const { expect } = chai;

chai.use(chaiHttp);

const app = require('../../../../index');
const { Book } = require('../../../models');

describe('Busca todos os livros', () => {
  describe('quando não existem livros cadastrados', () => {
    const findAllStub = stub(Book, 'findAll');

    before(() => {
      findAllStub.resolves([]);
    });

    after(() => {
      findAllStub.restore();
    });

    it('chamando Book.findAll', async () => {
      await chai.request(app).get('/books');
      expect(Book.findAll.calledOnce).to.be.equals(true);
    });
  });
});