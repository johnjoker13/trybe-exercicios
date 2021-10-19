const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
  .then((resp) => resp.json())
  .then((data) => console.log(data.value))
  .catch((error) => console.log(`Algo deu errado ${error}`))
}

fetchJoke();    