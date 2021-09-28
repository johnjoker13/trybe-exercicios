const removeItem = require("./removeItem");

test("returns array without a element", () => {
  expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  expect(removeItem([1, 2, 3, 4], 5)).not.toEqual([1, 2, 3, 4, 5]);
});
