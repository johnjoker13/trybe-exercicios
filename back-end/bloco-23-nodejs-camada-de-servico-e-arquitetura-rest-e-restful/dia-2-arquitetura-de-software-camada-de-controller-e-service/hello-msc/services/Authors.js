// services/Authors.js

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(" ");

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

const serialize = (authorData) =>
  authorData.map((item) =>
    getNewAuthor({
      id: item.id,
      firstName: item.first_name,
      middleName: item.middle_name,
      lastName: item.last_name,
    })
  );

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== "string") return false;
  if (!lastName || typeof lastName !== "string") return false;
  if (middleName && typeof middleName !== "string") return false;

  return true;
};

module.exports = {
  isValid,
  getNewAuthor,
  serialize,
};
