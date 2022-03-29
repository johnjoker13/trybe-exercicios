const Joi = require("joi");
const getAll = require("../models/cepModels");

const getAllCeps = async () => {
  const ceps = await getAll.getAllCeps();
  return res.status(200).json(ceps);
};

const getCep = async (req, res, next) => {
  const { cep } = req.params;
  const { error } = Joi.object({
    cep: Joi.string().pattern(new RegExp("d{5}-?d{3}")),
  }).validate({ cep });
  if (error) {
    return next(error);
  }
  const result = await getAll.getCepById(cep);
  return res.status(200).json(result);
};

module.exports = { getCep, getAllCeps };
