// App.js
import React, { Component } from 'react';
import './App.css';
import ValidEmail from './components/ValidEmail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
      isClicked: false,
    };
  }

  changeEmail(value) {
    this.setState({ email: value });
  }

  changeSaveEmail(value) {
    this.setState({ 
      saveEmail: value, 
      email: '',
      isClicked: true, 
    });
  }

  render() {
    const { email, saveEmail, isClicked } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input
            id="id-email"
            data-testid="id-email-user"
            value={ email }
            type="email"
            onChange={ (e) => this.changeEmail(e.target.value) }
          />
        </label>
        <input
          id="btn-enviar"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={ () => this.changeSaveEmail(email) }
        />
        <input id="btn-id" type="button" value="Voltar" />
        { isClicked ? <ValidEmail email={ saveEmail }  /> : null }
      </div>
    );
  }
}

export default App;