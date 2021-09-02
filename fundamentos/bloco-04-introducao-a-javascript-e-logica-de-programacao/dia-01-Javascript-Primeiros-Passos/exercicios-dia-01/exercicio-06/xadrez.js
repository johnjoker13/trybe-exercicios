let pecaXadrez = "PEAO";

switch (pecaXadrez.toLowerCase()) {
  case "peao":
    console.log("1º movimento: até duas casas para frente,À partir do 2º movimento: uma casa para frente")
    break;
  case "torre":
    console.log("movimento vertical, sem limite de número de casas")
    break;
  case "cavalo":
    console.log("movimento em L, em qualquer direção")
    break;
  case "bispo":
    console.log("movimento diagonal, em qualquer direção")
    break;
  case "rainha":
    console.log("movimento em qualquer direção, sem limite de número de casas")
    break;
  case "rei":
    console.log("movimento para todas as direções pela vertical, horizontal ou diagonal, mas apenas uma casa por lance")
    break;
  default:
      console.log("Peça inválida")
}
