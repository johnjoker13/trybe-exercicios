let conjuntoNomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana", "Whindersson"];

function maiorNome(meuArray) {
  let index = 0;
  let length = 0;
  let nome = "";
  for (let i = 0; i < meuArray.length; i++) {
    if (meuArray[i].length > length) {
      length = meuArray[i].length;
      index = i;
      nome = meuArray[i];
    }
  }
  console.log(nome);
}

maiorNome(conjuntoNomes);
