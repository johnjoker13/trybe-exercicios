import { Cachorro, Aluno } from './Classes/index';
import main from './main';
import searchBook from './execute_insert';

type Bird = {
  asas: string,
  bico: string,
  penas: string,
};

type sum = {
  x: number, 
  y: number,
};

type address = {
  street: string,
  number: string,
  state: string,
  country: string,
};

const sumTwoValues = (pt:sum) => {
  console.log(pt.x + pt.y);
};

function matterStates(matter: number | string) {
  console.log(matter);
};

sumTwoValues({ x: 100, y: 200 });

matterStates('liquid');

const cao = new Cachorro('Peteka', 'Mamífero', 'Yorkshire');
const joao = new Aluno<number, string>(10, 'Parabéns' ,'João');
const alana = new Aluno<string, string>('Dez', 'Parabéns', 'Alana');

console.log(cao);
console.log(joao);
console.log(alana.nome);

cao.latir();
joao.notaDoAluno();
joao.anotacaoDoProfessor();
alana.notaDoAluno();
alana.anotacaoDoProfessor();

main().then((data) => console.log(data));
// searchBook().then((data) => console.log(data));


