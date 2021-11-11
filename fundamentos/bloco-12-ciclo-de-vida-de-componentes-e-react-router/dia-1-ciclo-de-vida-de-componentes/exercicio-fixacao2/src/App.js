import './App.css';
import React, { Component } from 'react';
import UserData from './components/UserData';


class App extends Component {
  constructor() {
    super();
    this.state = {
      persons: [],
      loading: true,
    };
    console.log('constructor');
  }

  componentDidMount() {
    const url = 'https://api.randomuser.me/';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          persons: data.results,
          loading: false,
        });
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.persons[0].dob.age < 50 ? true : false;
  }

  render() {
    const loadingElement = <span>Loading...</span>
    const { persons, loading } = this.state;
    return (
      <div>
        <div>
          {persons.map((current, index) => (
            <UserData
              key={index}
              userPicture={current.picture.thumbnail}
              userEmail={current.email}
              userName={current.name.first}
              userAge={current.dob.age}
            />
          ))}
        </div>
        <span>{ loading ? loadingElement : '' }</span>
      </div>
    );
  }
}

export default App;
