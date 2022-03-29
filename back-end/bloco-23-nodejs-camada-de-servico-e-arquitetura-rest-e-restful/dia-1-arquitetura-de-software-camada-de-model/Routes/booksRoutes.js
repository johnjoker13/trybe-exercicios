const express = require("express");
const router = express.Router();
const Books = require("../models/Books");

router
  .route("/")
  .get(async (_req, res) => {
    const books = await Books.getAllBooks();
    res.status(200).json(books);
  })
  .post(async (req, res) => {
    const { title, author_id } = req.body;
    if (!Books.isBookValid(title, author_id)) {
      return res.status(400).json({ message: "Dados inválidos" });
    }

    await Books.createBook(title, author_id);

    return res.status(201).json({ message: "Livro criado com sucesso!" });
  });

router.get("/books/:id", async (req, res) => {
  const { id } = req.params;
  const books = await Books.getBooksByAuthorId(id);
  res.status(200).json(books);
});

module.exports = router;
