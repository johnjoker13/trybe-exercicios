const connection = require("./connection");
const Author = require("../models/Author");

const serialize = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.author_id,
});

const getBooksByAuthorId = async (id) => {
  const [books] = await connection.execute(
    "SELECT * FROM model_example.books WHERE author_id = ?",
    [id]
  );
  return books.map(serialize);
};

const getAllBooks = async () => {
  const [books] = await connection.execute(
    "SELECT id, title, author_id FROM model_example.books;"
  );
  return books.map(serialize);
};

const isBookValid = async (title, authorId) => {
  const getAllAuthors = await Author.getAll();
  const findId = await getAllAuthors.find(
    (author) => author.id === parseInt(authorId)
  );
  if (!title || title.length < 3) return false;
  if (!authorId || findId.length === 0) return false;

  return true;
};

const createBook = async (title, authorId) => {
  connection.query(
    "INSERT INTO model_example.books (title, author_id) VALUES (?,?)",
    [title, authorId]
  );
};

module.exports = {
  getBooksByAuthorId,
  getAllBooks,
  isBookValid,
  createBook,
};
