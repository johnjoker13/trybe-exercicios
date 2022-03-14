const firstFunc = require("./exercicio-1");
const secondFunc = require("./exercicio-2");

firstFunc(10, 40, 1)
  .then((result) => console.log(`Primeiro: ${result}`))
  .catch((err) => console.log(`Error: ${err}`));

firstFunc(secondFunc(), secondFunc(), secondFunc())
  .then((result) => console.log(`Segundo: ${result}`))
  .catch((err) => console.log(`Error: ${err}`));
