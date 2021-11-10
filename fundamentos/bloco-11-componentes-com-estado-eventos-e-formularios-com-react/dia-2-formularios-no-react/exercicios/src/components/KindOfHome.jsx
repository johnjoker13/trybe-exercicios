import React from "react";

class KindOfHome extends React.Component {
  render() {
    const { handleChange, value} = this.props;
    return (
      <>
        <label>
          Casa:
          <input
            type="radio"
            name="tipoEndereco"
            onChange={handleChange}
            value={value}
            required
          />
        </label>
        <label>
          Apartamento
          <input
            type="radio"
            name="tipoEndereco"
            onChange={handleChange}
            value={value}
            required
          />
        </label>
      </>
    );
  }
}

export default KindOfHome;
