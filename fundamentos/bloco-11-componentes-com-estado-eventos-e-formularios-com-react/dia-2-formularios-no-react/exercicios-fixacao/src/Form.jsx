import React from "react";
import "./Form.css";
import Sabor from "./Sabor";
import TextArea from "./TextArea";
import Email from "./Email";
import Nome from "./Nome";

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      estadoFavorito: "",
      nome: "",
      email: "",
      valor: "select",
      formularioComErros: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleError() {
      const {email, nome, estadoFavorito} = this.state;
      const errorCases = [
          !email.match(/^\S+@\S+$/i),
          !nome.length,
          !estadoFavorito
      ];

      const formularioPreenchido = errorCases.every((error) => error !== true);

      this.setState({
          formularioComErros: !formularioPreenchido,
      })
  }

  handleChange({ target }) {
    const { name } = target;
    const value  = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, 
    () => {this.handleError();});
  }

  render() {
    return (
      <div>
        <h1>
          Estados e React - Tecnologia fantástica ou reagindo a regionalismos?
        </h1>
        <form className="form">
        <fieldset>
            <legend>Sorveteria</legend>
          <Sabor handleChange={this.handleChange}
          value={this.state.valor}/>
          <TextArea value={this.state.estadoFavorito} handleChange={this.handleChange} />
          <Nome value={this.state.nome} handleChange={this.handleChange}/>
          <Email value={this.state.email} handleChange={this.handleChange}/>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;
