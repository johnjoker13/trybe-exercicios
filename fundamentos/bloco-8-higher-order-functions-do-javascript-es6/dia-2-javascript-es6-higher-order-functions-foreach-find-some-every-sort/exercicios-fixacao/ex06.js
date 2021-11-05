const people = [
  { name: "Mateus", age: 18 },
  { name: "José", age: 18 },
  { name: "Ana", age: 23 },
  { name: "Cláudia", age: 20 },
  { name: "Bruna", age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
  return Object.values(arr).every((x) => x.age >= minimumAge);
};

console.log(verifyAges(people, 18));