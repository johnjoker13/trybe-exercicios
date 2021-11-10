import React from "react";

class Adress extends React.Component {
  render() {
    const { handleClick, value } = this.props;
    return (
      <label>
        Endereço:
        <input
          type="text"
          maxLength="200"
          name="endereco"
          value={value}
          onChange={handleClick}
          required
        />
      </label>
    );
  }
}

export default Adress;
