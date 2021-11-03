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
    console.log("clickou:", this);
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
  };

  handleClickTwo() {
    console.log("clicked:", this);
    this.setState((estadoAnterior, _props) => ({
      clickNumber: estadoAnterior.clickNumber + 1,
    }));
  }
  handleClickThree() {
    console.log("clickeou:", this);
    this.setState((estadoAnterior, _props) => ({
      numberClick: estadoAnterior.numberClick + 1,
    }));
  }

  render() {
    return (
      <>
        <button onClick={this.handleClickOne}>
          {this.state.numeroDeCliques}
        </button>
        <button onClick={this.handleClickTwo}>{this.state.clickNumber}</button>
        <button onClick={this.handleClickThree}>
          {this.state.numberClick}
        </button>
      </>
    );
  }
}

export default App;
