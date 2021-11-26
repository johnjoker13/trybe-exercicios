// ValidEmail.js
import React from 'react';
import PropTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  const validEMail = <p style={{ color: 'green', }}>Email Válido</p>;
  const invalidEMail = <p style={{ color: 'red', }}>Email Inválido</p>;
  return (
    <div>
      <h2 data-testid="id-is-email-user">{`Valor: ${email}`}</h2>
      <h3>{(verifyEmail(email) ? (validEMail) : (invalidEMail))}</h3>
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;