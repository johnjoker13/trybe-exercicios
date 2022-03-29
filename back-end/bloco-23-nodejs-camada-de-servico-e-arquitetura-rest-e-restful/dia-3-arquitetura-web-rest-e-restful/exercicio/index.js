const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', productRoutes);

app.listen(PORT, () => {
  console.log('App listening on port 3000!');
});
