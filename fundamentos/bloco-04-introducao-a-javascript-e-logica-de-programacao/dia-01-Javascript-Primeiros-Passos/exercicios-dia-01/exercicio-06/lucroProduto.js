const custoProduto = 10;
const valorVenda = 30;

if (custoProduto <= 0 || valorVenda <= 0) {
  console.log("Erro, valor menor que 0");
} else {
  let impostoProduto = custoProduto + custoProduto * 0.2;
  let lucroVenda = valorVenda * 1000 - impostoProduto * 1000;

  console.log(lucroVenda);
}
