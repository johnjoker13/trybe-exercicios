const serialize = (cepData) => {
  const { cep, logradouro, bairro, uf } = cepData;
  return {
    cep,
    logradouro,
    bairro,
    uf,
  };
};

module.exports = serialize;
