const numbers = [20, 30, 19, 1, 50];

function allGreaterThanEighteen(array) {
  let newArray = array.filter(x => x>18);
  return newArray;
}

console.log(allGreaterThanEighteen(numbers));