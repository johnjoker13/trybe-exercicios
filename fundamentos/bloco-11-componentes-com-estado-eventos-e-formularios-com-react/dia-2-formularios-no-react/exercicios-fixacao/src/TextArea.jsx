import React from "react";

class TextArea extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label>
        Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
        <textarea
          name="estadoFavorito"
          value={value}
          onChange={handleChange}
        />
        {!value.length ? "campo vazio" : "ok"}
      </label>
    );
  }
}

export default TextArea;
