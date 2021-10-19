// apiScript.js     

const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
  .then((resp) => { 
    const data = resp.json();
    return data;
    })
  .then((data) => { document.querySelector('#jokeContainer').textContent = data.joke })
};

window.onload = () => fetchJoke();