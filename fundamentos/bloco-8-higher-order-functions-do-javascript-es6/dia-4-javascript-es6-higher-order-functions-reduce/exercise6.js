const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

function studentAverage() {
  // escreva seu código aqui
  let newObj = [];
  for (let i = 0; i < students.length; i += 1) {
    newObj.push({
      name: students[i],
      average: grades[i].reduce((acc, curr) => acc + curr) / grades[i].length,
    });
  }

  return newObj;
}

console.log(studentAverage());

const expected = [
  { name: "Pedro Henrique", average: 7.8 },
  { name: "Miguel", average: 9.2 },
  { name: "Maria Clara", average: 8.8 },
];
