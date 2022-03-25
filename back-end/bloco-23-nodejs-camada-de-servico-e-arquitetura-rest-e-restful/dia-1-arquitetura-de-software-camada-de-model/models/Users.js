const Joi = require("joi");
const { userConnection } = require("./connection");

const createUserSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const userValid = async (firstName, lastName, email, password) => {
  return [firstName, lastName, email, password].every((x) => x !== undefined);
};

const createUser = async () => {
  const [users] = userConnection.query(
    "INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?,?,?,?)",
    [firstName, lastName, email, password]
  );
  return { id: users.id, firstName, lastName, email };
};

module.exports = { userValid, createUser };
