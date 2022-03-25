// hello-msc/models/Author.js
const connection = require("./connection");
const Authors = require("../services/Authors");

// Cria uma string com o nome completo da pessoa autora

// Converte o nome dos campos de snake_case para camelCase

// Busca todos os autores do banco.

const getAll = async () => {
  const [authors] = await connection.execute(
    "SELECT id, first_name, middle_name, last_name FROM model_example.authors;"
  );
  return Authors.serialize(authors);
};

/*
Busca uma pessoa autora específica, a partir do seu ID
@param {String} id ID da pessoa autora a ser recuperado
*/
const findById = async (id) => {
  const query =
    "SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?";

  const [authorData] = await connection.execute(query, [id]);

  if (authorData.length === 0) return null;

  return Authors.serialize(authorData)[0];
};

const createAuthor = async (firstName, middleName, lastName) => {
  const [author] = await connection.execute(
    "INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)",
    [firstName, middleName, lastName]
  );
  return Authors.serialize(author);
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};
