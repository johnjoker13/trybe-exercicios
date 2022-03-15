const fs = require("fs").promises;

const fourthFunc4 = (fileName) => {
  fs.readFile(fileName, "utf-8")
    .then((promise) => JSON.parse(promise))
    .then((newArray) =>
      newArray.filter((simpson) => ["1", "2", "3", "4"].includes(simpson.id))
    )
    .then((result) =>
      fs.writeFile("./simpsonsFamily.json", JSON.stringify(result))
    );
};

module.exports = fourthFunc4;
