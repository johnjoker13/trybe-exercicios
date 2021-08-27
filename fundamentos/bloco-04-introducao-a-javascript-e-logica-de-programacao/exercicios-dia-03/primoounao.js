function verificaPrimo(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return console.log("Não é primo");
    }
    return console.log("é primo");
  }
}

verificaPrimo(4);
