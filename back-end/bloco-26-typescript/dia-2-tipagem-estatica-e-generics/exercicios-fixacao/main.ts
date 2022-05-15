import BookModel from './models/Books';
import connection from './models/connection';

const main = async () => {
  const bookModel = new BookModel(connection);

  const books = await bookModel.getAll();

  return books;
};

export default main;
