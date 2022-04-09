const { Book, sequelize } = require('../models');
const errorMSG = { message: 'Algo deu errado!' };
const notFound = { message: 'Livro não encontrado' };
const successMSG = { message: 'Sucesso' };

const getAll = async (_req, res) => {
  try {
    const books = await Book.findAll(
      { order: 
        [ 
          [sequelize.col('title', 'createdAt'), 'ASC'], 
        ],
      }
    );
    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(errorMSG);
  }
};

const findByAuthor = async (req, res) => {
  try {
    const { author } = req.query;
    const book = await Book.findOne(
      { where: { author } }
    );
    if (!book) return res.status(404).json(notFound);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(errorMSG);
  }
};

const getByPk = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) return res.status(404).json(notFound);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(errorMSG);
  }
};

const registerBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const book = await Book.create({
      title,
      author,
      pageQuantity,
    });
    res.status(201).json(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(errorMSG);
  }
};

const updateBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;
    const [updateBook] = await Book.update(
      { title, author, pageQuantity },
      { where: { id } },
    );
    if (!updateBook) return res.status(404).json(notFound);
    return res.status(200).json(successMSG);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(errorMSG);
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const bookDeleted = await Book.destroy({ where: { id } });
    if (!bookDeleted) return res.status(404).json(notFound);
    return res.status(200).json(successMSG);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json(errorMSG);
  }
};

module.exports = { getAll, findByAuthor, getByPk, registerBook, updateBook, deleteBook };
