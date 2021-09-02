const A = 60;
const B = 100;
const C = 20;
let soma = A + B + C;

if (A <= 0 || B <= 0 || C <= 0) {
  console.log("angulo negativo, INVALIDO");
} else if (soma !== 180) {
  console.log("false");
} else {
  console.log("true");
}
