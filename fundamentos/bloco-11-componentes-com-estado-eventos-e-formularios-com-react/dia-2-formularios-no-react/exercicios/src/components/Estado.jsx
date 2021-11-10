import React from "react";

class Estado extends React.Component {
  render() {
    const estados = [
      "AC",
      "AL",
      "AP",
      "AM",
      "BA",
      "CE",
      "DF",
      "ES",
      "GO",
      "MA",
      "MT",
      "MS",
      "MG",
      "PA",
      "PB",
      "PR",
      "PE",
      "PI",
      "RJ",
      "RN",
      "RS",
      "RO",
      "RR",
      "SC",
      "SP",
      "SE",
      "TO",
    ];

    const { handleChange, value } = this.props;
    return (
      <label>
        Estado:
        <select name="estado" value={value} onChange={handleChange} required>
          {estados.map((estado, index) => (
            <option key={index} value={estado} name="estado">
              {estado}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

export default Estado;
