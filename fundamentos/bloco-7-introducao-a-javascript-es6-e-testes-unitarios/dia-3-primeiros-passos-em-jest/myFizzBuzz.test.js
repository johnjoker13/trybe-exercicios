const myFizzBuzz = require("./myFizzBuzz");

test("retorns fizzbuzz", () => {
  expect(myFizzBuzz(15)).toBe("fizzbuzz");
  expect(myFizzBuzz(3)).toBe("fizz");
  expect(myFizzBuzz(5)).toBe("buzz");
  expect(myFizzBuzz(3)).toBe("fizz");
});
