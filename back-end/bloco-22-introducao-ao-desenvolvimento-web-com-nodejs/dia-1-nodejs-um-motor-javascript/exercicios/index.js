const calcIMC = require("./imc");
const readlineSync = require("readline-sync");
const { questionInt, questionFloat } = readlineSync;
const userWeight = questionInt("Qual seu peso?: ");
const userHeight = questionFloat("Qual sua altura?: ");

calcIMC(userWeight, userHeight);
