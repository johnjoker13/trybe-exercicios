const express = require('express');
const router = express.Router();

const {
  getAllProducts,
  getProductsById,
  createProduct,
  deleteProduct,
  updateProduct,
} = require('../controllers/productController');

router.route('/').get(getAllProducts).post(createProduct);

router
  .route('/:id')
  .get(getProductsById)
  .delete(deleteProduct)
  .put(updateProduct);

module.exports = router;
