function somatorio(n) {
  let aux = 0;
  let soma = 0;
  for (let i = 1; i <= n; i++) {
    soma = i + aux;
    aux = soma;
  }
  return console.log(soma);
}

somatorio(5);
