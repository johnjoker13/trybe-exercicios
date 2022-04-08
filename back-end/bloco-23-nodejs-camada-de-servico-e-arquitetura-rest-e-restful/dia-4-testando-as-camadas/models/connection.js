const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'johnjoker',
  password: '012345678',
  database: 'model_example',
});

module.exports = connection;
