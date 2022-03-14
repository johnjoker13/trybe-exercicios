const fs = require("fs").promises;

const fourthFunc = (fileName) => {
  fs.readFile(fileName, "utf-8")
    .then((promise) => JSON.parse(promise))
    .then((data) => data.map((x) => `id: ${x.id} - name: ${x.name}`))
    .then((results) => console.log(results))
    .catch((err) =>
      console.error(`Não foi possível ler o arquivo ${fileName} Erro: ${err}`)
    );
};

module.exports = fourthFunc;
