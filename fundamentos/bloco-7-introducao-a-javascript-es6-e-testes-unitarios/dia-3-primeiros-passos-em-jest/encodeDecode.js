function encode(str) {
  //separa a string por caractere e declara array
  let result = str.split("");
  let final = [];
  //itera sobre o array e converte as strings
  for (let i in result) {
    if (result[i] === "a") {
      result[i] = 1;
    }
    if (result[i] === "e") {
      result[i] = 2;
    }
    if (result[i] === "i") {
      result[i] = 3;
    }
    if (result[i] === "o") {
      result[i] = 4;
    }
    if (result[i] === "u") {
      result[i] = 5;
    }
    final = result.join("");
  }
  return final;
}

function decode(str) {
  //separa a string por caractere e declara array
  let result = str.split("");
  let final = [];
  //itera sobre o array e converte as strings
  for (let i in result) {
    if (result[i] === "1") {
      result[i] = "a";
    }
    if (result[i] === "2") {
      result[i] = "e";
    }
    if (result[i] === "3") {
      result[i] = "i";
    }
    if (result[i] === "4") {
      result[i] = "o";
    }
    if (result[i] === "5") {
      result[i] = "u";
    }
    final = result.join("");
  }
  return final;
}

const functions = { encode, decode };
module.exports = functions;
