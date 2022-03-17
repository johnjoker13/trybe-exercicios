const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs").promises;
const simpsons = require("./simpsons.json");
const PORT = 3001;
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  fs.writeFile("./arquivo.txt", "Hello, World!")
    .then(() => res.status(200).json({ message: "OK" }))
    .catch(() => res.status(500).json({ message: "Internal Server Error" }));
});

app.get("/ping", (req, res) => {
  res.status(200).json({ message: "pong" });
});

app.route("/hello").post((req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${name}!` });
});

app.post("/greetings", (req, res) => {
  const { name, age } = req.body;
  if (parseInt(age, 10) <= 17)
    return res.status(401).json({ message: "Unauthorized" });
  res.status(200).json({ message: `Hello, ${name}!` });
});

app.put("/users/:name/:age", (req, res) => {
  const { name, age } = req.body;
  res
    .status(200)
    .json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});
