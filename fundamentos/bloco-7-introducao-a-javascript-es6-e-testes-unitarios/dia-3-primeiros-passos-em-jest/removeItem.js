function myRemove(arr, item) {
  const newArray = arr.filter((arr) => arr !== item);
  return newArray;
}

module.exports = myRemove;
