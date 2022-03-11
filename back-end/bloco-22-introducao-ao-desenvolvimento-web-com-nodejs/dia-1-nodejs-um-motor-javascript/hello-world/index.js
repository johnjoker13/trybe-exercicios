const readline = require("readline-sync");
const { question, questionInt } = readline;

const name = question("Qual seu nome? ");
const age = questionInt("Qual sua idade? ");

console.log(`Hello, ${name}! You are ${age} years old!`);
