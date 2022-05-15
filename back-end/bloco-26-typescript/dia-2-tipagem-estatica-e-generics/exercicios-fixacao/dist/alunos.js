"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
class Aluno {
    constructor(nota, anotacao, nome) {
        this.nota = nota;
        this.anotacao = anotacao;
        this.nome = nome;
    }
    ;
    notaDoAluno() {
        console.log(`Nota de ${this.nome}: ${this.nota}`);
    }
    ;
    anotacaoDoProfessor() {
        console.log(`Anotações do professor: ${this.anotacao}`);
    }
    ;
}
exports.default = Aluno;
;
