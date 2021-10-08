let vector = [
  [1, 2],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
];

const newArr = vector.flat();
const evenArr = [];

const sortArr = () => {
  for (let index = 0; index < newArr.length; index += 1) {
    if (newArr[index] % 2 == 0) {
      evenArr.push(newArr[index]);
    }
  }
  return evenArr;
};

console.log(sortArr());
