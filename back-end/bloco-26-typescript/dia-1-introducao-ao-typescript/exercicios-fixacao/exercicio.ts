enum diasDaSemana {
  domingo = 1,
  segunda,
  terça,
  quarta, 
  quinta, 
  sexta, 
  sábado,
};

enum colorsOfTheRainbow {
  vermelho = 'vermelho',
  laranja = 'laranja',
  amarelo = 'amarelo',
  verde = 'verde',
  azul = 'azul',
  anil = 'anil',
  violeta = 'violeta',
};

enum acoes {
  salvar = 1, 
  imprimir, 
  abrir, 
  visualizar,
  fechar,
};

enum rosaDosVentos {
  Norte = 'N',
  Leste = 'L',
  Sul = 'S',
  Oeste = 'O',
};

let dia = diasDaSemana[1];
const acao = acoes[1];

console.log(dia);
console.log(colorsOfTheRainbow.vermelho);
console.log(acao);
console.log(rosaDosVentos['Norte']);
