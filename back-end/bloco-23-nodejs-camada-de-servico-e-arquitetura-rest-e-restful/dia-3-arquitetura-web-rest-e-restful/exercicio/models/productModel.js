const connection = require('./connection');

const getAll = async () => {
  try {
    const [products] = await connection.query(
      'SELECT id, name, brand FROM rest_exercicios.products;'
    );
    return products;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const add = async (name, brand) => {
  try {
    const [products] = await connection.query(
      `INSERT INTO rest_exercicios.products (name, brand) VALUES (?, ?);`,
      [name, brand]
    );
    return { id: products.insertId, name, brand };
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getById = async (id) => {
  try {
    const [products] = await connection.query(
      'SELECT * FROM rest_exercicios.products WHERE id = ?',
      [id]
    );
    if (!products.length) return null;
    return products[0];
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const update = async (id, name, brand) => {
  try {
    await connection.query(
      'UPDATE rest_exercicios.products SET name = ?, brand = ? WHERE id = ?',
      [name, brand, id]
    );
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id) => {
  try {
    const product = await getById(id);
    if (!product) return {};
    await connection.query(
      'DELETE FROM rest_exercicios.products WHERE id = ?',
      [id]
    );
    return product;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = { add, getAll, getById, update, exclude };
