const firstFunc = require("./exercicio-1");

firstFunc(10, 40, 1)
  .then((result) => console.log(result))
  .catch((err) => console.log(`Error: ${err}`));
