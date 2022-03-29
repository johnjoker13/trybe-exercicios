const express = require("express");
const { getCep } = require("../controllers/cepControllers");
const { getAllCeps } = require("../models/cepModels");
const router = express.Router();

router.get("/", getAllCeps);
router.get("/:cep", getCep);

module.exports = router;
