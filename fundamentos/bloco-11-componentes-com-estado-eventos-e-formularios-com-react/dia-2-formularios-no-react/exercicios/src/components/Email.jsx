import React from "react";

class Email extends React.Component {
  render() {
      const {handleChange, email} = this.props;
    return (
      <label>
        E-mail:
        <input
          type="email"
          maxLength="50"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </label>
    );
  }
}

export default Email;
