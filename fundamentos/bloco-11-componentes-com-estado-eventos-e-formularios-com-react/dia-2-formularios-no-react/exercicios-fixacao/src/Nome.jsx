import React from "react";

class Nome extends React.Component {
  render() {
      const {value, handleChange} = this.props;
    return (
      <label htmlFor="nome">
        Nome
        <input
          type="text"
          name="nome"
          value={value}
          onChange={handleChange}
        />
        {!value.length ? "nome inválido" : "ok"}
      </label>
    );
  }
}

export default Nome;
