// Faça uma lista com as suas frutas favoritas
const specialFruit = ["strawberry", "apple", "banana"];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ["grape", "pear", "orange"];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));
