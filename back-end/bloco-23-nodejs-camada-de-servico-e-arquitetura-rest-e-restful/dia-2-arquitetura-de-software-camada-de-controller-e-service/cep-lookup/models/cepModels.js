const serialize = require("../services/cepServices");

const connection = require("./connection");

const getAllCeps = async () => {
  const [ceps] = await connection.query(
    "SELECT cep, logradouro, bairro, uf FROM cep_lookup.ceps;"
  );
  return ceps.map(serialize);
};

const getCepById = async (cep) => {
  const [ceps] = await connection.query(
    "SELECT cep, logradouro, bairro, uf FROM cep_lookup.ceps WHERE cep = ? ",
    [cep]
  );
  return ceps.map(serialize);
};

module.exports = { getAllCeps, getCepById };
