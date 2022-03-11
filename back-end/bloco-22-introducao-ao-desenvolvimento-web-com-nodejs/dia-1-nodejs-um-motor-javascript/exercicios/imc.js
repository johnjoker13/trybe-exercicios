const imcResult = (vlr) => {
  let result = "";
  if (vlr < 18.5) {
    result = "Abaixo do peso (magreza)";
  } else if (vlr > 18.5 && vlr <= 25) {
    result = "Peso normal";
  } else if (vlr > 25 && vlr <= 29.9) {
    result = "Sobrepeso";
  } else if (vlr > 30 && vlr <= 34.9) {
    result = "Obesidade Moderada";
  } else if (vlr > 35 && vlr <= 39.9) {
    result = "Obesidade Severa";
  } else if (vlr > 40) {
    result = "Obesidade Morbida";
  } else {
    return result;
  }
  return result;
};

const calcIMC = (peso, altura) => {
  const IMC = Math.trunc(peso / (altura * altura).toFixed(2));
  const results = `IMC: ${IMC} Situação: ${imcResult(IMC)}`;
  console.log(results);
};

module.exports = calcIMC;
