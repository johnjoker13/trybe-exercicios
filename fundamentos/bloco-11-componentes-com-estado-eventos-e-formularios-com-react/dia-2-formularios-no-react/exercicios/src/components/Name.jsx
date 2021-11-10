import React from "react";
class Name extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label>
        Nome:
        <input
          type="text"
          maxLength="40"
          name="nome"
          value={value}
          onChange={handleChange}
          required
        />
      </label>
    );
  }
}

export default Name;
