const express = require('express');
const { 
  getAll,
  findByAuthor,
  getByPk,
  registerBook,
  updateBook,
  deleteBook
 } = require('../controllers/booksController');
const router = express.Router();

router.get('/search', findByAuthor);
router.route('/').get(getAll).post(registerBook);
router.route('/:id').get(getByPk).put(updateBook).delete(deleteBook);

module.exports = router;
