let salario = 3000;

//calculo INSS
if (salario <= 1556.94) {
  descontoINSS = salario - (salario * 0.08);
} else if (salario >= 1556.95 && salario <= 2594.92) {
  descontoINSS = salario - (salario * 0.09);
} else if (salario >= 2594.93 && salario <= 5189.82) {
    descontoINSS = salario - (salario*0.11);
} else if (salario > 5189.82) {
    descontoINSS = salario-570.88;
}

//calculo IR
if(descontoINSS <= 1903.98) {
    console.log("A receber: " + descontoINSS + " " + "Isento de imposto de renda");
} else if(descontoINSS>=1903.99 && descontoINSS<=2826.65) {
    aliquotaINSS = (descontoINSS * 0.075)-142.80;
    console.log(descontoINSS-aliquotaINSS);
} else if(descontoINSS>=2826.66 && descontoINSS<=3751.05) {
    aliquotaINSS = (descontoINSS * 0.15)-354.80;
    console.log(descontoINSS-aliquotaINSS);
} else if(descontoINSS>=3751.06 && descontoINSS<=4664.68) {
    aliquotaINSS = (descontoINSS * 0.22)-636.13
    console.log(descontoINSS-aliquotaINSS);
} else if(descontoINSS>=4664.68) {
     aliquotaINSS = (descontoINSS*0.275)-869.36
     console.log(descontoINSS-aliquotaINSS);
}

