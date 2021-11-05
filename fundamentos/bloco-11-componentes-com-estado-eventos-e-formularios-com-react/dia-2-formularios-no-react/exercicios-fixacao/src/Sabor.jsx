import React from "react";

class Sabor extends React.Component {
  render() {
    const {value, handleChange} = this.props;
    return (
      <label>
        Escolha seu sabor favorito:
        <select
          onChange={handleChange}
          value={value}
          name="valor"
        >
          <option value="laranja">Laranja</option>
          <option value="limao">Limão</option>
          <option value="coco">Coco</option>
          <option value="manga">Manga</option>
        </select>
      </label>
    );
  }
}

export default Sabor;
