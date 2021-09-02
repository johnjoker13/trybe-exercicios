let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let number_two = [];

for (let index = 0; index < numbers.length-1; index += 1) {
    let aux = numbers[index+1];
    let result = numbers[index]*aux; 
    number_two.push(result);
  }

console.log(number_two);