const express = require('express');
const booksRoutes = require('./src/routes/booksRoutes');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/books', booksRoutes);

app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`));

module.exports = app;
