import { useState } from 'react';
import './App.css';

function App() {
const [myTasks, setMyTasks] = useState([]);

const handleClick = () => {
 const inputValue = document.getElementById('task-input').value;
 console.log(inputValue);
 setMyTasks([...myTasks, inputValue]);
}
  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        name="task"
        id="task-input"
      />
      <button
        type="button"
        onClick={ handleClick }
      >
        Add Task
      </button>
      <ul>
        {myTasks.length !== 0 && myTasks.map((x, index) => (
          <li key={ index }>{x}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
