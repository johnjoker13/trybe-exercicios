"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./Classes/index");
const sumTwoValues = (pt) => {
    console.log(pt.x + pt.y);
};
function matterStates(matter) {
    console.log(matter);
}
;
sumTwoValues({ x: 100, y: 200 });
matterStates('liquid');
const cao = new index_1.Cachorro('Peteka', 'Mamífero', 'Yorkshire');
const joao = new index_1.Aluno(10, 'Parabéns', 'João');
const alana = new index_1.Aluno('Dez', 'Parabéns', 'Alana');
console.log(cao);
console.log(joao);
console.log(alana.nome);
cao.latir();
joao.notaDoAluno();
joao.anotacaoDoProfessor();
alana.notaDoAluno();
alana.anotacaoDoProfessor();
