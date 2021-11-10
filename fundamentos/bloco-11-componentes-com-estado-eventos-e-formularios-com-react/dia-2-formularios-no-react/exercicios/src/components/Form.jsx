import React from "react";
import Name from "./Name";
import Email from "./Email";
import Cpf from "./Cpf";
import Adress from "./Adress";
import City from "./City";
import Estado from "./Estado";
import KindOfHome from "./KindOfHome";

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: "",
      email: "",
      cpf: "",
      endereco: "",
      cidade: "",
      estado: "",
      tipoEndereco: "",
    };
  }

  handleChange({target}) {
    const {name, value} = target;
    this.setState({
        [name]: value,
    })
  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Preencha os campos à seguir</legend>
          <Name value={this.state.nome} handleChange={this.handleChange}/>
          <Email value={this.state.email} handleChange={this.handleChange}/>
          <Cpf value={this.state.cpf} handleChange={this.handleChange}/>
          <Adress value={this.state.endereco} handleChange={this.handleChange}/>
          <City value={this.state.cidade} handleChange={this.handleChange}/>
          <Estado value={this.state.estado} handleChange={this.handleChange}/>
          <KindOfHome value={this.state.tipoEndereco} handleChange={this.handleChange}/>
        </fieldset>
      </form>
    );
  }
}

export default Form;
