import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree.bind(this);

    this.state = {
      numeroDeCliques: 0,
      clickNumber: 0,
      numberClick: 0,
    };
  }

  handleClickOne = () => {
    this.setState(
      (estadoAnterior, _props) => ({
        numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
      }),
      () => {
        console.log(`Botão 1 ${this.buttonColor(this.state.numeroDeCliques)}`);
      }
    );
  };

  handleClickTwo() {
    this.setState(
      (estadoAnterior, _props) => ({
        clickNumber: estadoAnterior.clickNumber + 1,
      }),
      () => {
        console.log(`Botão 2 ${this.buttonColor(this.state.clickNumber)}`);
      }
    );
  }
  handleClickThree() {
    this.setState(
      (estadoAnterior, _props) => ({
        numberClick: estadoAnterior.numberClick + 1,
      }),
      () => {
        console.log(`Botão 3 ${this.buttonColor(this.state.numberClick)}`);
      }
    );
  }

  buttonColor(num) {
    return num % 2 === 0 ? "green" : "white";
  }

  render() {
    const { numeroDeCliques, clickNumber, numberClick } = this.state;
    return (
      <>
        <button
          onClick={this.handleClickOne}
          style={{ backgroundColor: this.buttonColor(numeroDeCliques) }}
        >
          {this.state.numeroDeCliques}
        </button>
        <button
          onClick={this.handleClickTwo}
          style={{ backgroundColor: this.buttonColor(clickNumber) }}
        >
          {this.state.clickNumber}
        </button>
        <button
          onClick={this.handleClickThree}
          style={{ backgroundColor: this.buttonColor(numberClick) }}
        >
          {this.state.numberClick}
        </button>
      </>
    );
  }
}

export default App;
