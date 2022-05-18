export default class Student {
  matricula: number;
  nome: string;
  notas_prova: Array<number>;
  notas_trabalho: Array<number>;

  constructor(
    matricula: number,
    nome: string,
    notas_prova: Array<number>,
    notas_trabalho: Array<number>
  ) {
    this.matricula = matricula;
    this.nome = nome;
    this.notas_prova = notas_prova;
    this.notas_trabalho = notas_trabalho;
  }

  private sumAll(notas: Array<number>) {
    return notas.reduce((acc, curr) => acc + curr, 0);
  }

  sumTests() {
    const provas = this.sumAll(this.notas_prova);
    const trabalhos = this.sumAll(this.notas_trabalho);
    console.log(`Notas Provas: ${provas} \n Notas Trabalhos: ${trabalhos}`);
  }

  average() {
    const mediaProva = (this.sumAll(this.notas_prova)/this.notas_prova.length);
    const mediaTrabalhos = (this.sumAll(this.notas_trabalho)/this.notas_trabalho.length);
    console.log(`Média Provas: ${mediaProva} \n Média Trabalhos: ${mediaTrabalhos}`);
  }
}