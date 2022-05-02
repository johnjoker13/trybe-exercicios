interface IAnimal {
  nome: string,
  classe: string,
  raça: string,
};

export default class Cachorro implements IAnimal {
  nome: string;
  classe: string;
  raça: string;

  constructor(nome: string, classe: string, raça: string) {
    this.nome = nome,
    this.classe = classe,
    this.raça = raça
  };

  latir(): void {
    console.log(`${this.nome} está latindo`);
  };

  minhaClasse(): void {
    console.log(`${this.classe} é a minha classe no reino animal`);
  };

  minhaRaça(): void {
    console.log(`${this.raça} é a minha raça`);
  };

};
