import React from "react";

class Email extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          value={value}
          onChange={handleChange}
        />
        {!value.match(/^\S+@\S+$/i) ? "email inválido" : "Ok"}
      </label>
    );
  }
}

export default Email;
