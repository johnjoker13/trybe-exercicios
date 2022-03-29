const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "johnjoker",
  password: "012345678",
  database: "cep_lookup",
});

module.exports = connection;
