const express = require("express");
const { userValid, createUser } = require("../models/Users");
const router = express.Router();

router.post("/", async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  if (!userValid({ first_name, last_name, email, password }))
    return res.status(400).json({
      error: true,
      message: "O campo 'password' deve ter pelo menos 6 caracteres",
    });
  await createUser(first_name, last_name, email, password);
  return res.status(201).json({
    id: 1,
    firstName: "Calebe",
    lastName: "Junior",
    email: "calebe.junior@gmail.com",
  });
});

module.exports = router;
