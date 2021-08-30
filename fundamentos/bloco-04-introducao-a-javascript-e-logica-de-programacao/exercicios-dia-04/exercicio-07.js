//Exercicio-01
function anguloTriangulo(A, B, C) {
  let soma = A + B + C;
  if (A <= 0 || B <= 0 || C <= 0) {
    console.log("angulo negativo, INVALIDO");
  } else if (soma !== 180) {
    console.log("false");
  } else {
    console.log("true");
  }
}
anguloTriangulo(20, 100, 60);

//Exercicio-02
//calculo INSS
function calculoSalario(salario) {
  if (salario <= 1556.94) {
    descontoINSS = salario - salario * 0.08;
  } else if (salario >= 1556.95 && salario <= 2594.92) {
    descontoINSS = salario - salario * 0.09;
  } else if (salario >= 2594.93 && salario <= 5189.82) {
    descontoINSS = salario - salario * 0.11;
  } else if (salario > 5189.82) {
    descontoINSS = salario - 570.88;
  }

  //calculo IR
  if (descontoINSS <= 1903.98) {
    console.log(
      "A receber: " + descontoINSS + " " + "Isento de imposto de renda"
    );
  } else if (descontoINSS >= 1903.99 && descontoINSS <= 2826.65) {
    aliquotaINSS = descontoINSS * 0.075 - 142.8;
    console.log(descontoINSS - aliquotaINSS);
  } else if (descontoINSS >= 2826.66 && descontoINSS <= 3751.05) {
    aliquotaINSS = descontoINSS * 0.15 - 354.8;
    console.log(descontoINSS - aliquotaINSS);
  } else if (descontoINSS >= 3751.06 && descontoINSS <= 4664.68) {
    aliquotaINSS = descontoINSS * 0.22 - 636.13;
    console.log(descontoINSS - aliquotaINSS);
  } else if (descontoINSS >= 4664.68) {
    aliquotaINSS = descontoINSS * 0.275 - 869.36;
    console.log(descontoINSS - aliquotaINSS);
  }
}
calculoSalario(3000);

//Exercicio-03
function escalaNotas(nota) {
  if (nota < 0 || nota > 100) {
    console.log("ERRO");
  } else if (nota >= 90) {
    console.log("A");
  } else if (nota >= 80) {
    console.log("B");
  } else if (nota >= 70) {
    console.log("C");
  } else if (nota >= 60) {
    console.log("D");
  } else if (nota >= 50) {
    console.log("E");
  } else if (nota < 50) {
    console.log("F");
  }
}
escalaNotas(70);

//Exercicio-04
function lucroEstoque(custoProduto, valorVenda) {
  if (custoProduto <= 0 || valorVenda <= 0) {
    console.log("Erro, valor menor que 0");
  } else {
    let impostoProduto = custoProduto + custoProduto * 0.2;
    let lucroVenda = valorVenda * 1000 - impostoProduto * 1000;

    console.log(lucroVenda);
  }
}
lucroEstoque(10, 30);

//Exercicio-05
function greaterOrNot(a, b) {
  if (a == b) {
    console.log("os valores são iguais");
  }
  if (a > b) {
    console.log("a");
  } else if (b > a) {
    console.log("b");
  }
}
greaterOrNot(10, 20);

//Exercicio-06
function whosGreater(a, b, c) {
  if (a == b || a == c || b == c) {
    console.log("valores iguais");
  }
  if (a > b && a > c) {
    console.log("a");
  }
  if (b > a && b > c) {
    console.log("b");
  }
  if (c > a && c > b) {
    console.log("c");
  }
}
whosGreater(10, 10, 20);

//Exercicio-07
function ehImpar(A, B, C) {
  if (A % 2 == 0 && B % 2 == 0 && C % 2 == 0) {
    console.log("false");
  } else {
    console.log("true");
  }
}
ehImpar(2, 4, 5);

//Exercicio-08
function operacoesAritmeticas(a, b) {
  let soma = a + b;
  let subtracao = b - a;
  let multiplicacao = a * b;
  let divisao = b / a;
  let modulo = b % a;

  console.log(
    soma + " " + subtracao + " " + multiplicacao + " " + divisao + " " + modulo
  );
}
operacoesAritmeticas(10, 20);

//Exercicio-09
function negativeOrNot(valor) {
  if (valor == 0) {
    console.log("zero");
  } else if (valor < 0) {
    console.log("negative");
  } else if (valor >= 1) {
    console.log("positive");
  }
}
negativeOrNot(-1);
