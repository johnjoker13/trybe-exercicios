const firstFunc = require("./exercicio-1");
const secondFunc = require("./exercicio-2");
const fourthFunc = require("./exercicio-4");
const fourthFunc2 = require("./exercicio-4.2");

const readFile = "./simpsons.json";

firstFunc(10, 40, 1)
  .then((result) => console.log(result))
  .catch((err) => console.log(`Error: ${err}`));

const resultSecond = async () => {
  try {
    const result = await firstFunc(secondFunc(), secondFunc(), secondFunc());
    console.log(result);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
};

resultSecond();

fourthFunc(readFile);

fourthFunc2(readFile, 80);
