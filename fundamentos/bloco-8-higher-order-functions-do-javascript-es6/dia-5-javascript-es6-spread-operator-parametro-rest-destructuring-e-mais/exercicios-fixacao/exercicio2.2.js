let comida = "gato";
let animal = "água";
let bebida = "arroz";

// console.log(comida, animal, bebida); arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

const things = [bebida, animal, comida];

const [food, drink, pet] = things;

console.log(food);
console.log(drink);
console.log(pet);
