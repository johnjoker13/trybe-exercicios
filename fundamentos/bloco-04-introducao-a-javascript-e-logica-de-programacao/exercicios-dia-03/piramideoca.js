function piramideOca(tamanho) {
  let meio = (tamanho + 1) / 2;
  let esquerda = meio;
  let direita = meio;
  for (let i = 1; i <= meio; i++) {
    let aux = "";
    for (let j = 1; j <= tamanho; j++) {
      if (j == esquerda || j == direita || i == meio) {
        aux += "*";
      } else {
        aux += " ";
      }
    }
  esquerda -= 1;
  direita += 1;
  console.log(aux);
  }
}

piramideOca(5);
