import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <button onClick={() => console.log("Clicado")}>Click-Me</button>
        <button onClick={() => console.log("Clicked")}>Click-Me</button>
        <button onClick={() => console.log("Clickeado")}>Click-Me</button>
      </>
    );
  }
}

export default App;
