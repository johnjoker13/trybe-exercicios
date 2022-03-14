const firstFunc = require("./exercicio-1");
const secondFunc = require("./exercicio-2");

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
