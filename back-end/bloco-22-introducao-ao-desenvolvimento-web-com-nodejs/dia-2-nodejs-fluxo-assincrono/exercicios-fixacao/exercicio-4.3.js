const fs = require("fs").promises;

const fourthFunc3 = (fileName) => {
  fs.readFile(fileName, "utf-8")
    .then((promise) => JSON.parse(promise))
    .then((data) => data.filter((x) => x.id !== "6" && x.id !== "10"))
    .then((results) => fs.writeFile(fileName, JSON.stringify(results)))
    .catch((err) =>
      console.error(`Não foi possível ler o arquivo ${fileName} Erro: ${err}`)
    );
};

module.exports = fourthFunc3;
