interface INota<T,U> {
  nota: T;
  anotacao: U;
};

export default class Aluno<T, U> implements INota<T,U> {
  nota: T;
  anotacao: U;
  nome;
  constructor(nota: T, anotacao: U, nome: string) {
    this.nota = nota;
    this.anotacao = anotacao;
    this.nome = nome;
  };
  notaDoAluno() {
    console.log(`Nota de ${this.nome}: ${this.nota}`);
  };

  anotacaoDoProfessor() {
    console.log(`Anotações do professor: ${this.anotacao}`);
  };
};
