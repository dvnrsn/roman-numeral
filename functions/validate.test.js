const { test, expect } = require("@jest/globals");
const { isPositiveInt } = require("./validate");

test.each([
  [1, true],
  ['1', true],
  [1.2, false],
  ['4.4', false],
  ['{}', false],
  ['-3', false],
  [0, false],
  [2513, true],
])('validate(%i) as positive integer', (val, exp) => {
  expect(isPositiveInt(val)).toBe(exp)
})