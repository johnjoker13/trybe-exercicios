let arrayTeste = [2, 3, 2, 5, 8, 2, 3];

function maisRepetido(arr) {
  let occour = 0;
  for (let index of arr) {
    let result = 0;
    for (let n of arr) {
      if (index === n) {
        result += 1;
      }
    }
    if (result > occour) {
      occour = result;
    }
  }
  return console.log(occour);
}

maisRepetido(arrayTeste);

