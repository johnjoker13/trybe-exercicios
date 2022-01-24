import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let randInt = 0;
  let hitMsg = '';
  const [number, setNumber] = useState(0);
  const [message, setMessage] = useState('');
  
  useEffect(() => toUpdateNumber(), [hitMsg]);

  const randomizeNumber = () => {
    const SECONDS = 10000;
    const myInterval = setInterval(() => {
      randInt = Math.floor(Math.random() * 100) + 1;
      if (randInt % 3 === 0 || randInt % 5 === 0) {
        hitMsg = 'Acerto!';
        setMessage(hitMsg);
        clearMsg();
      }
      setNumber(randInt);
      return () => clearInterval(myInterval);
    }, SECONDS);
  }

  const clearMsg = () => {
    setInterval(() => {
      setMessage('');
    }, 4000)
  }

  const toUpdateNumber = () => randomizeNumber();

  return (
    <div className="App">
      <p>{number}</p>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
