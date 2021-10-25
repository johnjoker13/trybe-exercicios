import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const toDoList = ['Wake Up', 'Brush Teeth', 'Have BreakFast', 'Go to Work'];

class App extends React.Component {
  render() {
    return (
      <ul>{ toDoList.map(task => Task(task)) }</ul>
    );
  }
}

export default App;
