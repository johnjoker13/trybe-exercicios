const {
  getAll,
  add,
  getById,
  exclude,
  update,
} = require('../models/productModel');

const getAllProducts = () => async (_req, res, _next) => {
  const products = await getAll();

  res.status(200).json(products);
};

const getProductsById = () => async (req, res, _next) => {
  const { id } = req.params;
  const products = await getById(id);

  if (products === null) {
    res.status(404).send({ message: 'Produto não encontrado' });
  }

  res.status(200).json(products);
};

const createProduct = () => async (req, res) => {
  const { name, brand } = req.body;
  try {
    const products = await add(name, brand);
    res.status(200).json(products);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const deleteProduct = () => async (req, res) => {
  const { id } = req.params;
  try {
    const products = await exclude(id);
    res.status(200).json(products);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const updateProduct = () => async (req, res) => {
  const { id } = req.params;
  const { name, brand } = req.body;
  try {
    const products = await update(id, name, brand);
    res.status(200).json(products);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
  deleteProduct,
  updateProduct,
};
