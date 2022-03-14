const fs = require("fs").promises;

const fourthFunc2 = (fileName, itemId) => {
  fs.readFile(fileName, "utf-8")
    .then((promise) => JSON.parse(promise))
    .then((data) => data.find((x) => x.id == itemId))
    .then((results) =>
      results !== undefined
        ? console.log(results)
        : console.error(`ID: ${itemId} não encontrado`)
    )
    .catch((err) =>
      console.error(`Não foi possível ler o arquivo ${fileName} Erro: ${err}`)
    );
};

module.exports = fourthFunc2;
