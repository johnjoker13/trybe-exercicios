const fs = require("fs");

const writeOnDocument = (fileName, data) => {
  fs.writeFileSync(fileName, data);
  return "ok";
};

module.exports = writeOnDocument;
