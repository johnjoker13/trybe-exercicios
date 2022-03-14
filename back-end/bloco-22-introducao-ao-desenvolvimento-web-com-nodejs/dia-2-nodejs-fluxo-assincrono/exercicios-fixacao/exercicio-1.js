const firstFunc = (num1, num2, num3) => {
  const checkParams = [num1, num2, num3].every((x) => typeof x === "number");
  const promise = new Promise((resolve, reject) => {
    if (!checkParams) reject(new Error("Informe apenas números"));

    const results = (num1 + num2) * num3;
    if (results < 50) {
      reject(new Error("Valor muito baixo"));
    } else {
      resolve(results);
    }
  });
  return promise;
};

module.exports = firstFunc;
