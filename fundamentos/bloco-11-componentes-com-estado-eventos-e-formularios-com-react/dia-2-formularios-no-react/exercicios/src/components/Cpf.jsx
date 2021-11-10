import React from "react";

class Cpf extends React.Component {
  render() {
      const {handleChange, value} = this.props;
    return (
      <label>
        CPF:
        <input
          type="text"
          maxLength="11"
          name="cpf"
          value={value}
          onChange={handleChange}
          required
        />
      </label>
    );
  }
}

export default Cpf;
