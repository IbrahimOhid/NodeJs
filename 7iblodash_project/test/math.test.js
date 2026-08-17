const {
  sumNumber,
  multiplyNumber,
  divisionNumber,
} = require("../src/utils/math.js");

test("sum Number", () => {
  expect(sumNumber(3, 5)).toBe(8);
});

test("multiply Number", () => {
  expect(multiplyNumber(3, 5)).toBe(15);
});

test("division Number", () => {
  expect(divisionNumber(10, 2)).toBe(5);
});
