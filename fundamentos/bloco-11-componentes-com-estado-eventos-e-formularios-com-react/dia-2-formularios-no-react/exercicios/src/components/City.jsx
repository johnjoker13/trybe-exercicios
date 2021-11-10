import React from "react";

class City extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label>
        Cidade:
        <input
          type="text"
          maxLength="28"
          name="city"
          value={value}
          onChange={handleChange}
          required
        />
      </label>
    );
  }
}

export default City;
