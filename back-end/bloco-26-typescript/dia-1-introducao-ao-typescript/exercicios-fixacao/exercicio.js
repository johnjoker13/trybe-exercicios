var diasDaSemana;
(function (diasDaSemana) {
    diasDaSemana[diasDaSemana["domingo"] = 1] = "domingo";
    diasDaSemana[diasDaSemana["segunda"] = 2] = "segunda";
    diasDaSemana[diasDaSemana["ter\u00E7a"] = 3] = "ter\u00E7a";
    diasDaSemana[diasDaSemana["quarta"] = 4] = "quarta";
    diasDaSemana[diasDaSemana["quinta"] = 5] = "quinta";
    diasDaSemana[diasDaSemana["sexta"] = 6] = "sexta";
    diasDaSemana[diasDaSemana["s\u00E1bado"] = 7] = "s\u00E1bado";
})(diasDaSemana || (diasDaSemana = {}));
;
var colorsOfTheRainbow;
(function (colorsOfTheRainbow) {
    colorsOfTheRainbow["vermelho"] = "vermelho";
    colorsOfTheRainbow["laranja"] = "laranja";
    colorsOfTheRainbow["amarelo"] = "amarelo";
    colorsOfTheRainbow["verde"] = "verde";
    colorsOfTheRainbow["azul"] = "azul";
    colorsOfTheRainbow["anil"] = "anil";
    colorsOfTheRainbow["violeta"] = "violeta";
})(colorsOfTheRainbow || (colorsOfTheRainbow = {}));
;
var acoes;
(function (acoes) {
    acoes[acoes["salvar"] = 1] = "salvar";
    acoes[acoes["imprimir"] = 2] = "imprimir";
    acoes[acoes["abrir"] = 3] = "abrir";
    acoes[acoes["visualizar"] = 4] = "visualizar";
    acoes[acoes["fechar"] = 5] = "fechar";
})(acoes || (acoes = {}));
;
var rosaDosVentos;
(function (rosaDosVentos) {
    rosaDosVentos["Norte"] = "N";
    rosaDosVentos["Leste"] = "L";
    rosaDosVentos["Sul"] = "S";
    rosaDosVentos["Oeste"] = "O";
})(rosaDosVentos || (rosaDosVentos = {}));
;
var dia = diasDaSemana[1];
var acao = acoes[1];
console.log(dia);
console.log(colorsOfTheRainbow.vermelho);
console.log(acao);
console.log(rosaDosVentos['Norte']);
