const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA() {
  // escreva seu código aqui
  let newArr = names
    .map((x) => x.split(""))
    .reduce((acc, curr) => acc.concat(curr));
  return newArr.reduce((a, b) => a + (b === "a" || b === "A"), 0);
}

console.log(containsA());
