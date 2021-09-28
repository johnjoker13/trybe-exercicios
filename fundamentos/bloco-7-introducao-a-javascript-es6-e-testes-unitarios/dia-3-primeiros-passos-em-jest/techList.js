function techList(arr, name) {
  if (arr.length === 0) return "Vazio!";
  const newArray = arr.sort().map((x) => ({ tech: x, name }));
  return newArray;
}

module.exports = techList;
