const fs = require("fs").promises;

const addNewCharacter = (fileName) => {
  fs.readFile(fileName, "utf-8")
    .then((character) => JSON.parse(character))
    .then((file) => file.push({ id: "8", name: "Nelson Muntz" }))
    .then((send) => fs.writeFile(fileName, JSON.stringify(send)))
    .then(console.log("success"))
    .catch((err) => console.log("Erro" + err));
};

module.exports = addNewCharacter;
