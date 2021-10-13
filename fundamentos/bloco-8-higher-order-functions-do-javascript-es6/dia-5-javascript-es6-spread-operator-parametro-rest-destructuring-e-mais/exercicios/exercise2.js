// escreva sum abaixo

const sum = (...number) => {
  return number.reduce((x, y) => x + y);
};

console.log(sum(10, 20, 30, 40));
