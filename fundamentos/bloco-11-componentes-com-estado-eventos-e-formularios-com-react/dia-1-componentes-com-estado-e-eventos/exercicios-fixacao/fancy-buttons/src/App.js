import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree.bind(this);
  }

  handleClickOne() {
    console.log("clickou:", this);
  }
  handleClickTwo() {
    console.log("clicked:", this);
  }
  handleClickThree() {
    console.log("clickeou:", this);
  }

  render() {
    return (
      <>
        <button onClick={this.handleClickOne}>Click-Me</button>
        <button onClick={this.handleClickTwo}>Click-Me</button>
        <button onClick={this.handleClickThree}>Click-Me</button>
      </>
    );
  }
}

export default App;
