const express = require("express");
const app = express();
const authorsPaths = require("./Routes/authorsRoutes");
const booksPaths = require("./Routes/booksRoutes");
const usersPath = require("./Routes/userRoutes");
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/authors", authorsPaths);
app.use("/books", booksPaths);
app.use("/user", usersPath);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
