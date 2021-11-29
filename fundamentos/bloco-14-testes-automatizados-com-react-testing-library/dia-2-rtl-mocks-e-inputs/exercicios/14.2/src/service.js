const randomNumber = () => Math.floor(Math.random() * 101);

const capitalizeString = (str) => str.toUpperCase();

const getFirstChar = (str) => str.charAt(str.length);

const joinTwoStrings = (strOne, strTwo) => strOne+=strTwo;

const fetchDogs = async () => {
  const DOG_URL = 'https://dog.ceo/api/breeds/image/random';
  fetch(DOG_URL)
    .then((response) => response.json())
      .then((data) => console.log(data.message));
}

const functions = {
  randomNumber,
  capitalizeString,
  getFirstChar,
  joinTwoStrings,
  fetchDogs,
};

export default functions; 
